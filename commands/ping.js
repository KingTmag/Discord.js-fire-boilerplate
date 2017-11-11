const numeral = require('numeral');

exports.Run = function(caller, command) {
  var cmdstat = caller.cmdmngr.getStats();
  var response = new Date().getTime()  - command.msg.createdTimestamp;
  var avgping = (response + numeral(caller.bot.ping.toFixed()).value()) / 2;
  command.msg.channel.send({
    embed: {
      title: "Pong!",
      description: "Message Delay: **" + response + "ms**\n" +
                                     "WS Delay: **" + caller.bot.ping.toFixed() + "ms**\n" +
                                     "Average Ping: **" + avgping + "ms**"
    }
  })
};
