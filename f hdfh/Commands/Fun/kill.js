const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Matas a un Usuario D:.')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Usuario')
                  .setRequired(true)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user
      
      const url = await anime.kill();
      
      const embed = new EmbedBuilder()
      .setDescription(`¡**${interaction.user.username}** Mato a **${member.username}**!`)
      .setColor('Random')
      .setImage(url)
      
      interaction.reply({ embeds: [embed] })

 }
}