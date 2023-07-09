const { EmbedBuilder, Message, MessageActivityType } = require('discord.js');

module.exports = {
    developer: true,
    
        name: 'listservers',
        alias: "LDSS",
        
    async execute(message, args ) {

        const serverslist = message.client.guilds.cache.map(guild => `> **-** ${guild.name} \`(ID: ${guild.id})\``);
        const embed = new EmbedBuilder()
            .setTitle('Lista de servidores')
            .setDescription(`El bot se encuentra en los siguientes servidores:\n${serverslist.join('\n')}`)
            .setColor('Red');
         message.reply({ embeds: [embed] });
    },
};