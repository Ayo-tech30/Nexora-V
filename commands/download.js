const genericDownload = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𖣔━━╮\n│\n│  🪷 Download working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    play: genericDownload,
    instagram: genericDownload,
    tiktok: genericDownload
};
