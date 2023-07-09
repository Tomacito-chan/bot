const {Client,GatewayIntentBits,Partials,Collection,GuildMessageReaction, EmbedBuilder,} = require("discord.js");
const mongoose = require("mongoose");
const Canvas = require("canvas")
const fs = require("fs")
  const { Guilds, GuildMembers, GuildMessages, GuildMessageReactions, MessageContent } = GatewayIntentBits;
  const { User, Message, GuildMember, ThreadMember } = Partials;
  
  const client = new Client({
    intents: 3276799,
    partials: [User, Message, GuildMember, ThreadMember],
  });
  
  const { loadEvents } = require("./Handlers/eventHandler");
  
  client.config = require("./config.json");
  client.events = new Collection();
  client.commands = new Collection();
  client.prefixs = new Collection();
  
  loadEvents(client);

  require(`./Handlers/anti-crash`)(client);


  client.login(client.config.token);

 
 mongoose.set('strictQuery', false);

  mongoose.connect(`mongodb+srv://Leviatanes:leviatanesmamalones@lds.ylk8lfs.mongodb.net/`)
