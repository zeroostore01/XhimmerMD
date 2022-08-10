import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `YT: R Iqbal\n`,wm + '\n\n' + botdate, giflogo, [['OK','ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'By Mr. Iqbal',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: 'https://youtube.com/channel/UCbDTyaAiUTWgoR-y-fH7dbw'
                      }}
})
}


handler.help = ['ytbot']
handler.tags = ['info']
handler.command = ['ytbot']
export default handler