module.exports = {
  common: {
    currency: "$",
    //way that money will be shown to user example 0,0.00 will show 1234.5432 as 1,234.54
    moneyFormat: "0,0.00",
    numberFormat: "0,0"
  },
  crates: [
    "Basic","Good","Great","Epic","Ultimate","Omega"
  ],
  defaultCommand: {
    title: "Casino",
    desc: "Hello! \nCasino Bot is a Discord bot that allows users to play casino games on Discord. __**FOR AMUSEMENT ONLY**__.",
    titleCommands: ["Games:","Commands:"],
    titleDiscord: "Discord Server",
    titleUltra: "Disnode Ultra",
    descDiscord: "**Join our Discord Server for Support and More!:** https://discord.gg/AbZhCen",
    descUltra: "**Do you want to support us, so we can keep our bots up and running? Then buy Disnode Ultra for some sweet perks today!** https://www.disnodeteam.com/ultra (when purchased run `!casino ultra` to activate)",
    commands: {
      rules: "*rules for Casino Bot.*",
      invite: "*invite link for Casino Bot.*",
      ultra: "*Check your Ultra stats!*",
      slot: "*slots (general help).*",
      flip: "*flip a coin. Which will it be, heads or tails?*",
      wheel: "*play a nice game of roulette.*",
      help: "*this command*",
      "21": "*Play a game of blackjack!* (Ultra only)",
      market: "*Marketplace to buy and sell keys*",
      stats: "*Bot Info and Stats*",
      dice: "*Roll a die and see if you are lucky enought to pick the right number!*",
      bal: "*check yours or other's money or XP quickly.*",
      income: "*Redeem your Income with this command!*",
      top: "*check who's on top, and compete with your friends!*",
      betters: "*see who's recently played slots on your server.*",
      crate: "*Use keys to open crates for money and XP!*",
      store: "*Get more money and/or income here!*",
      jackpot: "*Get quick info about the jackpot, such as the value!*",
      stats: "*View your stats for the bot, such as jackpot wins, etc.*",
      transfer: "*Transfer money to other players!*"
    }
  },
  balCommand: {
    title: "Balance",
    titleMoney: "Money",
    titleIncome: "Income",
    titleMaxIncome: "Max Income",
    titleXP: "XP / Next Level",
    titleLevel: "Level",
    titleKeys: "Keys",
    titleCrates: "Crates",
    titleUltra: "Ultra"
  }
};
