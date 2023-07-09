const Discord = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('claim')
    .setDescription('Test Commands'),

    async execute(interaction) {
      
    
      
      const embed = new EmbedBuilder()
        .setDescription(`Me puedes ayudar a seguir creciendo utilizando el siguiente [Link](https://patreon.com/LeviathansDestroyersofSouls)`)
       .setColor("DarkButNotBlack")
      
      interaction.reply({ Content: "**Se envio el Link de Apoyo exitosamente :check_mark_button:**", ephemeral: true})
      interaction.channel.send({ embeds: [embed]})
      
 }
}
  