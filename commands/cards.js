const genericCard = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗖𝗔𝗥𝗗𝗦 𖣔━━╮\n│\n│  🎴 Cards system working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    mycards: genericCard,
    get: genericCard,
    deck: genericCard,
    givecard: genericCard,
    sellcard: genericCard,
    auction: genericCard,
    bid: genericCard,
    rollcard: genericCard,
    cards: genericCard
};
