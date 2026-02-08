const profile = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𖣔━━╮\n│\n│  👤 Profile feature working!\n│  ⏳ Full implementation coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    p: profile,
    profile,
    setprofile: profile,
    setp: profile,
    setprofilequote: profile,
    setage: profile,
    setname: profile
};
