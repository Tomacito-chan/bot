const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("testcommands")
      .setDescription("Te enviare mi ping!!"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction, client) {
       const embed = new EmbedBuilder()
          .setTitle("**`Como me Postulo?`**")
          .setDescription("Para Postularte Puedes [Darme Click](https://docs.google.com/forms/d/e/1FAIpQLSerCIsdk2hs9Z5QQSpe3q4riSddK8foOVVPtr6iJxmVE9ewpQ/viewform?usp=sf_link) y rellenar El Formulario :D")
          .setColor("#8B4513")
          .addFields(
            {name: "Gracias por querer Postularte", value: "***Felicitaciones :D***"}
          )
        interaction.channel.send({embeds: [embed] });


    }
  };
  