
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "invite",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
let helpEmbed = new MessageEmbed()
 . setDescription(`<a:tandaseru:899638443808813136> *CarameloSzy*  Is Discord Bot that desain All in 1**`)
 .setThumbnail(client.user.displayAvatarURL())
 .setImage("https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif")
 .setFooter("Click on these buttons to invite me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Invite Me') 
 .setURL("https://discord.gg/naghKR4e9R");

let button2 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('Support Server')
   .setURL('https://discord.gg/naghKR4e9R')
return message.channel.send(helpEmbed,{
 button: [button1,button2],
 });

 },
};

