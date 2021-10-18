const simplydjs = require('simply-djs');
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js")
const { button, MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const disbut = require("discord-buttons");
 
    let embed1 = new Discord.MessageEmbed()
      .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369> **')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField("<a:pinkdots:899638099901046824> COMMAND CATEGORIES",
        "**<:Admin:894077310528004106>   ADMIN\n<a:tandaseru:899638443808813136>  GENERAL\n<a:conffeti:899638443603279882>  GIVEAWAY\n<:heartblueee:899638099368378369>  INFO\n<a:loadinggif:899638099712307230>  IMAGE\n<a:musictos:899646912871923774>  MUSIC\n<a:heartos:899638099548721152>  FUN\n<a:hypee:899638443422916659>   UPTIMER**")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')
    let embed2 = new Discord.MessageEmbed()
      .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField(
        "<:Admin:894077310528004106> MODERATION",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket` `lockchannel` `purge` `slowmode` `mute` `unmute` `purge-channel`")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField(
        "<a:tandaseru:899638443808813136> GENERAL",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard` `snipe` `embed`")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField(
        "<a:conffeti:899638443603279882>  GIVEAWAY",
        "`gstart` `gend` `greroll`")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField(
        "<:heartblueee:899638099368378369> INFO",
        "`avatar` `bug-report` `feedback` `developer` `help` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField(
        "<a:loadinggif:899638099712307230> Image",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')
     let embed7 = new Discord
     .MessageEmbed()
       .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField(
        "<a:heartos:899638099548721152> FUN",
        "`fight` `rps` `coinflip` `meme` `reverse` `hangman` `trivia` `fact` `Shuffle-guess`")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')
      let embed8 = new Discord
.MessageEmbed()
    .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField(
        "<a:hypee:899638443422916659> UPTIMER",
        "`add` `calc` `stats` `total` `ping` `projects` `remove`")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')

    

module.exports = {
  name: "help",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let cmduser = message.author;
    let menuoptions = [
       {
        value: "BACK TO START", description: "Starting Menu!",
        replymsg: embed1, emoji: "887806752643481650" //optional
      },{
        value: "MODERATION", description: "Moderation Commands!",
        replymsg: embed2, emoji: "887805506570289203" //optional
      }, {
        value: "GENERAL", description: "General Commands!",
        replymsg: embed3, emoji: "887805199547269171" //optional
      }, {
        value: "GIVEAWAY", description: "Giveaway Commands!",
        replymsg: embed4, emoji: "887805319902789662" //optional
      }, {
        value: "INFO", description: "Information Commands!",
        replymsg: embed5, emoji: "878156514018332703" //optional
      }, {
        value: "IMAGE", description: "Image Commands!",
        replymsg: embed6, emoji: "884252787444158504" //optional
      }, {
        value: "FUN", description: "Fun Commands!",
        replymsg: embed7, emoji: "887805689655853116" //optional
      }, {
        value: "UPTIME", description: "Uptime Commands!",
        replymsg: embed8, emoji: "887806366738169877" },//optional
        ]
   // define the selection
    let Selection = new MessageMenu()
      .setID('MenuSelection')
      .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
      .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
      .setPlaceholder('Click me to make a Selection!');  //message in the content placeholder
    menuoptions.forEach(option => {
      let row = new MessageMenuOption()
        .setLabel(option.label ? option.label : option.value)
        .setValue(option.value)
        .setDescription(option.description)
        .setDefault()
      if (option.emoji) row.setEmoji(option.emoji)
      Selection.addOption(row)
    })
    //define the embed
   
    let MenuEmbed = new Discord.MessageEmbed()
      .setTitle('** <:heartblueee:899638099368378369> Help Panel <:heartblueee:899638099368378369>**')
      .setDescription('<a:pinkdots:899638099901046824> ** *CarameloSzy*  Is Discord Bot that desain All in 1**')
      .setColor("#f4c2c2")
      .addField("<a:pinkdots:899638099901046824> COMMAND CATEGORIES",
        "**<:Admin:894077310528004106>  ADMIN\n<a:tandaseru:899638443808813136>  GENERAL\n<a:conffeti:899638443603279882>  GIVEAWAY\n<:heartblueee:899638099368378369>  INFO\n<a:loadinggif:899638099712307230>  IMAGE\n<a:musictos:899646912871923774>   MUSIC\n<a:heartos:899638099548721152>  FUN\n<a:hypee:899638443422916659>  UPTIMER**")
      .setThumbnail("https://i.pinimg.com/originals/64/22/ba/6422ba1af7a4ceaf91b283b132bffdf1.jpg")
      .setImage('https://im2.ezgif.com/tmp/ezgif-2-f6862d9ccddd.gif')
      .setFooter('CarameloSzy | l!help')


    
    //send the menu msg
    let menumsg = await message.channel.send(MenuEmbed, Selection                        )
    //function to handle the menuselection
    function menuselection(menu) {
      let menuoptiondata = menuoptions.find(v => v.value == menu.values[0])
      menu.reply.send(menuoptiondata.replymsg, true,);
    }
    //Event
    client.on('clickMenu', (menu) => {
      if (menu.message.id === menumsg.id) {
        if (menu.clicker.user.id === cmduser.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });
  }
}