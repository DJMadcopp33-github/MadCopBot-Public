const BaseCommand = require('../../utils/structures/BaseCommand');
require('dotenv').config();
const prefix = process.env.PREFIX

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'utility', []);
  }

  run(client, message, args) {
    if (message.author.bot) return;
    if (message.content === prefix+'ping'){
      message.channel.send(`Pong! Your ping is ${Date.now() - message.createdTimestamp} ms.`)
    }
  }
}