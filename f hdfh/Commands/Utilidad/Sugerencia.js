const { SlashCommandBuilder, EmbedBuilder, messageLink } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
      .setName("sugerir")
      .setDescription("Sugiere algo al servidor")
      .addStringOption(option =>
        option.setName("sugerencia")
            .setDescription("Sugerencia para el servidor.")
            .setRequired(true)
    ),

    async execute(interaction) {
      const { options } = interaction;
      const canal = interaction.guild.channels.cache.get("1057158251428446278");
      const description = options.getString("sugerencia");

      const embed = new EmbedBuilder()
        .setAuthor({ name: `Sugerencia de ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({dynamic: true})}`})
        .setDescription(`${description}`)
        .setColor(0x5fb041)
        .setFooter({ text: 'Para enviar una sugerencia envia /sugerir <sugerencia>'});

        const mensaje = await canal.send({
        embeds: [embed],
        fetchReply: true,
      });
      await mensaje.react(":white_check_mark:");
      await mensaje.react(":x:");
      await interaction.reply({ content: "Su sugerencia fue enviada con exito", ephemeral: true });
    },
 };