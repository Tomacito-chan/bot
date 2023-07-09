const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fake-tweet")
    .setDescription("Haz una publicación para tu Twitter")
    .addStringOption((option) =>
      option
        .setName(`tweet`)
        .setDescription(`Escribe aquí lo que quieres que diga en el tweet`)
        .setRequired(true)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction){
    const sugerencia = interaction.options.getString(`tweet`)

    const { guild } = interaction;

    const channel = interaction.guild.channels.cache.find(
      (c) => c.id === `ID DE SU CANAL`
    );

    const embed = new EmbedBuilder()
      .setTitle(`Tweet de ${interaction.user.username}`)
      .setColor(`#4dbbfa`)
      .setDescription(`${sugerencia}`)
      .setThumbnail(`https://turbologo.com/articles/wp-content/uploads/2019/07/twitter-bird-logo.png.webp`)
      .setFooter({
        text: `${guild.name}`,
        iconURL: `${guild.iconURL({ dynamic: true })}`,
      });

    const message = await interaction.channel.send({
      embeds: [embed],
    });

    interaction.reply({
      content: `Publicaste exitosamente en Twitter.`,
      ephemeral: true,
    });
  },
};