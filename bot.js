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
  logger.Success("MusicBot", "Start", "Ready!");
  bot.user.setGame("$help");
  this.bot = bot;
  this.cmdmngr = cmdmngr;
  this.discord = discord;
  this.config = config;
  this.audio = {};
  this.currentSong = {};
  this.voice = {};
});
cmdmngr.on("message", (command) => {
  try {
    let commandFile = require(`./commands/${command.command}.js`);
    commandFile.Run(this, command);
    logger.Info(bot.user.username, "Command", "Command: " + command.command + " User: " + command.msg.author.username + " (" + command.msg.author.id + ")");
  } catch (err) {
    console.log(err);
    delete require.cache[require.resolve(`./commands/${command.command}.js`)];
  } finally {
    delete require.cache[require.resolve(`./commands/${command.command}.js`)];
  }
});

cmdmngr.on("mention", (msg) => {
  // when a message is just a mention to the bot
});

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
bot.login(config.TOKEN);