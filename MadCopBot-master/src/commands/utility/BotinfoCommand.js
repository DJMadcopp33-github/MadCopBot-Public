const BaseCommand = require('../../utils/structures/BaseCommand');
require('dotenv').config()
const prefix = process.env.PREFIX
const Discord = require('discord.js')
const botInfoEmbed = new Discord.MessageEmbed()
  .setColor('#900CC7')
  .setTitle('Bot Info')
  .setDescription('This bot was created by DJMadcopp33#1234 on the 20/10/2020 at 14:45 GMT.')
  .setFooter('Made by DJMadcopp33#1234')
  .setTimestamp()

module.exports = class BotinfoCommand extends BaseCommand {
  constructor() {
    super('botinfo', 'utility', []);
  }

  run(client, message, args) {
    if (message.author.bot) return;
    if (message.content === prefix+'botinfo') {
      message.channel.send(botInfoEmbed)
    }
  }
}