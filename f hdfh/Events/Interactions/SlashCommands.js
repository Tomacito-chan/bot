const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "This command is outdated.",
        ephermal: true,
      });

    if (command.developers && interaction.user.id !== "981315321254281226")
      return interaction.reply({
        content: `el comando esta disponible para el developer <@${client.config.developer}>`,
        ephermal: true,
      });

    command.execute(interaction, client);
  },
};
Ii