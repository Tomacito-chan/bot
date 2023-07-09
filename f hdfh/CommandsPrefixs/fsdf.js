const { EmbedBuilder } = require("@discordjs/builders");
const { message, User } = require("discord.js");

module.exports = {
    name: "rule-mod",
    developers: true,
   /**
    * 
    * @param {message} message 
    */
   async execute(message, args) {

    const embed = new EmbedBuilder()
   .setDescription(`colaboren porfavor`)
   .setColor(0xff0000)
   .setFields(
    { name: "Author:", value: `<@${message.author.id}>`},
    { name: "Regla N°1", value: "Prohibido insultar a los miembros del server y crear peleas internas"},
    { name: "Regla N°2", value: "Prohibido el Mal Uso de canales"},
    { name: "Regla N°3", value: "Prohibido hacer Spam en todos los canales"},
    { name: "Regla N°4", value: "Prohibido enviar links/enlaces no aptos"},
    { name: "Regla N°5", value: "Prohibido interrumpir reuniones en Discord"},
    { name: "Regla N°6", value: "Prohibido quedarse AFK en salas"},
    { name: "Regla N°7", value: "Prohibido hacer eventos sin avisar a los lideres"},
    { name: "Regla N°8", value: "Prohibido hacer Apuestas sin ser Autorizadas"},
    { name: "Regla N°9", value: "Prohibido pedir roles de Admin o rangos sin haber participado en eventos"},
    { name: "Regla N°10", value: "me imagino que ya se la saben de no hacer spam, esta regla esta puesta para imbeciles que no saben respetar las reglas, esto se hace en su debido canal no se aceptan invitaciones de servers"},
    {name: "Regla N°11", value: "Prohibido enviar porno en el server, haganlo en su debido canal <#1125569972756828243> si eres <@&1125583750449868830> no puedes ver el canal :D"},
    { name: "-----------------------", value: "Ahora vienen las reglas para los Admins"},
    { name: "Regla N°1", value: "Prohibido Mutear miembros sin una razon valida"},
    { name: "Regla N°2", value: "miren hombre, no sean culeros y ustedes admins, si, ustedes, dejen de hablar en canales que NO se deben de hablar"},
    { name: "Regla N°3", value: "Prohibido insultar a los miembros del clan, al menos que se tengan confianza" },
    { name: "Regla N°4", value: "prohibido pedir asensos de rango"},
    { name: "Regla N°5", value: "Prohibido enviar porno en el server"},
    { name: "Regla N°6", value: "me imagino que ya se la saben de no hacer spam, esta regla esta puesta para imbeciles que no saben respetar las reglas, esto se hace en su debido canal no se aceptan invitaciones de servers"})
        .setTimestamp()
        .setThumbnail(`${message.client.user.displayAvatarURL({ size: 1024 })}`)
        .setTitle(`***para majes que intenten romper las reglas, la sancion sera un tiro >:c***`)

     message.reply({ embeds: [embed] });
     message.channel.send({ content: "**cumplan las reglas no sean cerotes**" });
     message.delete({embeds: [embed]})
     message.editReply({content: "yo que se"})
   },
};