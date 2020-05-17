var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt, roll) {

    function roll (dice) {
        return Math.floor(Math.random() * dice +1)
    }

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'd4':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d4 e tirou: ${roll(4)}`
                });
            break;
            case 'd6':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d6 e tirou: ${roll(6)}`
                });
            break;
            case 'd8':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d8 e tirou: ${roll(8)}`
                });
            break;
            case 'd10':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d10 e tirou: ${roll(10)}`
                });
            break;
            case 'd12':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d12 e tirou: ${roll(12)}`
                });
            break;
            case 'd20':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d20 e tirou: ${roll(20)}`
                });
            break;
            case 'd50':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d50 e tirou: ${roll(50)}`
                });
            break;
            case 'd100':
                bot.sendMessage({
                    to: channelID,
                    message: `Você rolou um d100 e tirou: ${roll(100)}`
                });
            break;          
         }
     }
});