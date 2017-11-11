const EventEmitter = require('events').EventEmitter;
const numeral = require('numeral');
class CommandManager extends EventEmitter {
  constructor(bot, prefix) {
    super()
    this.seen = 0;
    this.commands = 0;
    this.prefix = prefix;
    this.bot = bot;
    bot.on("message", (msg) => {
      this.seen++;
      this.parseMessage(msg);
    })
  }
  getStats(){
    return {
      seen: numeral(this.seen).format('0,0'),
      cmds: numeral(this.commands).format('0,0')
    };
  }
  parseMessage(msg){
    if(msg.author.bot)return;
    if(msg.content == "<@" + this.bot.user.id + ">"){
      this.emit("mention", msg);
      return;
    }
    var testpref = msg.content.slice(0, this.prefix.length);
    if(testpref == this.prefix){
      var params = GetParams(msg.content);

      var SpaceIndex = msg.content.length;
      if( msg.content.indexOf(" ") != -1){
        SpaceIndex = msg.content.indexOf(" ");
      }
      var firstWord = msg.content.substring(0, SpaceIndex);
      firstWord = Sanitize(firstWord);
      if(this.prefix.length == 1){
        firstWord = firstWord.substr(1);
      }else {
        firstWord = firstWord.substr(this.prefix.length);
      }
      firstWord = firstWord.toLowerCase();
      var command = {
        msg: msg,
        params: params,
        command: firstWord
      }
      this.emit('message', command);
      this.commands++;
    }
  }
}
function GetParams(raw){
  var parms = [];
  var lastSpace = -1;
  var end = false;
  while(!end){
    var BeginSpace = raw.indexOf(" ", lastSpace);
    var EndSpace = -1;
    if(BeginSpace != -1){
       EndSpace = raw.indexOf(" ", BeginSpace + 1);
       if(EndSpace == -1){
         EndSpace = raw.length;
         end = true;
       }
       var param = raw.substring(BeginSpace + 1, EndSpace);
       var containsQuoteIndex = param.indexOf('"');
       var BeginQuote = -1;
       var EndQuote = -1;
       if(containsQuoteIndex != -1){
         BeginQuote = raw.indexOf('"', BeginSpace);
         EndQuote = raw.indexOf('"', BeginQuote + 1);
         if(EndQuote != -1){
           BeginSpace = BeginQuote;
           EndSpace = EndQuote;
           param = raw.substring(BeginSpace + 1, EndSpace);
         }
       }
       lastSpace = EndSpace;
       if(param != ""){
         parms.push(param);
       }else{
       }
    }else{
      end = true;
    }
  }
  return parms;
}
function Sanitize(string) {
  while (string.indexOf("../") != -1) {
    string = string.replace("../", "");
  }
  while (string.indexOf("./") != -1) {
    string = string.replace("./", "");
  }
  return string;
}
module.exports = CommandManager;
