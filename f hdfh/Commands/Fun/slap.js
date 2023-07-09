const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Cachetea a un Miembro :C.')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Usuario')
                  .setRequired(true)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user
      
      const url = await anime.slap();
      
      const embed = new EmbedBuilder()
      .setDescription(`¡**${interaction.user.username}** Cacheteo a **${member.username}**! D:`)
      .setColor('Random')
      .setImage(url)
      
      interaction.reply({ embeds: [embed] })

 }
}