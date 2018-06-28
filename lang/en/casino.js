module.exports = {
  common: {
    currency: "$",
    //way that money will be shown to user example 0,0.00 will show 1234.5432 as 1,234.54
    moneyFormat: "0,0.00",
    numberFormat: "0,0",
    errorTitle: "Error"
  },
  timeout: {
    title: "Error",
    body: [
      ":warning: You must wait **",
      "** before playing again."
    ]
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
  },
  slotCommand: {
    info: {
      embedTitle: "Casino Slot Info",
      titleItems: "Slot Items",
      valueItems: ":cherries: - Cherries (Most Common)\n\n:third_place:\n\n:second_place:\n\n:first_place:\n\n:package:\n\n:100:\n\n:key: - Key (Most Rare)",
      titleWins: "Slot Wins and Payouts",
      valueWins: "\n:cherries::cherries::cherries: - 2x bet 10XP\n"+
        ":third_place::third_place::third_place: - 4x bet 20XP\n"+
        ":second_place::second_place::second_place: - 8x bet 40XP\n"+
        ":first_place::first_place::first_place: - 16x bet 80XP\n"+
        ":package::package::package: - 3 crates (**Minimum Jackpot Bet Required**)\n"+
        ":100::100::100: - JACKPOT value - 1000XP (**Minimum Jackpot Bet Required**)\n" +
        ":key::key::key: -  3 Keys (**Minimum Jackpot Bet Required**)\n" +
        "At least one :package: - 1 Crate (**Minimum Jackpot Bet Required**)\n" +
        "At least one :key: - 1 Key (**Minimum Jackpot Bet Required**)\n" +
        "At least one :cherries: - 1/2 your Original Bet",
      titleMinbet: "Minimum bet to Win Jackpot",
      valueMinbet: [
        "Minimum bet: ",
        " (if money < 8,500 min bet = 250) else (min bet = money * 0.03 or 3%))"
      ],
      titleXP: "XP",
      valueXP: "The XP system has changed a bit, if your bet is lower than $250, you will not get any XP",
      titleJackpot: "Jackpot",
      valueJackpot: "Jackpot Value is increased every time someone plays slots, the value is increased by the players bet amount and has a default value of $100,000\n**Current Jackpot Value: **",
      titleJackpotH: "Jackpot History",
      valueJackpotH: "**Last won by:** "
    },
    stats: {
      title: "Slot Item Stats",
      titlevalue: "This is here to show you some stats about slots there are a total of 255 items that slot can pick.**Note**: I added in a full screen of items for fun getting a full screen will result in nothing more than the three in a row award.",
      valueCherries: "**Amount**: 70, **Chance to get at least one**: 70/255 or 27.45%, **Chance to get 3 in a row**: 70/765 or 9.15%, **Chance of getting a full screen**: 70/2295 or 3.05%",
      valueThird: "**Amount**: 60, **Chance to get at least one**: 60/255 or 23.53%, **Chance to get 3 in a row**: 60/765 or 7.84%, **Chance of getting a full screen**: 60/2295 or 2.61%",
      valueSecond: "**Amount**: 50, **Chance to get at least one**: 50/255 or 19.61%, **Chance to get 3 in a row**: 50/765 or 6.54%, **Chance of getting a full screen**: 50/2295 or 2.18%",
      valueFirst: "**Amount**: 40, **Chance to get at least one**: 40/255 or 15.69%, **Chance to get 3 in a row**: 40/765 or 5.23%, **Chance of getting a full screen**: 40/2295 or 1.74%",
      valueCrate: "**Amount**: 20, **Chance to get at least one**: 20/255 or 7.84%, **Chance to get 3 in a row**: 20/765 or 2.61%, **Chance of getting a full screen**: 20/2295 or 0.87%",
      valueJP: "**Amount**: 10, **Chance to get at least one**: 10/255 or 3.92%, **Chance to get 3 in a row**: 10/765 or 1.31%, **Chance of getting a full screen**: 10/2295 or 0.44%",
      valueKey: "**Amount**: 5, **Chance to get at least one**: 5/255 or 1.96%, **Chance to get 3 in a row**: 5/765 or 0.65%, **Chance of getting a full screen**: 5/2295 or 0.22%"
    },
    help: {
      title: "Slots",
      value: "Hi, and welcome to slots. If you need any info on the slots, run the command `cs/slot info`. You can also see stats on items with `cs/slot stats`.\n\nIf you want to try the slots, then type `cs/slot [bet]. For example, `cs/slot 100` will run the slots with $100 as the bet.",
    },
    slot: {

    },
    reward: {
      ultraBonus: " **(Disnode Ultra Bonus!)**",
      crateWin: [
        "Hey! ",
        " crate(s)! You can open these with keys. "
      ],
      keyWin : [
        "Hey! ",
        " key(s)"
      ],
      cherriesWin: "Winner",
      cherriesHalf: "Well at least you didn't lose it all...",
      crateNoMin: ", But the crates(s) are empty! You didn't bet your min jackpot bet. ",
      keyNoMin: "... but the key(s) are rusted! You didnt bet your minimum bet to restore the key(s). oh well... ",
      noXPWarn: " `You bet lower than $250. Fair warning here, you won't get any XP and you can't win the TRUE jackpot.`"
    }
    error: {
      notEnoughMoney: ":warning: You dont have that much Money! You have ",
      notAnumber: ":warning: Please use a Number for bet or `cs/slot` for general help"
    }
  }
};
