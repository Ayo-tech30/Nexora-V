const mode = async ({ sock, msg, from, sender, args, db, isOwner, OWNER }) => {
    if (!isOwner) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Owner only command!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    if (args.length === 0) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Usage: .mode <private/public>\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    const newMode = args[0].toLowerCase();
    
    if (newMode !== 'private' && newMode !== 'public') {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Mode must be private or public!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    try {
        await db.collection('settings').doc('bot').set({ mode: newMode }, { merge: true });

        await sock.sendMessage(from, {
            text: `╭━━𖣔 𝗕𝗢𝗧 𝗠𝗢𝗗𝗘 𖣔━━╮
│
│  ✅ Mode changed to ${newMode.toUpperCase()}!
│  ${newMode === 'private' ? '🔒 Bot will only respond to owner' : '🌍 Bot will respond to everyone'}
│
╰━━━━━━━━━━━━━━━━━━━╯`
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Database error! Configure Firebase.\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

const mods = async ({ sock, msg, from, db, OWNER }) => {
    try {
        const modsRef = db.collection('settings').doc('mods');
        const modsDoc = await modsRef.get();
        const modsData = modsDoc.exists ? modsDoc.data() : { list: [], guardians: [] };
        
        let modsText = `╭━━𖣔 𝗠𝗢𝗗𝗦 & 𝗚𝗨𝗔𝗥𝗗𝗜𝗔𝗡𝗦 𖣔━━╮
│
│  👑 𝗢𝘄𝗻𝗲𝗿:
│  ᯽ @${OWNER.split('@')[0]}
│\n`;

        if (modsData.list && modsData.list.length > 0) {
            modsText += `│  🛡️ 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗼𝗿𝘀:\n`;
            modsData.list.forEach(mod => {
                modsText += `│  ᯽ @${mod.split('@')[0]}\n`;
            });
            modsText += `│\n`;
        } else {
            modsText += `│  🛡️ 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗼𝗿𝘀: None\n│\n`;
        }

        if (modsData.guardians && modsData.guardians.length > 0) {
            modsText += `│  ⚔️ 𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻𝘀:\n`;
            modsData.guardians.forEach(guardian => {
                modsText += `│  ᯽ @${guardian.split('@')[0]}\n`;
            });
        } else {
            modsText += `│  ⚔️ 𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻𝘀: None\n`;
        }

        modsText += `╰━━━━━━━━━━━━━━━━━━━╯`;

        const mentions = [OWNER, ...(modsData.list || []), ...(modsData.guardians || [])];

        await sock.sendMessage(from, {
            text: modsText,
            mentions: mentions
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: `╭━━𖣔 𝗠𝗢𝗗𝗦 & 𝗚𝗨𝗔𝗥𝗗𝗜𝗔𝗡𝗦 𖣔━━╮
│
│  👑 𝗢𝘄𝗻𝗲𝗿:
│  ᯽ @${OWNER.split('@')[0]}
│
│  🛡️ 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗼𝗿𝘀: None
│
│  ⚔️ 𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻𝘀: None
│
╰━━━━━━━━━━━━━━━━━━━╯`,
            mentions: [OWNER]
        }, { quoted: msg });
    }
};

const genericOwner = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗢𝗪𝗡𝗘𝗥 𖣔━━╮\n│\n│  👑 Owner command working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    mode,
    mods,
    addmod: genericOwner,
    removemod: genericOwner,
    addguardian: genericOwner,
    removeguardian: genericOwner
};
