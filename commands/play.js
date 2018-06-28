exports.Run = function(caller, command) {
  const ytdl = require('ytdl-core');
  const axios = require('axios');
  var vc = command.msg.member.guild.members.find('id', command.msg.author.id).voiceChannel;
  var guildID = command.msg.member.guild.id;
  if (command.params[0] != undefined) {
    if (caller.audio[guildID] == undefined) {
      var id = command.params[0].split('watch?v=')[1];
      axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + caller.config.ytKey).then(function(response) {
        if (vc != null) {
          caller.voice[guildID] = vc;
          vc.join().then(connection => {
            var stream = ytdl(command.params[0], {
              filter: "audioonly"
            });
            var obj = {
              name: response.data.items[0].snippet.title,
              url: command.params[0],
              user: command.msg.author
            }
            command.msg.channel.send({
              embed: {
                description: `**Playing** ${obj.name}\n**Queued by** ${obj.user.username}`,
                thumbnail: {
                  url: response.data.items[0].snippet.thumbnails.medium.url
                }
              }
            });
            caller.currentSong[guildID] = obj;
            caller.audio[guildID] = connection.playStream(stream);
            caller.audio[guildID].on('end', () => {
              vc.leave();
              delete caller.voice[guildID];
              delete caller.audio[guildID];
              delete caller.currentSong[guildID];
            });
          });
        }
      })
    } else command.msg.channel.send('Already playing music in this server.')
  } else command.msg.channel.send('u wot.')
};