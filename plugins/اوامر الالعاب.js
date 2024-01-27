let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 


 if (/^.p6$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat,`
🔴 اذا احتجت مساعده اكتب       ( *.دعم - .help*) 🔴
 ━ *الاوامر الخاصة بالالعاب الجماعية* ━

🟣 *.لو*
┃لو خيروك

🔵 *.سؤال*
┃يقوم بإعطائك اسئلة مثل ( انت شايف نفسك اجتماعي ولا انطوائي )

 *💫  BROPLT - BOT  💫* `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 


 return !0 } 
 export default handler
