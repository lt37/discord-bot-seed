const fs = require('fs');
const Discord = require('discord.js');
const env = require('../config.json');
const secrets = require('../secrets.json');

const client = new Discord.Client();
const prefix = env.prefix;


// Creates a map that associates each commands to its name.
client.commands = new Discord.Collection();
addCommands('src/commands');

client.on('ready', () => {
  console.log('Client is ready!');
});


client.on('message', message => {
  // Checks if the message has to be processed.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Parses the message using spaces and tabs.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  // Checks that the command exists
  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  command.execute(message, args);
});

client.login(secrets.token);

function addCommands(folderPath) {
  const commandFiles = fs.readdirSync(folderPath);
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }
}