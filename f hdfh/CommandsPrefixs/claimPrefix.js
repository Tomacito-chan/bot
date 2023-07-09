const Discord = require('discord.js');
const { Message, EmbedBuilder } = require("discord.js");
module.exports = {
  
    name: "claim",
    alias: "XD",

    async execute(message, args) {
      
    
      
      const embed = new EmbedBuilder()
        .setTitle("**Apoyame Economicamente para seguir creciendo :D**")
        .setDescription(`Me puedes ayudar a seguir creciendo utilizando el siguiente [Link](https://patreon.com/LeviathansDestroyersofSouls)`)
        .setColor("Yellow")
      
      message.channel.send({ embeds: [embed]})
      
 }
}