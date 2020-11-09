const BaseCommand = require('../../utils/structures/BaseCommand');
require('dotenv').config()
const prefix = process.env.PREFIX

module.exports = class DiscordCommand extends BaseCommand {
  constructor() {
    super('discord', 'utility', []);
  }

  run(client, message, args) {
    if (message.author.bot) return;
    if (message.content.toLowerCase(prefix+'discord')){
      message.channel.send('https://discord.gg/WGKwftj')
    }
  }
}