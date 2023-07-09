const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "skip",
    aliases: ["saltar"],
    desc: "Sirve para saltar una canción",
    async execute(client, message, args, prefix) {

        const salteada = new EmbedBuilder()
        .setColor('#737373')
        .setDescription('**<:logo1:1104791779317907496><:logo2:1104791792903262309> | Sistema de Musica**\n**<:logo3:1104791808002768957><:logo4:1104791819910397993> | Cancion saltada**\n\n<:tilde:1104790645857603705> La cancion fue skipeada con exito!\n\n_Ahora se reproducira la cancion que sigue o una recomendada!_')
        .setThumbnail('https://cdn.discordapp.com/attachments/1072297927986393138/1101221170872864808/logo_MDPRP.png')
        .setFooter({
          text: "MDP Roleplay",
          iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()

        const queue = client.distube.getQueue(message);
        if(!queue) return message.reply(`<:cruz:1104223759877025833> No hay ninguna cancion reproduciendose`);
        if(!message.member.voice?.channel) return message.reply(`<:cruz:1104223759877025833> Necesitas estar en un canal de voz para ejecutar eso`);
        if(message.guild.members.me.voice?.channel && message.member.voice?.channel.id != message.guild.members.me.voice?.channel.id) return message.reply(`<:cruz:1104223759877025833> Tienes que estar en el mismo canal de voz que yo para hacer eso!`);
        client.distube.skip(message);
        message.reply({ embeds: [salteada] });
    }
}