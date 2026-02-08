const profile = async ({ sock, msg, from, sender, db }) => {
    let targetUser = sender;
    
    if (msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
        targetUser = msg.message.extendedTextMessage.contextInfo.mentionedJid[0];
    }

    try {
        const userRef = db.collection('users').doc(targetUser);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return await sock.sendMessage(from, {
                text: '╭━━𖣔 𝗡𝗢𝗧 𝗥𝗘𝗚𝗜𝗦𝗧𝗘𝗥𝗘𝗗 𖣔━━╮\n│\n│  ❌ User not registered!\n│  Use .register to create profile\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
            }, { quoted: msg });
        }

        const userData = userDoc.data();
        const profileText = `╭━━𖣔 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𖣔━━╮
│
│  👤 Name: ${userData.name}
│  🎂 Age: ${userData.age}
│  💬 Bio: ${userData.bio}
│  💰 Wallet: ${userData.wallet}
│  🏦 Bank: ${userData.bank}
│  🎴 Cards: ${userData.cards?.length || 0}
│  📊 Level: ${userData.level}
│  ⭐ XP: ${userData.xp}
│
╰━━━━━━━━━━━━━━━━━━━╯`;

        await sock.sendMessage(from, { text: profileText }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Could not fetch profile\n│  Please register first: .register\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

const setname = async ({ sock, msg, from, sender, args, db }) => {
    if (args.length === 0) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Provide a name!\n│  Usage: .setname <name>\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    const name = args.join(' ');
    try {
        const userRef = db.collection('users').doc(sender);
        await userRef.update({ name });

        await sock.sendMessage(from, {
            text: `╭━━𖣔 𝗡𝗔𝗠𝗘 𝗨𝗣𝗗𝗔𝗧𝗘𝗗 𖣔━━╮\n│\n│  ✅ Name updated!\n│  👤 New Name: ${name}\n│\n╰━━━━━━━━━━━━━━━━━━━╯`
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Register first: .register\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

module.exports = {
    p: profile,
    profile,
    setprofile: profile,
    setp: profile,
    setprofilequote: profile,
    setage: profile,
    setname
};
