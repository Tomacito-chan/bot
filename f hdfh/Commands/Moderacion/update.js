const { SlashCommandBuilder, PermissionFlagsBits, ActivityType, EmbedBuilder } = require("discord.js");
 
module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Cambia el estado del bot.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)// only for admin users
        .addSubcommand(subcommand =>
            subcommand.setName("actividad")
                .setDescription("Cambia la actividad del bot")
                .addStringOption(option =>
                    option.setName("tipo")
                        .setDescription("Elige una actividad")
                        .setRequired(true)
                        .addChoices(
                            { name: "Jugando", value: "Jugando" },
                            { name: "Stremeando", value: "Stremeando" },
                            { name: "Escuchando", value: "Escuchando" },
                            { name: "Viendo", value: "Viendo" },
                            { name: "Compitiendo", value: "Compitiendo" },
                        )
                )
                .addStringOption(option =>
                    option.setName("actividad")
                        .setDescription("Estable tu actividad actual.")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName("status")
                .setDescription("Actualiza el estado del bot.")
                .addStringOption(option =>
                    option.setName("tipo")
                        .setDescription("Elige un estado.")
                        .setRequired(true)
                        .addChoices(
                            { name: "Online", value: "Online" },
                            { name: "Ausente", value: "Ausente" },
                            { name: "No molestar", value: "No molestar" },
                            { name: "Invisible", value: "Invisible" },
                        )
                )
        ),
    async execute(interaction, client) {
        const { options } = interaction;
 
        const sub = options.getSubcommand(["actividad", "status"]);
        const type = options.getString("tipo");
        const activity = options.getString("actividad");
 
        try {
 
            switch (sub) {
                case "actividad":
                    switch (type) {
                        case "Jugando":
                            client.user.setActivity(activity, { type: ActivityType.Playing });
                            break;
                        case "Stremeando":
                            client.user.setActivity(activity, { type: ActivityType.Streaming, url: "tu url de twitch" }); // otherwise it won't work!!
                            break;
                        case "Escuchando":
                            client.user.setActivity(activity, { type: ActivityType.Listening });
                            break;
                        case "Viendo":
                            client.user.setActivity(activity, { type: ActivityType.Watching });
                            break;
                        case "Compitiendo":
                            client.user.setActivity(activity, { type: ActivityType.Competing });
                            break;
                    }
                case "status":
                    client.user.setPresence({ status: type });
                    break;
            }
 
        } catch (err) {
            console.log(err);
        }
 
        const embed = new EmbedBuilder();
 
        return interaction.reply({ embeds: [embed.setDescription(`Se ha actualizado con éxtio tu ${sub} a **${type}**.`)] })
    }
}