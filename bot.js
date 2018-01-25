const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;

bot.on('ready', () => {
	console.log(`Bot ${bot.user.username} is on`);
	bot.user.setPresence({game:{name:'for da wae', type:'WATCHING'}});
});

bot.on('guildMemberAdd', (member) => {
	var chan = member.guild.channels.find('id', '352111967307038723');
	chan.send(`Welcome, interesting fleshy mammal by the name of ${member}!`);
});

bot.on('message', (message) => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;
	
	if (message.content.substring(0, prefix.length).toUpperCase() === prefix.toUpperCase()) {
		var args = message.content.substring(prefix.length).trim().split(/ +/g);
		
		switch (args[0].toUpperCase()) {
		}
	}
	else {
		var content = message.content.toUpperCase()
		switch (content) {
			case 'HI': {
				fs.readdir('./images/bot-sending', (err, files) => {
					message.channel.send('Uganda knuckles', {file:'./images/bot-sending/uganda-knuckles' + (Math.floor(Math.random()*(files.length))+1) +'.png'});
				});
				break;
			}
			case 'YOYO': {
				message.channel.send('Yoyo interesting piece of flesh');
				break;
			}
			case 'HAHA': {
				message.channel.send('What are you laughing at?');
				break;
			}
			case 'NOTHING': {
				if (bot.user.lastMessage.content === 'What are you laughing at?') {
					message.channel.send('I need to know');
				}
				break;
			}
		}
	}
});

bot.login(token);