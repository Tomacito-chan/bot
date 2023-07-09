const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('dance')
    .setDescription('Bailas n.n.'),

    async execute(interaction) {
      
      const url = await anime.dance();
      
      const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** está Bailando :D.`)
       .setColor('Random')
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}