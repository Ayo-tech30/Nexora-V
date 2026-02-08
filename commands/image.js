const genericImage = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗜𝗠𝗔𝗚𝗘 𖣔━━╮\n│\n│  🖼️ Image tools working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    sticker: genericImage,
    blur: genericImage,
    removebg: genericImage
};
