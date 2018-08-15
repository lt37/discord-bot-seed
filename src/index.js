const Discord = require('discord.js');
const env = require('../config.json');
const secrets = require('../secrets.json');

const client = new Discord.Client();
const prefix = env.prefix;

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
  // Checks if the message has to be processed.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Parses the message using spaces and tabs.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  console.log(`Command Name: ${commandName}\nArgs: ${args}`);
});

client.login(secrets.token);