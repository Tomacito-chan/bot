const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('bored')
    .setDescription('Aburrirse.'),

    async execute(interaction) {
      
      const url = await anime.bored();
      
      const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** está aburrido.`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}