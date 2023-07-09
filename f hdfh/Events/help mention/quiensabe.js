const {EmbedBuilder} = require("discord.js")

module.exports = {
    name: "helpMention",

async execute(message, client) {
  if(message.content.match(new RegExp(`<@${client.user.id}>`)))
  {
    const tag1 = new EmbedBuilder()
    .setTitle("Enseña te ayudo mi vro")
    .setDescription(`
    Hola yo soy ${client.config.bot_user}, un bot multifuncional
    tratando de mejorar comandos y mas
    `)
    .setFields(
      {name: `Dueño`, value: ` ${client.config.dueño}\n Id: ${client.config.dueño_id} `},
      {name: `Prefix`, value: ` \`<${client.config.prefix}>\``},
      {name: `Help`, value:  ` **/help o ${client.config.prefix}help**`})
    .setColor(0xff0000)
    .setTimestamp()

    message.reply({embeds: [tag1]})
    }
}
}