// MADE BY BOCHILGAMING
// RECODE BY FANGZ 

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
··────━•〔 xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐ 〕•━────··

 *〔 llı INFO USER ıll 〕*
 
🎐 *Name:* %name
🎐 *Tag:* %tag
🎐 *Status:* %prems
🎐 *Limit:* %limit
🎐 *Money:* %money
🎐 *Role:* %role
🎐 *Level:* %level [ %xp4levelup Xp For Levelup]
🎐 *Xp:* %exp / %maxexp
🎐 *Total Xp:* %totalexp


 *〔 llı TODAY ıll 〕*
 
🎐 *%ucpn*
🎐 *Days:* %week %weton
🎐 *Date:* %date
🎐 *Islamic Date:* %dateIslamic
🎐 *Time:* %wib


 *〔 llı INFO ıll 〕*
 
🎐 *Bot Name:* %me
🎐 *Mode:* %mode
🎐 *Platform:* %platform
🎐 *Type:* Node.Js
🎐 *Baileys:* Multi Device
🎐 *Prefix:* [ *%_p* ]
🎐 *Uptime:* %muptime
🎐 *Database:* %rtotalreg dari %totalreg


 *〔 llı INFO COMMAND ıll 〕*
 
 *🅟* = Premium
 *🅛* = Limit

%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'store', 'virus']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  'store': 'Store Menu',
  'virus': '𐐪-〚 Virtex 〛-𐑂',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
 }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
 }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'virus') tags = {
    'virus': '𐐪-〚 Virtex 〛-𐑂'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `${htki} ▮𝗦𝘁𝗮𝘁𝘂𝘀 」 ${htka}`,
	rows: [
	    {title: `┊📛┊Info Bot`, rowId: ".info", description: "✧ Info xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐"},
	    {title: `┊💌┊Owner`, rowId: ".owner", description: "✧ Ini Room Developer❗"},
	{title: `┊🗣┊Request Fitur`, rowId: ".request", description: "✧ Request Fitur menarik ke BOT"},
	{title: ` ┊📊┊Test Speed`, rowId: ".testspeed", description: "✧ Test Install Speed BOT"},
	{title: `┊⚡┊Speed`, rowId: ".speed", description: "✧ Kecepatan Respon 赤 Sullivan - BOT..."},
	]
    },{
	title: `${htki} ▮𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 」 ${htka}`,
	rows: [
	    {title: `┊🔖┊ 『 Sewa BOT 』`, rowId: ".sewa", description: "✧ Menampilkan list harga sewa BOT"},
	    {title: `┊📑┊ 『 Buy Script BOT 』`, rowId: ".owner", description: "✧ Menampilkan list harga script BOT"},
	    {title: `┊🌟┊ 『 UP Premium 』`, rowId: ".premium", description: "✧ Menampilkan list harga upgrade premium"},
	    {title: `┊🥞┊ 『 Get Hadiah 』`, rowId: ".daily", description: '✧ Mau hadiah nggak kak?... >.<'},
	{title: `┊✨┊ 『 Rating 』`, rowId: ".rate", description: '✧ Jangan kasih rate rendah dong :/'},
	{title: `┊🗳️┊ 『 My Profile 』`, rowId: ".pp", description: '✧ Siapa ya kamu?...'},
	]
	},{
	title: `${htki} ▮𝗠𝗲𝗻𝘂 ${htka}`,
	rows: [
	    {title: `┊🗒️┊ › 〚 All Menu 〛-𐑂`, rowId: ".? all", description: "╰► Bjir ALL In"},
	    {title: `┊🌱┊ › 〚 Rpg 〛-𐑂`, rowId: ".? rpg", description: "╰► Calon anak petualang nih..."},
	{title: `┊✨┊ › 〚 Exp 〛-𐑂`, rowId: ".? xp", description: "╰► Kalau dah level 100 dapat hadiah"},
	{title: `┊🎮┊ › 〚 Game 〛-𐑂`, rowId: ".? game", description: "╰► Bg kamu main game apa?.... >-<"},
	{title: `┊🧩┊ › 〚 Fun 〛-𐑂`, rowId: ".? fun", description: "╰► Gabut ya bang?"},
	{title: `┊🐚┊ › 〚 Kerang 〛-𐑂`, rowId: ".? kerangajaib", description: "╰► Mau tanya apa sih bg?..."},
	{title: `┊📑┊ › 〚 Quotes 〛-𐑂`, rowId: ".? quotes", description: "╰► Ada yg mau nyari topik nih..."},
	{title: `┊⛩️┊ › 〚 Anime 〛-𐑂`, rowId: ".? anime", description: "╰► Lah, Wibuu..."},
	{title: `┊🔞┊ › 〚 Nsfw 〛-𐑂`, rowId: ".? nsfw", description: "╰► Anak kecil ga boleh ya...."},
	{title: `┊🌟┊ › 〚 Premium 〛-𐑂`, rowId: ".? premium", description: "╰► Hanya khusus users premium..."},
	{title: `┊🎭┊ › 〚 Anonymous chat 〛-𐑂`, rowId: ".? anonymous", description: "╰► Mau ngomong sama mantan kah? >.<"},
	{title: `┊☪️┊ › 〚 Islamic 〛-𐑂`, rowId: ".? quran", description: "╰► Tobat ya kak..."},
	{title: `┊🌐┊ › 〚 Internet 〛-𐑂`, rowId: ".? internet", description: "╰► Ga ada google ya kak..."},
	{title: `┊📤️┊ › 〚 Downloader 〛-𐑂`, rowId: ".? downloader", description: "╰► Jangan download yg aneh-aneh, Xixixi"},
	{title: `┊🃏┊ › 〚 Stikers 〛-𐑂`, rowId: ".? stiker", description: "╰► Kalau bikin sticker jangan di spam ya kak..."},
	{title: `┊✏️┊ › 〚 Nulis 〛-𐑂`, rowId: ".? nulis", description: "╰► Hati-hati ke tawan bu sri..."},
	{title: `┊🎵┊ › 〚 Audio 〛-𐑂`, rowId: ".? audio", description: "╰► Calon remixer nih haha ></"},
	{title: `┊🦄┊ › 〚 Group 〛-𐑂`, rowId: ".? group", description: "╰► Menu settingan buat group mu kak"},
	{title: `┊👑┊ › 〚 Admin 〛-𐑂`, rowId: ".? admin", description: "╰► Yg bukan admin jangan make fitur ini"},
	{title: `┊🗃️️┊ › 〚 Database 〛-𐑂`, rowId: ".? database", description: "╰► Simpen apa tuh...."},
	{title: `┊🧰️┊ › 〚 Tools 〛-𐑂`, rowId: ".? tools", description: "╰► Butuh apa aja bot akan bantu"},
	{title: `️️┊📊️┊ › 〚 Info 〛-𐑂`, rowId: ".? info", description: "╰► Info lowker kak?..."},
	{title: `┊👩‍💻┊ › 〚 Owner 〛-𐑂`, rowId: ".? owner", description: "╰► Khusus VINZ❗"},
	{title: `┊🎨┊ › 〚 Maker 〛-𐑂`, rowId: ".? maker", description: "╰► Bikin logo apa ya enaknya?"},
	{title: `┊💌┊ › 〚 Store 〛-𐑂`, rowId: ".? store", description: "╰► Anak jebeh ya kamu kak?"},
	{title: `┊🔥┊ › 〚 Virtex 〛-𐑂`, rowId: ".? virus", description: "╰► Jangan kak bahaya 🗿"},
	]
    },{
	title: `${htki} ▮𝗜𝗻𝗳𝗼 」 ${htka}`,
	rows: [
	    {title: `┊💬 ∫ » Event «`, rowId: ".event", description: "✧ Nyari diskon? hahaha"},
	    {title: `┊🎳 ∫ » Version «`, rowId: ".cekversi", description: "✧ Mau ngapain ya?..."},
	    {title: `┊🎁 ∫ » Referal «`, rowId: ".ref", description: "✧ Bagikan code undangan biar dapat hadiah...."},
	    {title: `┊🔭 ∫ » Script «`, rowId: ".sc", description: `✧ Source Code ${namebot}`},
	    {title: `┊📮 ∫ » Rules «`, rowId: ".rules", description: `✧ Peraturan menggunakan ${namebot}`},
	    {title: `┊💰 ∫ » Donasi «`, rowId: ".donasi", description: '✧ Support BOT agar on 1 Minggu non stop'},
	  {title: `┊✨ ∫ » Rating «`, rowId: ".rate", description: '✧ Support BOT agar Semangat update'},
	  {title: `┊🌸 ∫ » Group «`, rowId: ".groupbot", description: '✧ Jangan lupa mampir ya...'},
	  //{title: `┊🎖️ ∫ » Thanks To «`, rowId: ".tqto", description: '✧ Kawan-kawan Yg membantu pembuatan bot ini...'},
	  {title: `┊☎️ ∫ » Kata Penutup «`, rowId: ".galau", description: '✧ Terima kasih yang udah menggunakan bot ini dengan baik (≧▽≦)'},
      ]
    },
]

let usrs = db.data.users[m.sender]
let tek = `
───────[ DASHBOARD ]───────
http://bīt.ly/ByMr.Iqbalᯤ*
${ucapan()}  ${await conn.getName(m.sender)}

        *〔 llı INFO BOT ıll 〕*

🔥 Uptime: ${mpt}
🔥 Name: *${await conn.getName(m.sender)}*
🔥 ${Object.keys(global.db.data.users).length} *Users*
🔥 ${usrs.limit} *Limit*
🔥 ${Object.values(global.db.data.users).filter(user => user.registered == true).length} *Unregister*
🔥 ${Object.keys(global.db.data.users).length} *Register*
🔥 Level: *${usrs.level}*
🔥 Platform: *${os.platform()}*
🔥 ${global.opts['self'] ? 'Private' : 'Publik'} *Mode*
🔥 Role: *${usrs.role}${usrs.premiumTime > 1 ? `*
🔥 Expired Premium:
${clockStringP(usrs.premiumTime - new Date())}` : ''}
          
    🗓️ ${new Date().toLocaleDateString()}
`
const listMessage = {
  text: tek,
  footer: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐',
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `Click Here ❗`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { day: 'numeric' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    // MAMPUS DI ENC :v
    const _0x187932=_0x5c09;function _0x5c09(_0x28b840,_0x244043){const _0x1766bb=_0x1766();return _0x5c09=function(_0x5c09dc,_0x158321){_0x5c09dc=_0x5c09dc-0x1bb;let _0x4031df=_0x1766bb[_0x5c09dc];return _0x4031df;},_0x5c09(_0x28b840,_0x244043);}(function(_0x1c9e83,_0x2eef01){const _0x5e85ab=_0x5c09,_0x179660=_0x1c9e83();while(!![]){try{const _0x4c7814=-parseInt(_0x5e85ab(0x1d0))/0x1*(-parseInt(_0x5e85ab(0x1bd))/0x2)+parseInt(_0x5e85ab(0x1c4))/0x3*(parseInt(_0x5e85ab(0x1bf))/0x4)+parseInt(_0x5e85ab(0x1cc))/0x5*(-parseInt(_0x5e85ab(0x1d1))/0x6)+parseInt(_0x5e85ab(0x1c1))/0x7*(parseInt(_0x5e85ab(0x1bc))/0x8)+parseInt(_0x5e85ab(0x1cd))/0x9*(-parseInt(_0x5e85ab(0x1c7))/0xa)+parseInt(_0x5e85ab(0x1cb))/0xb*(-parseInt(_0x5e85ab(0x1be))/0xc)+parseInt(_0x5e85ab(0x1ce))/0xd;if(_0x4c7814===_0x2eef01)break;else _0x179660['push'](_0x179660['shift']());}catch(_0x2b3360){_0x179660['push'](_0x179660['shift']());}}}(_0x1766,0x70ad5));let buttonMessage={'document':{'url':sgc},'mimetype':td,'fileName':global['wm'],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':!![],'externalAdReply':{'mediaUrl':global[_0x187932(0x1c8)],'mediaType':0x2,'previewType':_0x187932(0x1c9),'title':global['titlebot'],'body':global['titlebot'],'thumbnail':await(await fetch(thumb))[_0x187932(0x1ca)](),'sourceUrl':sgc}},'caption':text,'footer':botdate,'buttons':[{'buttonId':'.sewa','buttonText':{'displayText':_0x187932(0x1bb)},'type':0x1},{'buttonId':_0x187932(0x1c5),'buttonText':{'displayText':_0x187932(0x1c0)},'type':0x1},{'buttonId':_0x187932(0x1c6),'buttonText':{'displayText':'🎀Version Bot'},'type':0x1}],'headerType':0x6};await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)],buttonMessage,{'quoted':m,'mentionedJid':[m[_0x187932(0x1c3)]]});function _0x1766(){const _0x1c60e8=['3ezQcUH','.nameown','.cekversi','725770ccnUBU','sig','pdf','buffer','305624SHQwwY','233195fjGJSZ','72BjUaMS','2869867kBKaey','chat','6NokiEm','72PsFaxu','🎐Sewa Bot','1832yREmVQ','205026IsvCrH','132IBvmfp','3329164htczQJ','🌹Author','7315FCLnNH','sendMessage','sender'];_0x1766=function(){return _0x1c60e8;};return _0x1766();}
    
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\n⚡ Supported By Vinz TEAM',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://github.com/ShionMDv'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🎐Sewa Bot',
                        id: '.sewa'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🌹Author',
                        id: '.nameown'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🔥Version Bot',
                        id: '.versibot'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    
  } catch (e) {
    conn.reply(m.chat, '📮Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(help|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}
  
