const { EmbedBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");

module.exports = {
    name: "doxxing",
    alias: ["sexpdgfdgd"],
   /**
    * 
    * @param {Message} message 
    */
   async execute(message, args) {

    const embed = new EmbedBuilder()
   .setTitle("**`SEXOOOOOOOOOOO`**")
   .setDescription("Puro sexo aqui")
   

     message.channel.send({ embeds: [embed] });
     message.channel.send({ content: "**Mucho sexo compa**" });




     
   },
};