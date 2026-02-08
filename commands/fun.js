const match = async ({ sock, msg, from }) => {
    const percentage = Math.floor(Math.random() * 101);
    await sock.sendMessage(from, {
        text: `╭━━𖣔 𝗠𝗔𝗧𝗖𝗛 𝗠𝗘𝗧𝗘𝗥 𖣔━━╮\n│\n│  💘 Match Score: ${percentage}%\n│  ${percentage > 70 ? '🔥 Perfect Match!' : percentage > 40 ? '😊 Good Match' : '😅 Not So Great'}\n│\n╰━━━━━━━━━━━━━━━━━━━╯`
    }, { quoted: msg });
};

const genericFun = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, { text: '╭━━𖣔 𝗙𝗨𝗡 𖣔━━╮\n│\n│  🌟 Fun command working!\n│  ⏳ Full feature coming soon\n│\n╰━━━━━━━━━━━━━━━━━━━╯' }, { quoted: msg });
};

module.exports = {
    match,
    roast: genericFun,
    simp: genericFun
};
