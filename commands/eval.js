exports.Run = function(caller, command) {
  if (caller.config.eval.indexOf(command.msg.author.id) == -1) return;
  var code = command.params.join(" ");
  try {
    var evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    if (evaled.length > 1960) {
      command.msg.channel.send(`\`\`\`Result longer then 2000 characters so it was logged to console.\`\`\``);
      console.log(evaled);
    } else if (evaled == undefined) {
      command.msg.channel.send(`\`\`\`json\n${evaled}\n\`\`\``);
    } else {
      command.msg.channel.send(`\`\`\`json\n${evaled}\n\`\`\``);
    }
  } catch (e) {
    command.msg.channel.send(`\`\`\`json\n${e}\n\`\`\``);
  }
};