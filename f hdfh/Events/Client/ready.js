const { loadCommands } = require("../../Handlers/commandHandler");
const { loadPrefixs } = require("../../Handlers/prefixHandler")
const {client, ActivityType, EmbedBuilder} = require('discord.js')
const config = require("../../config.json")
module.exports = {
  name: "ready",
  once: true,
async  execute(client, message ) {
    client.user.setActivity("PornHub", {type: ActivityType.Watching})
    console.log("El cliente ya esta listo");

    const canalesInicio = ["1103105496187158589"];
    const ms = require("ms")
    const { version: djsversion } = require('discord.js');
    const restart = new Date().toLocaleString();
   

    const embed = new EmbedBuilder()
    .setTitle("Estoy listo <:developer:1126297003253563393>")
    .setDescription(`Bot Prendido🟢\n\n**Prendido:**\`${restart}\`\n\n**Estado de Tiempo:**<t:${parseInt(Date.now() / 1000)}:R>`)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setAuthor({ name: `${message.user.tag}`, iconURL: `${message.user.displayAvatarURL({ dynamic: true, size: 1024})}`})
    .setColor(0x56f4f5)
  
    try {
      for (const canalIdInicio of canalesInicio) {
        const canalInicio = await client.channels.fetch(canalIdInicio);
  
        canalInicio.send({embeds: [embed]});
      }
    } catch (error) {
      console.error("Error al enviar el mensaje de inicio:", error);

    }

    
    client.on('messageCreate', async (message) => {
      if (message.channel.type === 'GUILD_TEXT' && !message.author.bot) {
        const channel = await message.author.createDM();
        if (channel) {
          console.log(`Mensaje recibido en DM de ${message.author.tag}: ${message.content}`);
    
          // Aquí puedes realizar cualquier acción adicional que desees con los mensajes directos
          // Por ejemplo, puedes enviar una respuesta automatizada:
          const response = 'Gracias por tu mensaje. Estoy procesando tu solicitud.';
          await channel.send(response);
        }
      }
    });
    

    loadCommands(client);
    loadPrefixs(client);
  
    

  },
};