const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const aboutEmbed = new Discord.MessageEmbed()
    .setColor('#42f5e6')
    .setTitle('About')
    .setDescription('Thank you for using MadCopBot! This bot is work in progress so there may be bugs or it may not work properly, once I know about these issues I will fix them as soon as I can.')
    .setTimestamp()
    .setFooter('Use ?discord or ?help for the invite code :)')
require('dotenv').config();
const prefix = process.env.PREFIX

module.exports = class AboutCommand extends BaseCommand {
  constructor() {
    super('about', 'utility', []);
  }

  run(client, message, args) {
    if (message.author.bot) return;
    if (message.content === prefix+'about'){
      message.channel.send(aboutEmbed)
    }
  }
}