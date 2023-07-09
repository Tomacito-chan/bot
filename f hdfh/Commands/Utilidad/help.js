const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  const colors = require("colors");
const { readlink } = require("fs/promises");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("help")
      .setDescription("Te Ayudare Con Mis comandos"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {

      const embed = new EmbedBuilder()
            .setTitle("**Lista de Comandos**")
            .setDescription("**`Moderacion`**:\n\n`/ban`\n`/kick`\n`/mute`\n`/clear`\n`/anuncio`\n`/unban`\n\n**`Reaccion`**:\n\n/`/blush`\n`/bored`\n`/confused`\n `/cry`\n\n**`Diversion`**:\n`/banana`\n`/dice`\n`/8ball`\n`/avatar`")
            .setTimestamp()
            .setColor(0x5fb041);
            interaction.reply({ embeds: [embed] })
    
            
          },

  };
  