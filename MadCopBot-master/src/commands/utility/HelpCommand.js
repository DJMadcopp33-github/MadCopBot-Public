const BaseCommand = require('../../utils/structures/BaseCommand');
require('dotenv').config();
const prefix = process.env.PREFIX
const Discord = require('discord.js');
const helpEmbed = new Discord.MessageEmbed()
    .setColor('#900CC7')
    .setTitle('Help')
    .setDescription('If you need help the bot shoud DM you you can join our Discord server with this code https://discord.gg/WGKwftj')
    .setTimestamp()
    .setFooter('Thanks for using MadCopBot!')
const helpDMEmbed = new Discord.MessageEmbed()
    .setColor('#900CC7')
    .setTitle('Help')
    .setDescription('Commands should be listed below. `ALL COMMANDS ARE LOWER CASE!`')
    .addFields(
      { name: '**Utility Commands**', value: '```?ping, ?about, ?discord```' },
      { name: '**Moderation Commands**', value: '```?tempmute, ?ban, ?warn, ?kick```' },
      { name: '**Fun commands**', value:'```There are currently no fun commands.```'}
    )
    .setFooter('More commands coming soon!')
    .setTimestamp()
module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'utility', []);
  }

  run(client, message, args) {
    if (message.author.bot) return;
    if (message.content === prefix+'help'){
      message.channel.send(helpEmbed)
      message.author.send(helpDMEmbed).catch(console.error)
    }
  }
}