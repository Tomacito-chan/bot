const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
      .setName("dice")
      .setDescription("Dice lo que digas")
      .addStringOption(option =>
        option.setName("dice")
            .setDescription("Dice lo que digas")
            .setRequired(true)
    ),

    execute(interaction) {
      const { options } = interaction;
      const description = options.getString("dice");

      const embed = new EmbedBuilder()
        .setDescription(`${description}`)
        .setColor(0x5fb041);

      interaction.channel.send({embeds: [embed]});
    }
}