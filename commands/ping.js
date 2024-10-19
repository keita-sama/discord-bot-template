const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Sends a pong~!'),
        
    execute: async (interaction) => {
        await interaction.reply({ content: 'Pong!'})
    }
}