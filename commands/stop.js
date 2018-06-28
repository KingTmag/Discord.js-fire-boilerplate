exports.Run = function(caller, command) {
  var guildID = command.msg.member.guild.id;
  if (caller.audio[guildID] != undefined) {
    caller.voice[guildID].leave();
    delete caller.audio[guildID];
    delete caller.voice[guildID];
    delete caller.currentSong[guildID];
    command.msg.channel.send('Audio has been stopped')
  } else command.msg.channel.send('No audio is playing in this server.')
};
