const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "94776789069"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Godakavela,Rathnapura,Sri Lanka,Rathnapura"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94776789069";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "946789069";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "-·.¸¸.·♩♪♫ 𝐑𝐄𝐃-𝐊𝐈𝐋𝐋𝐄𝐑-𝐗-𝐁𝐎𝐓 ♫♪♩·.¸¸.·-" , // ```『 —(••÷[ ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔼𝕎𝕃𝕆𝕎𝔸 ]÷••)— 』```", //*『꧁•⊹٭𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴 𝚁𝙺 𝚃𝙴𝙲𝙷 𝚂𝙻٭⊹•꧂』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "—(••÷[ ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔼𝕎𝕃𝕆𝕎𝔸 ]÷••)—",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "░▒▓█ ＲＥＤ－ＫＩＬＬＥＲ－Ｘ－ＢＯＴ █▓▒░",
  ownername:process.env.OWNER_NAME|| "••¤(`×[¤ ɪᴛ' ᴢ ᴍᴇ ꜱᴀᴛʜɪʟ ᴛʜᴀʀᴜᴋᴀ ¤]×´)¤••",


  sessionName:process.env.SESSION_ID|| "SESSION_06_48_01_13_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xWNHpuM1hnQVp4azF5U0VsMHZ2Nk5QSFd3RlQyZmFWRkxJOVdkWTRHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1h4dVVkTXRSL2l4ckwraVV6TDViRTgyaElZSWJpWlNQSkZ3UEJWY3J4VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT2cvWVpKVEl5VXZCRW9VSE9KcExWSnNzWk9rRnlvUG5qUDNyT0lzOTFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUVlFWDR2c3VPWW1zVDgxcDZJamJSOUZHRWJ1R3dNaXhzK003T29BekNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IaDV4UjZYdWJJU1RlRjJOUVFuSmQxRm9ZWEd4cmphalRZbm9KV01kRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNc0Y1N2F2OWRmQ01DOWdRZDVXSTQrUW80SDFvVkEwd0FRWFZpblpBREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZEYkY5S2g5eEdKbHFIQmR2Ty85Snd4Qy9zVW4zOE1PUTUxcnZHMm5ucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pUR1RVOVowNFZFdjdLUFJrR2ZETGV1a2V4T0VyMWgvOVNaWVplQktWaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1XdERyV2J2Z0QzdTliWXA0TUFTUm5ZemFWdlZndTRHdjhweURyeXc3eStOL0c0N1ZDNFZpVlQwd3FkZVArZWhmVEQzbmxLazNFUGRHcHEyQTJmamdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6InFWTnpmL29SbjEvbWxvRFFGa1MrYTNvZE1DaGV4ai9BQzV0VWRtNGxIMTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzY3ODkwNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMENEN0NBMkY1NDQ2MEE2QjA2ODY5QzIyNTExQkM1NEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNTEyODQ2N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzY3ODkwNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDFBMjQ5MkNFOEQ0RDI3OUI1Q0ZFNDEyODUzREQ1QTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNTEyODQ2OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzY3ODkwNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEIyMDZBRkIyM0ZGNDU4OEE5RkVFQjU4QzI1NzlFNkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNTEyODQ3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzY3ODkwNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0M5QTU5Qzk4Njk1NDVFN0M1NzQ2ODdERUI2RjZBODIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNTEyODQ3OH1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib0Z2RE1MVnJUQ1dVdGF5eTdBMk1OQSIsInBob25lSWQiOiIzNTAzOWY0Zi03ZTM1LTRjODYtYWU0NC1kNGIyZmYyZjJmYzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVkcTB0ZlRHR2E3R1lLTmpmUjM2YU1FYWdjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TmR4WFJTVHRMQU1uK0YrTjNQL0x6dmJYeE09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWEEyZEFDRUl6a2lLMEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJudFBrelZWV3ZqaE51SjA2andCU2xHbGxLMlFHS21uQkpUemhFejBQc3dNPSIsImFjY291bnRTaWduYXR1cmUiOiJIM0JEd2hEVzNVSUVYUml3QlRQZ2pGS0NQcktwcC9KVzhwVmJDdVlpZ2duYzVkZEIxUGNxQVZMSDlQSTJFTWNlM05PMkZrMXlGUTVJdndSaXRtalJCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT3JWaFF4MkZIM0VmM0xuY0l2OGt3NDJmZVdTWjdFMlhNZGJQd0Q5RHZRM21WZ2w5bEtVREtjVXZrOXNZRXQzMEo4cFRyN0VkczdLbGtBdlhxZDBXalE9PSJ9LCJtZSI6eyJpZCI6Ijk0Nzc2Nzg5MDY5OjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNB4Lat4LeSTCBUSEHgtrvgt5RLQSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3Njc4OTA2OTozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaN1Q1TTFWVnI0NFRiaWRPbzhBVXBScFpTdGtCaXBwd1NVODRSTTlEN01EIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA1MTI4NDc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFEcSJ9",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
