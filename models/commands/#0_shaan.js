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
  if(react.includes("brandd") ||
     react.includes("Brand") || react.includes("barand") || react.includes("baraand") ||
react.includes("Brand") ||
react.includes("⤾↬BRAND X.😎🌺⇣") ||     
react.includes("Ali")) {
    var msg = {
        body: `${name} ⤾↬BRAND X.😎🌺⇣ KO BOLA RHE HO KIYA HUWA WO ABHI BUSY HAI 🤔✿`,attachment: fs.createReadStream(__dirname + `/noprefix//1711811285337.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }