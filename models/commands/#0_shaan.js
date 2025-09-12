const fs = require("fs");
module.exports.config = {
  name: "SHAAN",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("shan khan") ||
     react.includes("Shaan Khan") || react.includes("SHAAN") || react.includes("shaan") ||
react.includes("shan") ||
react.includes("SHAAN KHAN") ||     
react.includes("Shaan")) {
    var msg = {
        body: `${name} 𝐒𝐇𝐀𝐀𝐍 𝐊𝐎 𝐁𝐔𝐋𝐀𝐘𝐀 𝐊𝐘𝐀 𝐇𝐔𝐀 𝐖𝐎 𝐓𝐎 𝐁𝐔𝐒𝐘 𝐇𝐀𝐈🤔✿`,attachment: fs.createReadStream(__dirname + `/noprefix//1711811285337.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }