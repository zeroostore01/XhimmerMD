let handler = async (m, { conn }) => {
let info = `
*${htki} MENU ${htka}*

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█ 
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`
const sections = [
   {
	title: `✃ LIST MENU`,
	rows: [
	    {title: "∫ 🧿» Simpel «", rowId: '.mw', description: 'Menu simple xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	    {title: "∫ 🌸» List Menu «", rowId: '.?', description: 'Menu Kece xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
        ]
        }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "LIST MENU",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.command = /^(listmenu)$/i
handler.private = false

export default handler
