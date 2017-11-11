const discord = require('discord.js');
var config = require('./config');
const command = require('./src/command');
const logger = require('disnode-logger');

var bot = new discord.Client({
  messageCacheMaxSize: 50,
  messageCacheLifetime: 300,
  messageSweepInterval: 600,
  disabledEvents: [
    "TYPING_START"
  ]
});
var cmdmngr = new command(bot, config.PREFIX);
bot.on("ready", () => {
  logger.Success("Boilerplate", "Start", "Ready!");
  bot.user.setGame("Hello, World!");
  this.bot = bot;
  this.cmdmngr = cmdmngr;
  this.discord = discord;
  this.config = config;
})
cmdmngr.on("message", (command) => {
  try {
    let commandFile = require(`./commands/${command.command}.js`);
    commandFile.Run(this, command);
    logger.Info("Casino", "Command", "Command: " + command.command + " User: " + command.msg.author.username + " (" + command.msg.author.id + ")");
  } catch (err) {
  } finally {
    delete require.cache[require.resolve(`./commands/${command.command}.js`)];
  }
});

cmdmngr.on("mention", (msg) => {
  // when a message is just a mention to the bot
})

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
bot.login(config.TOKEN);
