let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "ଘ 📊Test Speed", rowId: '.testspeed', description: '╰►Test Speed Sullivan BOT' },
	    {title: "ଘ 📉Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "ଘ 💻Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	{title: "ଘ 👤Nama Creator", rowId: '.nameown', description: '╰►Developer Sullivan BOT' },
	{title: "ଘ 💰Donasi", rowId: '.donasi', description: '╰►Support Iqbal Agar BOT on 24 Jam untuk menemani kamu' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "ଘ 📖Rules", rowId: '.rules', description: '╰►S&K Sullivan BOT' },
	    {title: "ଘ ⛔No Menu", rowId: '', description: '╰►No menu' },
	    {title: "ଘ 📑Event", rowId: '.event', description: '╰►Event Dari Kami' },
	{title: "ଘ ⚡Speed", rowId: '.speed', description: '╰►Speed Sullivan BOT' },
	{title: "ଘ 💵Sewa BOT", rowId: '.sewa', description: '╰►Sewa Sullivan BOT untuk jadi assisten Mu' },
	{title: "ଘ 🗣️Request Fitur", rowId: '.request', description: '╰►Request Fitur Sullivan BOT' },
	{title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi Sullivan BOT' },
	{title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi Sullivan BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa Sullivan BOT' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi Sullivan BOT' },
	    {title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi Sullivan BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa Sullivan BOT' },
	{title: "ଘ ⚡Speed Bot", rowId: '.speed', description: '╰►Speed Sullivan BOT' },
	{title: "ଘ 📊Status Bot", rowId: '.botstats', description: '╰►Sistem Sullivan BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📮C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler