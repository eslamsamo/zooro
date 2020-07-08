const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("730552471935647747")
setInterval(function() {
channel.send(`eslamzooro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);