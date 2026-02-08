const genericEconomy = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗘𝗖𝗢𝗡𝗢𝗠𝗬 𖣔━━╮\n│\n│  💰 Economy system working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    accbal: genericEconomy,
    deposit: genericEconomy,
    withdraw: genericEconomy,
    send: genericEconomy,
    daily: genericEconomy,
    weekly: genericEconomy,
    monthly: genericEconomy,
    inv: genericEconomy,
    work: genericEconomy,
    rob: genericEconomy
};
