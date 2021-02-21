const Command = require('../../Structures/Command');
const ms = require('ms');
const {
    MessageEmbed,
    version: djs
} = require('discord.js')
const {
    version
} = require("../../package.json")
const os = require("os")
const cpuStat = require("cpu-stat")
module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['botinfo', 'bi'],
            name: "stats",
            category: "Information",
            disabled: false,
            clientPerms: [],
            userPerms: [],
            owner: false,
            rateLimit: 3,
            cooldown: 30000
        });
    }
    async run(message, args) {
        let core = os.cpus()[0];
        let embedStats = new MessageEmbed()
            // .setAuthor(this.client.user.username)
            .setAuthor("__**Stats:**__", message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor(this.client.config.color)
            .addField('**General**', [
                `**Client:** ${this.client.user.tag}\n(${this.client.user.id})`,
                `**Commands:** ${this.client.commands.size}`,
                `**Users:** ${this.client.users.cache.size}`,
                `**Servers:** ${this.client.guilds.cache.size}`,
                `**Channels:** ${this.client.channels.cache.size}`,
                `**Shards:** ${this.client.ws.shards.size}`,
                `**NodeJS:** ${process.version}`,
                `**Version:** v${version}`,
                `**Discord.JS:** v${djs}`,
                `**Client Uptime:** ${ms(this.client.uptime, { long: true })}`,
                `**Changes:** ${this.client.db.get(`changes`) || "None"}`,
                '\u200b'

            ], true)
            .addField('**System**', [
                `\u3000 **Platform:** ${this.client.utils.toProperCase(process.platform)}`,
                `\u3000 **System Uptime:** ${ms(os.uptime() * 1000, {long: true})}`,
                `**Memory:**`,
                `\u3000 **Usage:** ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`,
                `\u3000 **Total:** ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}`,
                `**CPU:**`,
                `\u3000 **Cores:** ${os.cpus().length}`,
                `\u3000 **Model:** ${core.model}`,
                `\u3000 **Speed:** ${core.speed}Mhz`,
                '\u200b'
            ], true)
            .addField('Vote', `Vote for ${this.client.user.username} here: [Vultrex](https://vultrex.co/bot/719472403356450816)`, true)
            .setFooter(this.client.config["config"].copyright)
        message.channel.send(embedStats)
    }
}