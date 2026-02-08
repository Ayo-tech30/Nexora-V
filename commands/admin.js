const tagall = async ({ sock, msg, from, args, isGroup, groupMetadata }) => {
    if (!isGroup) {
        return await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Group command only!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }

    const message = args.join(' ') || 'Attention Everyone!';
    const participants = groupMetadata.participants.map(p => p.id);

    let tagText = `╭━━𖣔 𝙂𝙍𝙊𝙐𝙋 𝙏𝘼𝙂 𖣔━━╮
│                       
│  📢 𝘼𝙉𝙉𝙊𝙐𝙉𝘾𝙀𝙈𝙀𝙉𝙏
│  
│  💬 𝙈𝙚𝙨𝙨𝙖𝙜𝙚:
│  ${message}
│
╰━━━━━━━━━━━━━━━━━━━╯

👥 𝙏𝘼𝙂𝙂𝙀𝘿 𝙈𝙀𝙈𝘽𝙀𝙍𝙎
━━━━━━━━━━━━━━━\n`;

    participants.forEach(p => {
        tagText += `᯽ @${p.split('@')[0]}\n`;
    });

    tagText += `━━━━━━━━━━━━━━━\n\n💜 𝙏𝙤𝙩𝙖𝙡: ${participants.length} 𝙈𝙚𝙢𝙗𝙚𝙧𝙨 𝙏𝙖𝙜𝙜𝙚𝙙`;

    await sock.sendMessage(from, {
        text: tagText,
        mentions: participants
    }, { quoted: msg });
};

const genericAdmin = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗔𝗗𝗠𝗜𝗡 𖣔━━╮\n│\n│  🛡️ Admin command working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    promote: genericAdmin,
    demote: genericAdmin,
    kick: genericAdmin,
    tagall,
    hidetag: genericAdmin,
    delete: genericAdmin,
    groupinfo: genericAdmin,
    mute: genericAdmin,
    unmute: genericAdmin,
    warn: genericAdmin,
    warncount: genericAdmin,
    resetwarn: genericAdmin,
    welcome: genericAdmin,
    goodbye: genericAdmin,
    antilink: genericAdmin
};
