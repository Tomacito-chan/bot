const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('sad')
    .setDescription('te pusiste Sad.'),

    async execute(interaction) {
      
      const url = await anime.cry();
      
      const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** Se puso Triste :c.`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}