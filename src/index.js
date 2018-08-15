const Discord = require('discord.js');
const env = require('../config.json');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  console.log(message.content);
});

client.login(env.token);