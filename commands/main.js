const moment = require('moment-timezone');

const menu = async ({ sock, msg, from }) => {
    const menuText = `╭━━𖣔 𝗡𝗘𝗫𝗢𝗥𝗔 𖣔━━╮
│  ✦ 𝙋𝙧𝙚𝙛𝙞𝙭   :  .
│  ✦ 𝘽𝙤𝙩 𝙉𝙖𝙢𝙚 :  𝗩𝗶𝗼𝗹𝗲𝘁
│  ✦ 𝙊𝙬𝙣𝙚𝙧    :  𝗞𝘆𝗻𝘅
│  ✦ 𝙎𝙩𝙖𝙩𝙪𝙨   :  𝙊𝙣𝙡𝙞𝙣𝙚 ✓
│  ✦ 𝘿𝘽        :  Firebase 🔥
╰━━━━━━━━━━━━━╯

⚙️ 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 ⚙️
━━━━━━━━━━━━━━
᯽ .𝙢𝙚𝙣𝙪
᯽ .𝙥𝙞𝙣𝙜
᯽ .𝙖𝙡𝙞𝙫𝙚
᯽ .𝙖𝙛𝙠
᯽ .𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧 | .𝙧𝙚𝙜
᯽ .𝙡𝙚𝙖𝙙𝙚𝙧𝙗𝙤𝙖𝙧𝙙 | .𝙡𝙗
᯽ .𝙢𝙖𝙧𝙠𝙚𝙩
᯽ .𝙢𝙪𝙜𝙚𝙣

👤 𝙋𝙍𝙊𝙁𝙄𝙇𝙀 𝙈𝙀𝙉𝙐 👤
━━━━━━━━━━━━━━
᯽ .𝙥 | .𝙥𝙧𝙤𝙛𝙞𝙡𝙚 [@𝙪𝙨𝙚𝙧]
᯽ .𝙨𝙚𝙩𝙥𝙧𝙤𝙛𝙞𝙡𝙚 | .𝙨𝙚𝙩𝙥
᯽ .𝙨𝙚𝙩𝙥𝙧𝙤𝙛𝙞𝙡𝙚𝙦𝙪𝙤𝙩𝙚
᯽ .𝙨𝙚𝙩𝙖𝙜𝙚 <𝙣𝙪𝙢>
᯽ .𝙨𝙚𝙩𝙣𝙖𝙢𝙚 <𝙣𝙖𝙢𝙚>

🛡️ 𝙂𝙍𝙊𝙐𝙋 𝘼𝘿𝙈𝙄𝙉 🛡️
━━━━━━━━━━━━━━
᯽ .𝙥𝙧𝙤𝙢𝙤𝙩𝙚 @𝙪𝙨𝙚𝙧
᯽ .𝙙𝙚𝙢𝙤𝙩𝙚 @𝙪𝙨𝙚𝙧
᯽ .𝙢𝙪𝙩𝙚 @𝙪𝙨𝙚𝙧
᯽ .𝙪𝙣𝙢𝙪𝙩𝙚 @𝙪𝙨𝙚𝙧
᯽ .𝙬𝙖𝙧𝙣 @𝙪𝙨𝙚𝙧
᯽ .𝙬𝙖𝙧𝙣𝙘𝙤𝙪𝙣𝙩 @𝙪𝙨𝙚𝙧
᯽ .𝙧𝙚𝙨𝙚𝙩𝙬𝙖𝙧𝙣 @𝙪𝙨𝙚𝙧
᯽ .𝙠𝙞𝙘𝙠 @𝙪𝙨𝙚𝙧
᯽ .𝙙𝙚𝙡𝙚𝙩𝙚
᯽ .𝙩𝙖𝙜𝙖𝙡𝙡
᯽ .𝙝𝙞𝙙𝙚𝙩𝙖𝙜
᯽ .𝙬𝙚𝙡𝙘𝙤𝙢𝙚 <𝙤𝙣/𝙤𝙛𝙛>
᯽ .𝙜𝙤𝙤𝙙𝙗𝙮𝙚 <𝙤𝙣/𝙤𝙛𝙛>
᯽ .𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠 <𝙤𝙣/𝙤𝙛𝙛>
᯽ .𝙜𝙧𝙤𝙪𝙥𝙞𝙣𝙛𝙤

🎴 𝘾𝘼𝙍𝘿𝙎 𝙈𝙀𝙉𝙐 🎴
━━━━━━━━━━━━━━
᯽ .𝙢𝙮𝙘𝙖𝙧𝙙𝙨
᯽ .𝙜𝙚𝙩 <𝙞𝙙>
᯽ .𝙙𝙚𝙘𝙠
᯽ .𝙜𝙞𝙫𝙚𝙘𝙖𝙧𝙙 @𝙪𝙨𝙚𝙧
᯽ .𝙨𝙚𝙡𝙡𝙘𝙖𝙧𝙙
᯽ .𝙖𝙪𝙘𝙩𝙞𝙤𝙣
᯽ .𝙗𝙞𝙙
᯽ .𝙧𝙤𝙡𝙡𝙘𝙖𝙧𝙙
᯽ .𝙘𝙖𝙧𝙙𝙨 <𝙤𝙣/𝙤𝙛𝙛>

💰 𝙀𝘾𝙊𝙉𝙊𝙈𝙔 𝙈𝙀𝙉𝙐 💰
━━━━━━━━━━━━━━
᯽ .𝙖𝙘𝙘𝙗𝙖𝙡 [@𝙪𝙨𝙚𝙧]
᯽ .𝙙𝙚𝙥𝙤𝙨𝙞𝙩 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙬𝙞𝙩𝙝𝙙𝙧𝙖𝙬 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙨𝙚𝙣𝙙 @𝙪𝙨𝙚𝙧 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙙𝙖𝙞𝙡𝙮
᯽ .𝙬𝙚𝙚𝙠𝙡𝙮
᯽ .𝙢𝙤𝙣𝙩𝙝𝙡𝙮
᯽ .𝙞𝙣𝙫
᯽ .𝙬𝙤𝙧𝙠
᯽ .𝙧𝙤𝙗 @𝙪𝙨𝙚𝙧

🎰 𝙂𝘼𝙈𝘽𝙇𝙄𝙉𝙂 𝙈𝙀𝙉𝙐 🎰
━━━━━━━━━━━━━━
᯽ .𝙜𝙖𝙢𝙗𝙡𝙚 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙨𝙡𝙤𝙩𝙨 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙧𝙤𝙪𝙡𝙚𝙩𝙩𝙚 <𝙗𝙚𝙩> <𝙘𝙤𝙡𝙤𝙧/𝙣𝙪𝙢𝙗𝙚𝙧>
᯽ .𝙗𝙡𝙖𝙘𝙠𝙟𝙖𝙘𝙠 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙘𝙤𝙞𝙣𝙛𝙡𝙞𝙥 <𝙖𝙢𝙤𝙪𝙣𝙩> <𝙝𝙚𝙖𝙙𝙨/𝙩𝙖𝙞𝙡𝙨>
᯽ .𝙙𝙞𝙘𝙚 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙡𝙤𝙩𝙩𝙚𝙧𝙮
᯽ .𝙟𝙖𝙘𝙠𝙥𝙤𝙩
᯽ .𝙘𝙧𝙖𝙨𝙝 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙧𝙖𝙘𝙚 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙬𝙝𝙚𝙚𝙡 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙥𝙤𝙠𝙚𝙧 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙢𝙞𝙣𝙚𝙨 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙥𝙡𝙞𝙣𝙠𝙤 <𝙖𝙢𝙤𝙪𝙣𝙩>
᯽ .𝙡𝙞𝙢𝙗𝙤 <𝙖𝙢𝙤𝙪𝙣𝙩> <𝙢𝙪𝙡𝙩𝙞𝙥𝙡𝙞𝙚𝙧>

🔍 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 🔍
━━━━━━━━━━━━━━
᯽ .𝙜𝙥𝙩 <𝙦𝙪𝙚𝙧𝙮>
᯽ .𝙖𝙞 <𝙦𝙪𝙚𝙧𝙮>
᯽ .𝙜𝙤𝙤𝙜𝙡𝙚 <𝙦𝙪𝙚𝙧𝙮>

🖼️ 𝙄𝙈𝘼𝙂𝙀 𝙈𝙀𝙉𝙐 🖼️
━━━━━━━━━━━━━━
᯽ .𝙨𝙩𝙞𝙘𝙠𝙚𝙧
᯽ .𝙗𝙡𝙪𝙧
᯽ .𝙧𝙚𝙢𝙤𝙫𝙚𝙗𝙜

🌟 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 🌟
━━━━━━━━━━━━━━
᯽ .𝙢𝙖𝙩𝙘𝙝 [@𝙪𝙨𝙚𝙧]
᯽ .𝙧𝙤𝙖𝙨𝙩 @𝙪𝙨𝙚𝙧
᯽ .𝙨𝙞𝙢𝙥 @𝙪𝙨𝙚𝙧

🪷 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 🪷
━━━━━━━━━━━━━━
᯽ .𝙥𝙡𝙖𝙮 <𝙨𝙤𝙣𝙜>
᯽ .𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 <𝙪𝙧𝙡>
᯽ .𝙩𝙞𝙠𝙩𝙤𝙠 <𝙪𝙧𝙡>
━━━━━━━━━━━━━━

💜 𝗩𝗶𝗼𝗹𝗲𝘁 𝗕𝘆 𝗞𝘆𝗻𝘅`;

    await sock.sendMessage(from, { text: menuText }, { quoted: msg });
};

const ping = async ({ sock, msg, from }) => {
    const start = Date.now();
    await sock.sendMessage(from, { 
        text: '╭━━𖣔 𝗣𝗜𝗡𝗚 𖣔━━╮\n│  ⏳ Calculating...\n╰━━━━━━━━━━━━━╯' 
    }, { quoted: msg });
    
    const end = Date.now();
    const ping = end - start;
    
    await sock.sendMessage(from, { 
        text: `╭━━𖣔 𝗣𝗢𝗡𝗚 𖣔━━╮\n│\n│  ⚡ Speed: ${ping}ms\n│  🤖 Status: Online\n│  🔥 Server: Active\n│\n╰━━━━━━━━━━━━━╯`
    });
};

const alive = async ({ sock, msg, from }) => {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    
    const aliveText = `╭━━𖣔 𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗨𝗦 𖣔━━╮
│
│  ✅ Bot is Alive!
│  👑 Owner: Kynx
│  ⏰ Uptime: ${hours}h ${minutes}m
│  🔥 Database: Firebase
│  ⚡ Status: Active
│
╰━━━━━━━━━━━━━━━━━━━╯`;

    await sock.sendMessage(from, { text: aliveText }, { quoted: msg });
};

const afk = async ({ sock, msg, from, sender, args, db }) => {
    const reason = args.join(' ') || 'No reason';
    
    try {
        const userRef = db.collection('users').doc(sender);
        await userRef.update({
            afk: true,
            afkReason: reason,
            afkTime: Date.now()
        });
    } catch (error) {
        // Ignore database error
    }

    await sock.sendMessage(from, {
        text: `╭━━𖣔 𝗔𝗙𝗞 𝗠𝗢𝗗𝗘 𖣔━━╮
│
│  😴 You are now AFK
│  📝 Reason: ${reason}
│
╰━━━━━━━━━━━━━━━━━━━╯`
    }, { quoted: msg });
};

const register = async ({ sock, msg, from, sender, db }) => {
    try {
        const userRef = db.collection('users').doc(sender);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
            return await sock.sendMessage(from, {
                text: '╭━━𖣔 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗥𝗘𝗚𝗜𝗦𝗧𝗘𝗥𝗘𝗗 𖣔━━╮\n│\n│  ✅ You are already registered!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
            }, { quoted: msg });
        }

        await userRef.set({
            id: sender,
            name: 'User',
            age: 0,
            bio: 'No bio set',
            registeredAt: Date.now(),
            wallet: 1000,
            bank: 0,
            cards: [],
            level: 1,
            xp: 0,
            afk: false,
            lastDaily: 0,
            lastWeekly: 0,
            lastMonthly: 0,
            lastWork: 0
        });

        await sock.sendMessage(from, {
            text: `╭━━𖣔 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡 𖣔━━╮
│
│  ✅ Registration Successful!
│  💰 Starting Wallet: 1000 coins
│  🎴 Starting Cards: 0
│  📊 Level: 1
│
│  Use .menu to get started!
│
╰━━━━━━━━━━━━━━━━━━━╯`
        }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗘𝗥𝗥𝗢𝗥 𖣔━━╮\n│\n│  ❌ Database error! Please configure Firebase.\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

const leaderboard = async ({ sock, msg, from, db }) => {
    try {
        const usersSnapshot = await db.collection('users').orderBy('wallet', 'desc').limit(10).get();
        
        let lbText = `╭━━𖣔 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 𖣔━━╮
│
│  💰 𝗧𝗼𝗽 𝗥𝗶𝗰𝗵𝗲𝘀𝘁 𝗨𝘀𝗲𝗿𝘀
│\n`;

        let rank = 1;
        usersSnapshot.forEach(doc => {
            const data = doc.data();
            const name = data.name || 'Unknown';
            const wallet = data.wallet || 0;
            lbText += `│  ${rank}. ${name}: ${wallet} coins\n`;
            rank++;
        });

        lbText += `│\n╰━━━━━━━━━━━━━━━━━━━╯`;

        await sock.sendMessage(from, { text: lbText }, { quoted: msg });
    } catch (error) {
        await sock.sendMessage(from, {
            text: '╭━━𖣔 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 𖣔━━╮\n│\n│  📊 No data available yet\n│  Register users will appear here!\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
        }, { quoted: msg });
    }
};

const market = async ({ sock, msg, from }) => {
    const marketText = `╭━━𖣔 𝗠𝗔𝗥𝗞𝗘𝗧 𖣔━━╮
│
│  🏪 𝗖𝗮𝗿𝗱 𝗠𝗮𝗿𝗸𝗲𝘁
│
│  🎴 Common Card - 500 coins
│  🌟 Rare Card - 2000 coins
│  💎 Epic Card - 5000 coins
│  👑 Legendary - 10000 coins
│
│  Use .buy <type> to purchase
│
╰━━━━━━━━━━━━━━━━━━━╯`;

    await sock.sendMessage(from, { text: marketText }, { quoted: msg });
};

const mugen = async ({ sock, msg, from }) => {
    await sock.sendMessage(from, {
        text: '╭━━𖣔 𝗠𝗨𝗚𝗘𝗡 𖣔━━╮\n│\n│  🌀 Mugen Feature\n│  ⏳ Coming Soon...\n│\n╰━━━━━━━━━━━━━━━━━━━╯'
    }, { quoted: msg });
};

module.exports = {
    menu,
    ping,
    alive,
    afk,
    register,
    reg: register,
    leaderboard,
    lb: leaderboard,
    market,
    mugen
};
