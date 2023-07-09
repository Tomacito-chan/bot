const { Message } = require('discord.js');

module.exports = {
  name: 'autoResponder',
  execute(message) {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'n!fuck <@1085284626416795720>') {
      message.reply(`a perro triple ijueputa ahora el pinshi muzan te va a violar por andar violandome, <@${message.author.id}>`);
    }
  },
};