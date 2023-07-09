const {
    ComponentType,
    EmbedBuilder,
    SlashCommandBuilder,
    ActionRowBuilder,
    SelectMenuBuilder,
  } = require(`discord.js`)
  
  const map = require(`fs`)
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName(`helpmenu`)
      .setDescription(`Para ver los comandos del bot`),
  
    async execute(interaction) {
      const emojis = {
        informacion: `<:copiar:1000971777016602694>`,
        moderacion: `<:9736rolemod:1000820326743146586>`,
        diversion: `<:0001_coronaas:1000820133910032434>`,
      }
  
      const directories = [
        ...new Set(interaction.client.commands.map((cmd) => cmd.folder)),
      ]
      
      const formatString = (str) =>
      `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
      
      const categories = directories.map((dir) => {
        const getCommands = interaction.client.commands
          .filter((cmd) => cmd.folder === dir)
          .map((cmd) => {
            return {
              name: cmd.data.name,
              description:
                cmd.data.description ||
                `No hay ninguna descripción para este comando`,
            }
          })
      
        return {
          directory: formatString(dir),
          commands: getCommands,
        }
      })
  
      const embed = new EmbedBuilder().setDescription(
        `**Hola mi nombre es FG Multi-Functions este es mi comando de help, si quieres saber mas comandos solo selecciona la categoria aqui abajo**`
      )
      .setTitle(`Comando ejecutado`)
      .setFooter({text: `Para saber mis comandos solo usa /help`, iconURL: `${interaction.user.displayAvatarURL()}`})
      .setColor(0xf2ff0e)
  
      const components = (state) => [
        new ActionRowBuilder().addComponents( 
          new SelectMenuBuilder()
            .setCustomId('help-menu')
            .setPlaceholder('Selecciona una categoria')
            .setDisabled(state)
            .addOptions(
              categories.map((cmd) => {
                return {
                  label: cmd.directory,
                  value: cmd.directory.toLowerCase(),
                  description: `Comandos de la categoría ${cmd.directory}`,
                  emoji: emojis[cmd.directory.toLowerCase() || null],
                }
              }),
            ),
        ),
      ]
  
      const initialMessage = await interaction.reply({
        embeds: [embed],
        components: components(false),
      })
      const filter = (interaction) =>
        interaction.user.id === interaction.member.id
  
      const collector = interaction.channel.createMessageComponentCollector({
        filter,
        componentType: ComponentType.SelectMenu,
      })
  
      collector.on('collect', (interaction) => {
        const [directory] = interaction.values
        const category = categories.find(
          (x) => x.directory.toLowerCase() === directory,
        )
  
        const categoryEmbed = new EmbedBuilder()
          .setTitle(`Comandos de ${formatString(directory)}`)
          .setDescription(
            `**Se esta mostrando la lista de comandos de ${directory}**`,
          )
          .setColor(0xf2ff0e)
          .addFields(
            category.commands.map((cmd) => {
              return {
                name: `\`/${cmd.name}\``,
                value: `**${cmd.description}**`,
                inline: true,
              }
            }),
          )
  
        interaction.update({ embeds: [categoryEmbed] })
      })
  
      collector.on(`end`, () => {
        initialMessage.edit({ components: components(true) })
      })
    },
  }