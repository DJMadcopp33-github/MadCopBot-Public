const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
require('dotenv').config()
const prefix = process.env.PREFIX
const ms = require('ms')
const mutedEmbed = new Discord.MessageEmbed()
  .setColor('#900CC7')
  .setTitle('You have been muted.')
  .setDescription(`You have been muted in one of your servers. Your mute will expire.`)
  .setFooter('Message by MadCopBot feel free to do the discord command and join our support server.')
  .setTimestamp()

module.exports = class TempmuteCommand extends BaseCommand {
  constructor() {
    super('tempmute', 'Moderation', []);
  }

  run(client, message){
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
    if(message.author.bot) return;
     if(cmd === '?tempmute'){
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "Muted");

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = args[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            member.roles.remove(mainrole.id)
            member.roles.add(role.id);

            message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)
            member.send(mutedEmbed)

            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));

        } else {
            return message.channel.send('You dont have perms.')
        }
    }
  }
  
}