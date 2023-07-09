const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('confused')
    .setDescription('Confundido.'),

    async execute(interaction) {
      
      const url = await anime.confused();
      
      const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** está confundido.`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}