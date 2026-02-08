const genericGambling = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗚𝗔𝗠𝗕𝗟𝗜𝗡𝗚 𖣔━━╮\n│\n│  🎰 Gambling system working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    gamble: genericGambling,
    slots: genericGambling,
    roulette: genericGambling,
    blackjack: genericGambling,
    coinflip: genericGambling,
    dice: genericGambling,
    lottery: genericGambling,
    jackpot: genericGambling,
    crash: genericGambling,
    race: genericGambling,
    wheel: genericGambling,
    poker: genericGambling,
    mines: genericGambling,
    plinko: genericGambling,
    limbo: genericGambling
};
