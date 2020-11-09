const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
require('dotenv').config()
const prefix = process.env.PREFIX

module.exports = class AnnounceCommand extends BaseCommand {
  constructor() {
    super('announce', 'Moderation', []);
  }

  run(client, message) {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
    if (cmd === prefix+'announce') {
      message.channel.send('This command is currently off.')
      //if (message.member.hasPermission('MANAGE_MESSAGES')) {
        //let announcement = args[args]
       // if (!announcement) {
       //  message.reply('You did not specify what you would like to announce.')
      // }else{
      //    const announceEmbed = new Discord.MessageEmbed()
      //      .setColor('#900CC7')
      //      .setTitle('Announcement!')
      //      .setDescription(`@everyone ${announcement}`)
      //      .setFooter('Please do this in the channel you want to announce in!')
      //      .setTimestamp()
     //   
      //     message.channel.send(announceEmbed)
      //  }
     // }else{
     //   message.reply('You do not have permission to use this command.')
    //  }
    }
  }
}