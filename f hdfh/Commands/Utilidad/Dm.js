const { SlashCommandBuilder } = require('@discordjs/builders')
const { EmbedBuilder } = require('discord.js')
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("dm")
    .setDescription("Enviar un DM a un Usuario")
    .setDMPermission(false)
    .addUserOption(option => option.setName('usuario').setDescription('usuario').setRequired(true))
    .addStringOption(option => option.setName('mensaje').setDescription('Mensaje').setRequired(true)),

    async execute(interaction, client){
        if(!interaction.member.permissions.has("ManageMessages")) return interaction.reply('** ❌ No tienes permiso de Manejar Mensajes')
        const mensaje = interaction.options.getString('mensaje');
        const usuario = interaction.options.getMember('usuario');
        const user = interaction;
      


        interaction.reply({ content: `** ✅ | Mensaje Envido Correctamente a ${usuario}**`, ephemeral: true}).catch(() => {});
        usuario.send(`${mensaje}`).catch(() => {});
    }
}