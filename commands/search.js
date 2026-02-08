const genericSearch = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗦𝗘𝗔𝗥𝗖𝗛 𖣔━━╮\n│\n│  🔍 Search working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    gpt: genericSearch,
    ai: genericSearch,
    google: genericSearch
};
