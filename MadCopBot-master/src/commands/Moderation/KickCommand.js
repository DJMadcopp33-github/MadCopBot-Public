const BaseCommand = require('../../utils/structures/BaseCommand');
require('dotenv').config()
const prefix = process.env.PREFIX

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Moderation', []);
  }

  run(client, message) {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
    if (cmd === prefix+'kick') {
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
      let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if (!User) return message.channel.send("Invalid User")
      if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
      let kickReason = args.join(" ").slice(22);
      if (!kickReason) {
        kickReason = "None"
      }

      User.kick({reason: kickReason})
    }
  }
}