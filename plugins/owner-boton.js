let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Hehey Sullivan BOT aktif lagi 🤖* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler