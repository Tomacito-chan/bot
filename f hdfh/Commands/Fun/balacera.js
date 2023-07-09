const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('shoot')
    .setDescription('Iniciar una balacera y morir todos >:D.'),

    async execute(interaction) {
      
      const url = await anime.kill();
      
      const { options } = interaction;
      let rpts = ["0 personas, No mames que manco sos haciendo balacerasxddd", "1 Persona.", "2 Personas.", "3 Personas", "4 Personas", "5 Personas", "6 Personas", "7 Personas", "8 Personas", "9 Personas", "10 Personas", "11 Personas", "12 Personas", "13 Personas", "14 Personas", "15 Personas", "16 Personas", "17 Personas", "18 Personas", "19 Personas"]

      const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** Ha Iniciado una balacera y a matado a ${rpts[Math.floor(Math.random() * rpts.length)]} .`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}