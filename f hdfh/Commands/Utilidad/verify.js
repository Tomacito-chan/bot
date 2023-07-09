const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('reactionrole')
    .setDescription('Utiliza este comando para que los usuarios reclamen un rol especificado')
    .addRoleOption(option => option.setName(`role1`).setDescription(`Rol que quieras dar a los usuarios`).setRequired(true)),
    async execute (interaction, client) {

        const role1 = interaction.options.getRole('role1');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return await interaction({ content: "Necesitas el permiso de administrador para crear el botón"});

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button1')
            .setLabel(` 🥑 Verificarse`)
            .setStyle(ButtonStyle.Success)
        )

        const embed = new EmbedBuilder()
        .setColor("DarkGreen")
        .setTitle(`Sistema de Verificación`)
        .setDescription(`Bienvenido/a al servidor, porfavor pulsa el botón para verificarte y tener acceso a los canales disponibles!`)
        .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))

        await interaction.channel.send({ embeds: [embed], components: [button] });

        const collector = await interaction.channel.createMessageComponentCollector();

        collector.on('collect', async (i) => {
            const member = i.member;

            if (i.guild.members.me.roles.highest.position < role1.position) {
                i.update({ content: "Mis permisos no me permiten darte ese rol, lo siento...", ephemeral: true});
                return;
            }

            if (i.customId === 'button1') {
                member.roles.add(role1);
                i.reply({ content: `Has sido verificado en el servidor ${client.user.username}`, ephemeral: true})
            }
        })
    }
}