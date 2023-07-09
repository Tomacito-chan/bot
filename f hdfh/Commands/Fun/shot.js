const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bully')
    .setDescription('Yoquesehermano')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Usuario')
                  .setRequired(true)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user
      
      const url = await anime.bully();
      
      const embed = new EmbedBuilder()
      .setDescription(`¡**${interaction.user.username}** test **${member.username}**!`)
      .setColor('Random')
      .setImage(url)
      
      interaction.reply({ embeds: [embed] })

 }
}