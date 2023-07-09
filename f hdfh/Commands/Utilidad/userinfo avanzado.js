const { EmbedBuilder, message } = require("discord.js");

module.exports = {

    name: "userInfo",
    alias: [""],

async execute(message, client, args) {
    if (message.content.startsWith('!userinfo')) {
      const user = message.mentions.users.first() || message.author;
      const member = message.guild.members.cache.get(user.id);
  
      // Obtener los roles del usuario como menciones
      const roles = member?.roles.cache
        .filter(role => role.name !== '@everyone')
        .map(role => `<@&${role.id}>`)
        .join(', ') || 'N/A';
  
      // Obtener la actividad actual del usuario
      const activity = user.presence.activities[0] || 'N/A';
      const activityText = `${activity.type === 'CUSTOM_STATUS' ? activity.emoji?.name + ' ' : ''}${activity.name}`;
  
      const embed = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
        .setDescription(`Información detallada del usuario ${user}`)
        .addField('ID', user.id, true)
        .addField('Nickname', member?.nickname || 'N/A', true)
        .addField('Estado', user.presence.status.toUpperCase(), true)
        .addField('Actividad', activityText, true)
        .addField('Cuenta creada el', user.createdAt.toUTCString(), true)
        .addField('Se unió al servidor', member?.joinedAt.toUTCString() || 'N/A', true)
        .addField('Roles', roles)
        .setColor('#00ff00')
        .setTimestamp();
  
      await message.channel.send({ embeds: [embed] });
    }
  }
}