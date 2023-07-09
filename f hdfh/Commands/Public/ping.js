const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Te enviare mi ping!!"),
      developers: true,
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction, client) {
      const embed = new EmbedBuilder()
          .setTitle("PING")
          .setDescription(`**Ping del bot:** ${client.ws.ping}MS`)
          .setColor(0x5fb041)
        interaction.reply({embeds: [embed]});
    }
  };
  