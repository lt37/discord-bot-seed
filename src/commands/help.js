module.exports = {
  name: 'help',
  description: 'This command provides help about other commands.',
  usage: '<command name>',

  execute(message, args) {
    message.channel.send('This is help!');
  }
};