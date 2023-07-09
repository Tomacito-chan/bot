const Discord = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    developers: false,
    data: new SlashCommandBuilder()
        .setName('gey')
        .setDescription('ve un porcentage de cuando eres de gey')
        .addUserOption((option) => option.setName(`usuario`).setDescription(`ve a un usuario cuanto es de gay`).setRequired(false)),

    execute(interaction, client) {
        const { options, user } = interaction;

        const usuario = options.getUser(`usuario`) || user;
        const avatarUrl = usuario.avatarURL({ size: 512, extension: 'jpg' });
        const canvas = ` https://some-random-api.com/canvas/overlay/gay?avatar=${avatarUrl}`;


        let rpts = ["1%","2%","3%","4%","5%","6%","7%","8%","9%","10%","11%","12%","13%","14%","15%","16%","17%","18%","19%","20%","21%","22%","23%","24%","25%","26%","27%","28%","29%","30%","31%","32%","33%","34%","35%","36%","37%","38%","39%","40%","41%","42%","43%","44%","45%","46%","47%","48%","49%","50%","51%","52%","53%","54%","55%","56%","57%","58%","59%","60%","61%","62%","63","64%","65%","66%","67%","68%","69%","70%","71%","72%","73%","74%","75%","76%","77%","78%","79%","80%","81%","82%","83%","84%","85%","86%","87%","88%","89%","90%","91%","92%","93%","94%","95%","96%","97%","98%","99%","100%"]

        ///   if (!pregunta) return int.reply('Escriba una pregunta.')
        const embed = new EmbedBuilder()
            .setColor(`Random`)
            .setTitle(`Cuanto eres de gey `)
            .setImage(canvas)
            .setDescription(`# Aver que tan Gay eres:
            # Usuario: ${usuario}
            # Cuanto de Gay eres: \`${rpts[Math.floor(Math.random() * rpts.length)]}\` gey 🏳‍🌈`)
            .setFooter({ text: `Solicitado por ${interaction.user.username}`})

        interaction.channel.send({ content: `Como el dueño ( \`<@${client.config.developer}\`> ) es bien pendejo este comando fue solicitado por ${interaction.user.username} `})
        interaction.channel.send({ embeds: [embed] });
        interaction.reply({ content: `revisa tu porcentaje de gay`, ephemeral: true })
        

    },

};