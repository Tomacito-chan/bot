const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, channelLink, userMention } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName('anuncio')
    .setDescription(":loudspeaker: Sistema de anuncios")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
        option.setName("descripcion")
            .setDescription("Descripcion del anuncio")
            .setRequired(true)
    ),
    
    async execute(interaction) {
            const { options } = interaction;
            const descripcion = options.getString("descripcion")
            const tag = interaction.user.tag;

            const embedAnuncio = new EmbedBuilder()
                .setTitle(`📢 | ANUNCIO | 📎ꜱʜɪɴ'ᴀɪɴᴀʀᴜ🖇`)
                .setDescription(descripcion)
                .setTimestamp()
                .setFooter({ text: `📎ꜱʜɪɴ'ᴀɪɴᴀʀᴜ🖇 - Todos los derechos reservados` })
                .addFields([
                    { name: `Anuncio por:`, value: `${interaction.user}`, inline: true },
                ])
                .setColor(0x5fb041);

                interaction.reply({ content:'Anuncio enviado con Exito!', ephemeral: true})
                interaction.channel.send({ content:'@everyone'})
                interaction.channel.send({embeds: [embedAnuncio]});     
    },
};