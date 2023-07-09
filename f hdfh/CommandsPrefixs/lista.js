const Discord = require('discord.js');
module.exports = {
    name: "list",
    alias: ["queue"],
    desc: "Sirve para ver la lista de canciones",
    async execute(client, message, args, prefix) {
        
        const queue = client.distube.getQueue(message);
        if (!queue) return message.reply(`<:cruz:1104223759877025833> No hay ninguna cancion reproduciendose`);
        if (!message.member.voice?.channel) return message.reply(`<:cruz:1104223759877025833> Necesitas estar en un canal de voz para ejecutar eso`);
        if (message.guild.members.me.voice?.channel && message.member.voice?.channel.id != message.guild.members.me.voice?.channel.id) return message.reply(`<:cruz:1104223759877025833> Tienes que estar en el mismo canal de voz que yo para hacer eso!`);
        
        let listaqueue = [];
        var maximascanciones = 10;
        
        for (let i = 0; i < queue.songs.length; i += maximascanciones) {
            let canciones = queue.songs.slice(i, i + maximascanciones);
            listaqueue.push(canciones.map((cancion, index) => `<:numeral:1104223855255506965> [\`${cancion.name}\`](${cancion.url})`).join("\n "));
        }

        var limite = listaqueue.length;
        var embeds = [];
        
        for (let i = 0; i < limite; i++) {
            let desc = String(listaqueue[i]).substring(0, 2048);
            let embed = new Discord.EmbedBuilder()
                .setDescription(`<:logo1:1104791779317907496><:logo2:1104791792903262309> | Sistema de Musica**\n**<:logo3:1104791808002768957><:logo4:1104791819910397993> | Lista de Canciones\n\n${desc}`)
                .setColor("#737373")
                .setThumbnail('https://cdn.discordapp.com/attachments/1072297927986393138/1101221170872864808/logo_MDPRP.png')
                .setFooter({
                  text: "MDP Roleplay",
                  iconURL: client.user.displayAvatarURL()
                })
                .setTimestamp()
            if (queue.songs.length > 1) embed.addFields([{name: `\nCanción Actual`, value: `[\`${queue.songs[0].name}\`](${queue.songs[0].url})`}, ])
            await embeds.push(embed)
        }
        return paginacion();

        async function paginacion() {
            let paginaActual = 0;
            if (embeds.length === 1) return message.channel.send({ embeds: [embeds[0]] }).catch(() => { });
            let boton_atras = new Discord.ButtonBuilder().setStyle('Secondary').setCustomId('Volver').setEmoji('1088375822051704852').setLabel('Volver')
            let boton_avanzar = new Discord.ButtonBuilder().setStyle('Secondary').setCustomId('Siguiente').setEmoji('1088375820164288572').setLabel('Siguiente')
            let embedpaginas = await message.channel.send({
                content: `_Has clic en los botones, para volver o ir a la siguiente pagina..._`,
                embeds: [embeds[0].setFooter({ text: `Pagina ${paginaActual + 1}/${embeds.length}` })],
                components: [new Discord.ActionRowBuilder().addComponents([boton_atras, boton_avanzar])]
            });
            const collector = embedpaginas.createMessageComponentCollector({ filter: i => i?.isButton() && i?.user && i?.user.id == message.author.id && i?.message.author.id == client.user.id, time: 180e3 });
            collector.on("collect", async b => {
                if (b?.user.id !== message.author.id) return b?.reply({ content: `<:cruz:1104223759877025833> Solo la persona que ha escrito \`${prefix}lista\` puede cambiar de páginas!` });

                switch (b?.customId) {
                    case "Volver": {
                        collector.resetTimer();
                        if (paginaActual !== 0) {
                            paginaActual -= 1
                            await embedpaginas.edit({ embeds: [embeds[paginaActual].setFooter({ text: `Pagina ${paginaActual + 1}/${embeds.length}` })], components: [embedpaginas.components[0]] }).catch(() => { });
                            await b?.deferUpdate();
                        } else {
                            paginaActual = embeds.length - 1
                            await embedpaginas.edit({ embeds: [embeds[paginaActual].setFooter({ text: `Pagina ${paginaActual + 1}/${embeds.length}` })], components: [embedpaginas.components[0]] }).catch(() => { });
                            await b?.deferUpdate();
                        }
                    }
                        break;

                    case "Siguiente": {
                        collector.resetTimer();
                        if (paginaActual < embeds.length - 1) {
                            paginaActual++
                            await embedpaginas.edit({ embeds: [embeds[paginaActual].setFooter({ text: `Pagina ${paginaActual + 1}/${embeds.length}` })], components: [embedpaginas.components[0]] }).catch(() => { });
                            await b?.deferUpdate();
                        } else {
                            paginaActual = 0
                            await embedpaginas.edit({ embeds: [embeds[paginaActual].setFooter({ text: `Pagina ${paginaActual + 1}/${embeds.length}` })], components: [embedpaginas.components[0]] }).catch(() => { });
                            await b?.deferUpdate();
                        }
                    }
                        break;

                    default:
                        break;
                }
            });
            collector.on("end", () => {
                embedpaginas.components[0].components.map(boton => boton.disabled = true)
                embedpaginas.edit({content: `El tiempo ha expirado! escribe de nuevo \`${prefix}lista para volver a ver la cola de canciones!\``, embeds: [embeds[paginaActual].setFooter({ text: `Pagina ${paginaActual + 1}/${embeds.length}` })], components: [embedpaginas.components[0]] }).catch(() => { });
            });
        }
    }
}