exports.Run = function(caller, command) {
  command.msg.channel.send({
    embed: {
      title: caller.bot.user.username + "'s Help",
      description: "This is a music bot that allows you to listen to music as you play games.",
      fields: [{
        name: '',
        value: ''
      }],
      timestamp: new Date()
    }
  })
};
