exports.Run = function(caller, command) {
    var guildID = command.msg.member.guild.id;
    if (caller.audio[guildID] != undefined) {
        caller.audio[guildID].resume();
        command.msg.channel.send("Audio has been resumed!");
    } else command.msg.channel.send('No audio is playing in this server.')
};
