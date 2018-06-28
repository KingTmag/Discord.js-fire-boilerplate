exports.Run = function(caller, command) {
    var numeral = require('numeral');
    var guildID = command.msg.member.guild.id;
    var val = numeral(command.params[0]).value();
    if (caller.audio[guildID] != undefined) {
        if (val >= 0 && val <= 2) {
            caller.audio[guildID].setVolume(val)
            command.msg.channel.send(`Volume has been changed to ${Math.round((val * 100))}%`)
        } else command.msg.channel.send('Volume can only be between 0 and 2`')
    } else command.msg.channel.send('I am not playing music in your server.')
};
