const mode = async ({ sock, msg, from, sender, args, db, isCreator, isMod, isGuardian }) => {
    if (!isCreator && !isMod && !isGuardian) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Creator/Mod/Guardian only!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
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
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Mode: private or public only!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    try {
        await db.collection('settings').doc('bot').set({ mode: newMode }, { merge: true });

        await sock.sendMessage(from, {
            text: `╭━━𖣔 𝗕𝗢𝗧 𝗠𝗢𝗗𝗘 𖣔━━╮\n│\n│  ✅ Mode: ${newMode.toUpperCase()}!\n│  ${newMode === 'private' ? '🔒 Staff only' : '🌍 Everyone can use'}\n│\n╰━━━━━━━━━━━━━━━━━━━╯`
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Database error!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

const addmod = async ({ sock, msg, from, isCreator, db }) => {
    if (!isCreator) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Creator only command!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Mention a user!\n│  Usage: .addmod @user\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    const userToAdd = mentioned[0];
    try {
        const modsRef = db.collection('settings').doc('mods');
        const modsDoc = await modsRef.get();
        const modsData = modsDoc.exists ? modsDoc.data() : { list: [], guardians: [] };
        
        if (modsData.list.includes(userToAdd)) {
            return await sock.sendMessage(from, {
                text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Already a mod!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
            }, { quoted: msg });
        }

        modsData.list.push(userToAdd);
        await modsRef.set(modsData, { merge: true });

        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗠𝗢𝗗 𝗔𝗗𝗗𝗘𝗗 𖣔━━╮\n│\n│  ✅ User added as mod!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Database error!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

const addguardian = async ({ sock, msg, from, isCreator, db }) => {
    if (!isCreator) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Creator only!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Mention a user!\n│  Usage: .addguardian @user\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    const userToAdd = mentioned[0];
    try {
        const modsRef = db.collection('settings').doc('mods');
        const modsDoc = await modsRef.get();
        const modsData = modsDoc.exists ? modsDoc.data() : { list: [], guardians: [] };
        
        if (modsData.guardians.includes(userToAdd)) {
            return await sock.sendMessage(from, {
                text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Already a guardian!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
            }, { quoted: msg });
        }

        modsData.guardians.push(userToAdd);
        await modsRef.set(modsData, { merge: true });

        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗚𝗨𝗔𝗥𝗗𝗜𝗔𝗡 𝗔𝗗𝗗𝗘𝗗 𖣔━━╮\n│\n│  ✅ User added as guardian!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Database error!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

const mods = async ({ sock, msg, from, db, CREATOR }) => {
    try {
        const modsRef = db.collection('settings').doc('mods');
        const modsDoc = await modsRef.get();
        const modsData = modsDoc.exists ? modsDoc.data() : { list: [], guardians: [] };
        
        let modsText = `╭━━𖣔 𝗠𝗢𝗗𝗦 & 𝗚𝗨𝗔𝗥𝗗𝗜𝗔𝗡𝗦 𖣔━━╮\n│\n│  👑 𝗖𝗿𝗲𝗮𝘁𝗼𝗿:\n│  ᯽ @${CREATOR.split('@')[0]}\n│\n`;

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

        const mentions = [CREATOR, ...(modsData.list || []), ...(modsData.guardians || [])];

        await sock.sendMessage(from, {
            text: modsText,
            mentions: mentions
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: `╭━━𖣔 𝗠𝗢𝗗𝗦 & 𝗚𝗨𝗔𝗥𝗗𝗜𝗔𝗡𝗦 𖣔━━╮\n│\n│  👑 𝗖𝗿𝗲𝗮𝘁𝗼𝗿:\n│  ᯽ @${CREATOR.split('@')[0]}\n│\n│  🛡️ 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗼𝗿𝘀: None\n│\n│  ⚔️ 𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻𝘀: None\n│\n╰━━━━━━━━━━━━━━━━━━━╯`,
            mentions: [CREATOR]
        }, { quoted: msg });
    }
};

module.exports = {
    mode,
    mods,
    addmod,
    addguardian,
    removemod: addmod, // Implement similarly
    removeguardian: addguardian // Implement similarly
};
