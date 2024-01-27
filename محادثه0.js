let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
   if (/^ميسي|ميسى$/i.test(m.text)) {
 responses = [ 
 'عمك  ',  
 'عمك وعم عيالك'  
 ]; 
     

     }else if (/^رونالدو|كريستيانو$/i.test(m.text)) {
 responses = [ 
 'فخر البرتغال',
   'سيييييييييييييييييييييييي'
 ]; 

     }else if (/^خخخ$/i.test(m.text)) { 
      responses = [ 
      'هساعدك بالشخره *خخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخ* '
      ]; 

     }else if (/^نسوان|حريم$/i.test(m.text)) { 
      responses = [ 
      'هات بوسه وهديك باقي رقم صاروخ 0101375**** ',  
      ' اتأدب ',
        'هما فين نسوان',
        'نسوااااااان يافتحي'
      ]; 

      }else if (/^مرتبط|انت سنقل|انت سنقل؟|مرتبط؟$/i.test(m.text)) { 
       responses = [ 
       'لي عايزه ن',  
       'ايوه الحمدلله'
       ]; 
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
