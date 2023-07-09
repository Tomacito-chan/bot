const { Message, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "moneda",
  /**
   *
   * @param {Message} message
   */
  async execute(message, args) {
    const resultado = Math.random() < 0.5 ? "cara" : "cruz";
    const caraImage = `https://cdn.discordapp.com/attachments/1111059577975341069/1114349355659440208/3zHpnXhZj3mAAAAAAElFTkSuQmCC.png`;
    const cruzImage = `https://cdn.discordapp.com/attachments/1111059577975341069/1114349746677620796/r8B1Send9ICrw0AAAAASUVORK5CYII.png`;

    const embed = new EmbedBuilder()
      .setTitle(`:coin: He lanzado la moneda`)
      .setDescription(`¡La modena ha sido lanzada!`)
      .setColor(`Aqua`)
      .setImage(resultado === "cara" ? caraImage : cruzImage)
      .addFields({
        name: "El resultado fue:",
        value:
          resultado === "cara"
            ? "**:person_pouting: Cara**"
            : "**:cross: Cruz**",
      });
    const loadingMessage = await message.channel.send("Lanzando la moneda...");

    await delay(2000);

    loadingMessage.delete();

    message.channel.send({
      embeds: [embed],
    });
  },
};
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}