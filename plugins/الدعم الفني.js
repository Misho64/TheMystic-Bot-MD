let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 


   if (/^.دعم|.help$/i.test(m.text) ) { //sem prefixo
 conn.reply(m.chat, ` 

*الدعم الرسمي الخاص بي*
✦━━━━━[ بـروبـلـت ]━━━━━✦

*الدعم الفني الخاص بي في الواتس اب*
https://chat.whatsapp.com/GSZdODMrpJ53CRkx9VbwUv 
*الدعم الفني الخاص بي في التليجرام*
https://t.me/bots_whatsapp
لمتابعة اخبار البوت ولمعرفة متى يكون اوفلاين ادخل قناة متابعة البوت
https://chat.whatsapp.com/IMUVLKFFowILQ7oJYp0iFc
✦━━━━━[ بـروبـلـت ]━━━━━✦

 *💫  BROPLT - BOT  💫*
`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

             } 


             return !0 } 
             export default handler
