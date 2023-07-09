const { 
    EmbedBuilder,
    SlashCommandBuilder,
    ChannelType,
} = require("discord.js");
 
module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Informacion del servidor"),
    execute(interaction, client) {
        const { guild } = interaction;
        const { createdTimestamp, ownerId, description, members, memberCount, premiumTier, premiumSubscriptionCount, GuildNews } = guild;
        const getChannelTypeSize = type => client.channels.cache.filter(channel => type.includes(channel.type)).size;
        const botCount = members.cache.filter((member) => member.user.bot).size;
        const icon = guild.iconURL();
 
        const embed = new EmbedBuilder()
                .setAuthor({ name: `${interaction.guild.name}`, iconURL: `${interaction.guild.iconURL({dynamic: true, size: 1024})}`})
                .setFields(
                    {
                        name: "📋 Descripcion",
                        value: [
                            `${description}`,
                        ].join("\n")
                    },
                    {
                        name: "General",
                        value: [
                            `📜 **Nombre** ${interaction.guild.name}`,
                            `💾 **ID** ${interaction.guild.id}`,
                            `📆 **Creado** <t:${parseInt(createdTimestamp / 1000)}:R>`,
                            `👑 **Dueño** <@${ownerId}>`,
                        ].join("\n")
                    },
                    {
                        name: "Usuarios",
                        value: [
                            `👤 **Miembros** ${members.cache.filter((m) => !m.user.bot).size}`,
                            `🤖 **Bots** ${botCount}`,
                            `👥 **Total** ${memberCount}`,
                        ].join("\n")
                    },
                    {
                        name: "Canales",
                        value: [
                            `💬 **texto** ${getChannelTypeSize([ChannelType.GuildText, ChannelType.GuildNews])}`,
                            `🎙 **Voz** ${getChannelTypeSize([ChannelType.GuildVoice, ChannelType.GuildStageVoice])}`,
                            `📝 **Foros** ${getChannelTypeSize([ChannelType.GuildForum])}`,
                            `🧵 **Hilos** ${getChannelTypeSize([ChannelType.GuildPublicThread, ChannelType.GuildPrivateThread, ChannelType.GuildNewsThread])}`,
                            `📕 **Categoria** ${getChannelTypeSize([ChannelType.GuildCategory])}`,
                            `📻 **Escenarios** ${getChannelTypeSize([ChannelType.GuildStageVoice])}`,
                        ].join("\n"),
                        inline: true
                    },
                    {
                        name: "Emojis",
                        value: [
                            `😏 **Emojis** ${guild.emojis.cache.size}`,
                        ].join("\n"),
                        inline: true
                    },
                    {
                        name: "Nitro",
                        value: [
                            `🔰 **Nivel** ${premiumTier}`,
                            `🔮 **Boost** ${premiumSubscriptionCount}`,
                        ].join("\n"),
                        inline: true
                    },
                )
                .setFooter({ text: `Solicitado por: ${interaction.user.tag}`})
                .setThumbnail(icon)
                .setColor(0x5fb041)
            interaction.reply({ embeds: [embed]});
    }
};
