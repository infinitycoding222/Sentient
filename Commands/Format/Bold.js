const Command = require('../../Structures/Command');
const ms = require('ms');
const {
    MessageEmbed
} = require('discord.js')
module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['bold', 'boldtext'],
            name: 'bold',
            category: 'Format',
            description: ['Formates a text into bold text'],
            disabled: false,
            clientPerms: [],
            userPerms: [],
            owner: false,
            rateLimit: 3,
            cooldown: 30000
        });
    }
    async run(message, args) {
        if (!args.join(" ")) return message.channel.send(new MessageEmbed().setDescription(`Please enter a text`))
        message.channel.send("**" + args.join(" ") + "**");
    }
};