const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");
  
  const translate = require("translate-google");
  const ISO6391 = require("iso-639-1");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("traductor")
      .setDescription("traduce palabras en cualquier lenguaje")
      .addStringOption((uwagi) =>
        uwagi
          .setName("texto")
          .setDescription("¿Qué texto quieres traducir?")
          .setRequired(true)
      )
      .addStringOption((uwagi) =>
        uwagi
          .setName("lenguaje")
          .setDescription("¿A qué idioma quieres que se traduzca el texto??")
          .setRequired(true)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
      const texto = interaction.options.getString("texto");
      const lenguaje = interaction.options.getString("lenguaje");
      const { user: author } = interaction;
      translate(texto, { to: lenguaje })
        .then((result) => {
          const lenguajenombre = ISO6391.getName(lenguaje) || lenguaje;
          const Embed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle(`Traducido a ${lenguajenombre}`)
            .addFields(
              {
                name: `Tu texto:`,
                value: `${texto}`,
              },
              {
                name: `Texto traducido:`,
                value: `${result}`,
              }
            )
            .setFooter({ text: `Solicitado por ${author.username}`, iconURL: author.displayAvatarURL(true) })
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/avatars/1116889851216793620/3e67742564d62f83ab650afe2a4fdf2f.webp?size=512")
          interaction.reply({ embeds: [Embed] });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  };
