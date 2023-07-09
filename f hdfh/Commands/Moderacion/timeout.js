const { EmbedBuilder }  = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
const discord = require("discord.js")
const ms = require("ms")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Aislar a un usuario del server.")
    .addUserOption((option) => option.setName("usuario").setDescription("El Usuario que sera Aislado").setRequired(true))
    .addStringOption((option) => option.setName("tiempo").setDescription("El tiempo de Aislamiento del Usuario").setRequired(true))
    .addStringOption((option) => option.setName("reason").setDescription("razon por la que vas a Aislar al Usuario.").setRequired(true)),

    async execute(interaction){
 
        const user = interaction.options.getUser(`usuario`)
        const tiempo = interaction.options.getString(`tiempo`)
        const razon = interaction.options.getString(`reason`)
        
        let permisos = interaction.member.permissions.has(`ADMINISTRATOR`)
        if(!permisos) return interaction.reply({content: "No tienes Suficientes permisos mi compa"})

        const member = await interaction.guild.members.fetch(user.id)
        
        if(member.isCommunicationDisabled()) return interaction.reply( {content: "Ese Usuario ya esta Aislado"})

        const time = ms(tiempo)

        await member.timeout(time, razon)

        const TimeoutEmbed = new EmbedBuilder()
            .setTitle(`${user.tag} ah sido Aislado Correctamente! ✅ `)
            .setDescription(`**Tiempo:** ${tiempo}\n**Razon: ${razon}**`)
            .setFooter(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true}))
            .setTimestamp()
            .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)

            interaction.reply({emdeds:  [TimeoutEmbed]})

    }
}
