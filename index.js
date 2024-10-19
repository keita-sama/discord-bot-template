const { Client, Events, Collection } = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const client = new Client({ intents: ['Guilds'] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands');

commandFiles.forEach(async (file) =>  {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
});

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return console.log(`[INVALID COMMAND] Command "${interaction.commandName}" does not exist!`);

    await command.execute(interaction);
});

client.login(config.token);