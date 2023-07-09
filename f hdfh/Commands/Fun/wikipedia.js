const wiki = require('wikijs').default();
const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js')

var timeout = [];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wikipedia')
    .setDMPermission(false)
    .setDescription('busca info en wiki')
    .addStringOption(option => option.setName('busquedad').setDescription('Di lo que vas a buscar.').setRequired(true).setMaxLength(200)),
    async execute (interaction, client) {

        const busquedad = interaction.options.getString('busquedad');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator) && timeout.includes(interaction.member.id) && interaction.user.id !== 'TU ID') return await interaction.reply({ content: '¡Estás en enfriamiento! **No puedes** ejecutar /wiki.', ephemeral: true})

        await interaction.deferReply();

        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, 10000)


        const lupa = await wiki.search(busquedad);
        if (!lupa.results.length) return await interaction.editReply({ content: '> Hey, no encontre resultado!', ephemeral: true});

        const resultado = await wiki.page(lupa.results[0]);

        const resumen = await resultado.summary();
        
        const embed = new EmbedBuilder()
        .setTitle(`> La búsqueda "${resultado.raw.title}" fue enviada!`)
        .setAuthor({ name: ('📰 ¡Wiki ha encontrado resultados potenciales!')})
        .addFields({ name: `• Resultados de Wiki`, value: `${resumen.slice(0, 1021)}...`})
        .setFooter({ text: ('• Busqueda Completa')})
        .setColor("DarkButNotBlack")
        .setThumbnail()
        .setTimestamp()

        await interaction.editReply({ embeds: [embed], ephemeral: false});
    
        

    }
}

// INSTALAR - npm i wikijs
// TODO LO RESULTADO SERA EN INGLES CREO
// UNETE A SERVIDOR DE MI BOT, LINK EN MI PERFIL
