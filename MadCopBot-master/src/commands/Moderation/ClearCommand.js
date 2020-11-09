const BaseCommand = require('../../utils/structures/BaseCommand');
require('dotenv').config()
const prefix = process.env.PREFIX

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'Moderation', []);
  }

  run(client, message) {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
    if (cmd === prefix+'clear'){
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permissions.')
      if (!args[0]) return message.reply('You did not specify how many messages you want to clear.')
      message.channel.bulkDelete(args[0])
    }
  }
}