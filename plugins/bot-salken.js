let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋‹\nsaya adalah xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐ yang di bangun menggunakan node.js. Aku Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), `${wm}`, [['🔥 Menu', '.menu']], m)
	}

handler.command = /^(salken)$/i

export default handler 

let wm = global.wm


//PERCOBAAN
