// TODO: Refactor this into actual JSDoc (this is my first time ok)
/**
 * This is a command sample, showing off everything you have to know when creating a command.
 *
 * name: this is what users have to type to use the command.
 * /!\ This bot uses spaces to parse commands by default, so try not to use spaces in your command names.
 *
 * description: this will show up when a user uses the help command.
 * args: simply indicates if this command has arguments or not.
 * usage: indicates how the command has to be used. Used by the help command, and if the user types the command wrong.
 * cooldown: indicates the time between two uses of the command. (IN SECONDS!)
 * execute(message, args): this is the fun part, where all the logic goes. It uses the Message and the arguments passed to the command.
 */
module.exports = {
  name: 'CoolCommand',
  description: 'Description of my awesome command!',
  args: true,
  usage: `<${this.name}> <arg1> <arg2>`,
  cooldown: 10,
  execute(message, args) {
    message.channel.send('I am test 1');
  }
};
