module.exports = {
    name: "messageCreate",
    async execute(message, client){
        
        const prefixs = `-`;
        
    
        if (!message.content.startsWith(prefixs) || message.author.bot) return;

        const args = message.content.slice(prefixs.length).split(/ +/);
        const command = args.shift().toLowerCase();
        const cmd = client.prefixs.get(command) || client.prefixs.find((cmd) => command.alias && cmd.alias.incluide(command));

        if (cmd.developer && message.author.id !== "981315321254281226")
        return message.reply({
          content: "This command is only available to the developer.",
          ephermal: true,
        });

        if(!cmd) return;

        cmd.execute(message, args);
       
    },
};