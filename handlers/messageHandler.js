const { db } = require('../firebase');
const { jidNormalizedUser } = require('@whiskeysockets/baileys');

// Import all command handlers
const mainCommands = require('../commands/main');
const profileCommands = require('../commands/profile');
const adminCommands = require('../commands/admin');
const cardCommands = require('../commands/cards');
const economyCommands = require('../commands/economy');
const gamblingCommands = require('../commands/gambling');
const searchCommands = require('../commands/search');
const imageCommands = require('../commands/image');
const funCommands = require('../commands/fun');
const downloadCommands = require('../commands/download');
const ownerCommands = require('../commands/owner');

const OWNER = '2349049460676@s.whatsapp.net';
const PREFIX = '.';

async function handleMessage(sock, msg) {
    try {
        const messageType = Object.keys(msg.message)[0];
        const from = msg.key.remoteJid;
        const sender = jidNormalizedUser(msg.key.participant || msg.key.remoteJid);
        const isGroup = from.endsWith('@g.us');
        
        let body = '';
        
        if (messageType === 'conversation') {
            body = msg.message.conversation;
        } else if (messageType === 'extendedTextMessage') {
            body = msg.message.extendedTextMessage.text;
        } else if (messageType === 'imageMessage') {
            body = msg.message.imageMessage.caption || '';
        } else if (messageType === 'videoMessage') {
            body = msg.message.videoMessage.caption || '';
        }

        if (!body.startsWith(PREFIX)) return;

        const args = body.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        console.log(`📨 Command received: .${command} from ${sender.split('@')[0]}`);

        // Get bot mode (with fallback)
        let botMode = 'public';
        try {
            const botData = await db.collection('settings').doc('bot').get();
            botMode = botData.exists ? botData.data().mode || 'public' : 'public';
        } catch (error) {
            // If database fails, continue with default mode
        }

        // Check if bot is in private mode
        if (botMode === 'private' && sender !== OWNER) {
            console.log(`🔒 Private mode - ignoring command from non-owner`);
            return;
        }

        // Get group metadata if in group
        let groupMetadata = null;
        let isBotAdmin = false;
        let isUserAdmin = false;
        let groupAdmins = [];
        
        if (isGroup) {
            try {
                groupMetadata = await sock.groupMetadata(from);
                groupAdmins = groupMetadata.participants
                    .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
                    .map(p => p.id);
                
                const botJid = jidNormalizedUser(sock.user.id);
                isBotAdmin = groupAdmins.includes(botJid);
                isUserAdmin = groupAdmins.includes(sender);
            } catch (error) {
                console.log('Could not get group metadata');
            }
        }

        // Check if user is owner, mod, or guardian
        const isOwner = sender === OWNER;
        let mods = [];
        let guardians = [];
        try {
            const modsDoc = await db.collection('settings').doc('mods').get();
            mods = modsDoc.exists ? modsDoc.data().list || [] : [];
            guardians = modsDoc.exists ? modsDoc.data().guardians || [] : [];
        } catch (error) {
            // Continue without mods/guardians if database fails
        }
        
        const isMod = mods.includes(sender);
        const isGuardian = guardians.includes(sender);

        const context = {
            sock,
            msg,
            from,
            sender,
            args,
            isGroup,
            groupMetadata,
            isBotAdmin,
            isUserAdmin,
            isOwner,
            isMod,
            isGuardian,
            PREFIX,
            OWNER,
            db,
            messageType
        };

        // Route to appropriate command handler
        let commandFound = false;

        if (mainCommands[command]) {
            commandFound = true;
            await mainCommands[command](context);
        } else if (profileCommands[command]) {
            commandFound = true;
            await profileCommands[command](context);
        } else if (adminCommands[command]) {
            commandFound = true;
            await adminCommands[command](context);
        } else if (cardCommands[command]) {
            commandFound = true;
            await cardCommands[command](context);
        } else if (economyCommands[command]) {
            commandFound = true;
            await economyCommands[command](context);
        } else if (gamblingCommands[command]) {
            commandFound = true;
            await gamblingCommands[command](context);
        } else if (searchCommands[command]) {
            commandFound = true;
            await searchCommands[command](context);
        } else if (imageCommands[command]) {
            commandFound = true;
            await imageCommands[command](context);
        } else if (funCommands[command]) {
            commandFound = true;
            await funCommands[command](context);
        } else if (downloadCommands[command]) {
            commandFound = true;
            await downloadCommands[command](context);
        } else if (ownerCommands[command]) {
            commandFound = true;
            await ownerCommands[command](context);
        }

        if (commandFound) {
            console.log(`✅ Command executed: .${command}`);
        } else {
            console.log(`❓ Unknown command: .${command}`);
            await sock.sendMessage(from, {
                text: `╭━━𖣔 𝗨𝗡𝗞𝗡𝗢𝗪𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𖣔━━╮\n│\n│  ❌ Command ".${command}" not found!\n│  Use .menu to see all commands\n│\n╰━━━━━━━━━━━━━━━━━━━╯`
            }, { quoted: msg });
        }

    } catch (error) {
        console.error('Error handling message:', error);
        try {
            await sock.sendMessage(msg.key.remoteJid, {
                text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ An error occurred!\n│  Please try again\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
            }, { quoted: msg });
        } catch (e) {
            console.error('Could not send error message');
        }
    }
}

module.exports = { handleMessage };
