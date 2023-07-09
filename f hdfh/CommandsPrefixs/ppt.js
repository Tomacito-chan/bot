const choices = ['piedra', 'papel', 'tijeras'];
const { EmbedBuilder } = require("discord.js")

module.exports = {
  name: 'ppt',
  description: 'Juega a Piedra, Papel o Tijeras contra el bot.',
  execute(message, args, client) {
    if (args.length !== 1 || !choices.includes(args[0].toLowerCase())) {
      message.reply('Debes elegir entre\n**`Piedra`**\n**`Papel`**\n**`o Tijeras`**');
      return;
    }

    const userChoice = args[0].toLowerCase();
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (userChoice === botChoice) {
      result = '¡Es un empate!';
    } else if (
      (userChoice === 'piedra' && botChoice === 'tijeras') ||
      (userChoice === 'papel' && botChoice === 'piedra') ||
      (userChoice === 'tijeras' && botChoice === 'papel')
    ) {
      result = '¡Ganaste!';
    } else {
      result = '¡Perdiste!';
    }

    const embed = new EmbedBuilder()
       .setTitle(`\`Juego de Piedra, Papel o Tijeras\``)
       .setThumbnail(`${message.client.user.displayAvatarURL({ dynamic: true})}`)
       .setFields(
        { name: "Elegiste:", value: `${userChoice}`},
        { name: "Mi respuesta:", value: `${botChoice}`},
        { name: "Resultado:", value: `${result}`})
    
       message.reply({ embeds: [embed]});
  },
};