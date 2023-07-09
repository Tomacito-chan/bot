const Discord = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('8ball')
  .setDescription('Haz tu pregunta y la responderé.')
  .addStringOption(option =>
    option.setName('pregunta')
                .setDescription('Pregunta')
                .setRequired(true)
    ),

  execute(interaction) {
   const { options } = interaction;
   let rpts = ["Sí.", "No.", "Tal vez...", "No sé.", "...", "Podría ser...", "No creo.", "Si creo."]
   let pregunta = interaction.options.getString("pregunta");

   const embed = new EmbedBuilder()
   .setDescription(`**8ball**\n\n**Pregunta**\n${pregunta}\n\n**Mi respuesta**\n${rpts[Math.floor(Math.random() * rpts.length)]}`)
   .setColor(`Random`)

   interaction.reply({ embeds: [embed]})
  }

}