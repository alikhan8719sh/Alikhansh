module.exports.config = {
  name: "restart",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mirai",
  description: "Restart the Bot",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, args, Users, event }) {
  var mention = Object.keys(event.mentions)[0];
  let name = event.mentions[mention];
  var arraytag = [];
  arraytag.push({ id: mention });
  var a = function (a) { api.sendMessage(a, event.threadID); }
  a("✅𝙏𝙃𝙀𝙀𝙆 𝙃𝘼𝙄 𝘽𝘼𝙔𝘼 𝘽𝙊𝙏 𝙅𝘼𝙉𝙐 𝙍𝙀𝙎𝙏𝘼𝙍𝙏 𝙃𝙊 𝙍𝘼𝙃𝘼 𝙃𝘼𝙄..");
  setTimeout(() => { a({ body: "3.." }) }, 5000);
  setTimeout(() => { a({ body: "2.." }) }, 10000);
  setTimeout(() => { a({ body: "1.." }) }, 15000);
  setTimeout(() => { api.sendMessage("⏳𝙏𝙃𝙍𝙊𝘼 𝙎𝘼 𝙒𝘼𝙄𝙏 𝙆𝘼𝙍𝙊 𝙎𝙃𝘼𝘼𝙉 𝘽𝙊𝙏 𝙍𝙀𝙎𝙏𝘼𝙍𝙏 𝙃𝙊 𝙍𝘼𝙃𝘼 𝙃𝘼𝙄🌹..", event.threadID, () => process.exit(1)) }, 20000);
};
