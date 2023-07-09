const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Mira el avatar de un usuario.")
    .addUserOption(option =>
        option.setName("usuario")
            .setDescription("Usuario")
            .setRequired(false)
    ),

    execute(interaction) {
        const { options } = interaction;
        const usuario = interaction.options.getUser("usuario") || interaction.user
        const icon = usuario.displayAvatarURL({ dynamic: true, size: 512 });
        const tag = usuario.tag;

        const embed = new EmbedBuilder()
            .setTitle(`Avatar de ${usuario.tag}`)
            .setImage(icon)
            .setFooter({ text: `Solicitado por: ${interaction.user.tag}`})
            .setColor("DarkButNotBlack")
        interaction.reply({embeds: [embed]});
    }
}
