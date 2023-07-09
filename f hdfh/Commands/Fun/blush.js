const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('blush')
    .setDescription('Sonrojarse.'),

    async execute(interaction) {
      
      const url = await anime.blush();
      
      const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** está sonrojado.`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}