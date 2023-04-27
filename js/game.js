// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
  music: "Eternity's Moment.mp3",
  background_image: "Bravely.jpg",
  levels: {
    start: {
      music: "Eternity's Moment.mp3",
      message:
        "You recently started a new retail job at Walmart! You find out that you've been scheduled to work on Black Friday... Not only is it your first Black Friday at Walmart, it's also your first time working on Black Friday ever! Do you think you'll survive the day, or do you chicken out?",
      choices: [
        {
          text: "Call out sick. I'm not doing that to myself.",
          nextLevel: "noWork",
        },

        {
          text: "Tell my manager I'm traveling for Thanksgiving, so I won't be able to work on Friday.",
          nextLevel: "noWork",
        },
        {
          text: "Decide to work on Black Friday. What's the worst that can happen?",
          nextLevel: "workYes",
        },
      ],
    },

    noWork: {
      message: "You're not working on Black Friday! Yay! Enjoy your day off!",
      music: "Pursuing My True Self.mp3",
      background_image: "P4-CoverArt.jpg",
      choices: [
        {
          text: "Back to start!",
          nextLevel: "start",
        },
      ],
    },

    workYes: {
      message:
        "You're brave enough to work on Black Friday, it seems. You read your assigned schedule because you didn't do that earlier. It turns out you're opening on Black Friday!!! You have never opened before! Do you follow through?",
      music: "specialist (Reincarnation).mp3",
      background_image: "ProtagonistTV.gif",
      choices: [
        {
          text: "Idk... I feel like quitting my job...",
          nextLevel: "quitting",
        },
        {
          text: "Let's open Walmart!",
          nextLevel: "yesOpening",
        },
      ],
    },

    quitting: {
      message:
        "You tell your boss about wanting to quit your job, but they try to convince you not to because a lot of employees have already said they're not coming in on Friday. What do you do?",
      music: "Junes Theme.mp3",
      background_image: "Junes.png",
      choices: [
        {
          text: "Not quit + work on Friday. They probably need me.",
          nextLevel: "yesOpening",
        },

        {
          text: "I'm quitting. I don't want to be stressed over a job. Bye, Walmart!",
          nextLevel: "yesQuit",
        },
      ],
    },

    yesQuit: {
      message:
        "You have successfully quit your retail job and are now living that sweet unemployed life. That is, until you have to look for a new job. The holiday rush is coming so it'll probably be very easy for you to find a job.",
      music: "Junes Theme.mp3",
      background_image: "Junes.png",
      choices: [
        {
          text: "Back to start!",
          nextLevel: "start",
        },
      ],
    },

    yesOpening: {
      message:
        "Well, you're actually opening Walmart. On Black Friday. Good luck!!!",
      music: "Backside Of The TV.mp3",
      background_image: "Midnight.jpg",
      choices: [
        {
          text: "Thanks!",
          nextLevel: "thanksgivingDay",
        },
      ],
    },

    thanksgivingDay: {
      message:
        "It's Thanksgiving Day, which means that you'll have to be at Walmart in a few hours. What do you do?",
      music: "Reach Out To The Truth -First Battle-.mp3",
      background_image: "TwistedDistant.jpg",
      choices: [
        {
          text: "Go to sleep early! I have to wake up early!",
          nextLevel: "sleepEarly",
        },

        {
          text: "Stay up late. I want to spend time with my family.",
          nextLevel: "sleepLate",
        },
      ],
    },

    sleepEarly: {
      message:
        "Your alarm goes off at 4 am. Thankfully, you feel great because you went to bed early! You get ready since you have to be at work by 5 am.",
      music: "Period.mp3",
      background_image: "BattleEnd.jpg",
      choices: [
        {
          text: "I'm ready to go!",
          nextLevel: "goToWalmart",
        },
      ],
    },

    sleepLate: {
      message:
        "Your alarm goes off at 4 am. You got less than 2 hours of sleep! What do you do?",
      music: "Alone.mp3",
      background_image: "P4Background1.jpg",
      choices: [
        {
          text: "Power through. Drink a lot of coffee. I need to get to work!",
          nextLevel: "goToWalmart",
        },
        {
          text: "Go back to sleep. My sleep is more important.",
          nextLevel: "sleepIn",
        },
      ],
    },

    sleepIn: {
      message:
        "You sleep in. You really don't care about what's going on at your job. If you get fired it's whatever.",
      music: "Signs Of Love.mp3",
      background_image: "YuRoom.png",
      choices: [
        {
          text: "Back to start!",
          nextLevel: "start",
        },
      ],
    },

    goToWalmart: {
      message:
        "You make it to Walmart, and there's already a crowd of people waiting outside! Some people are yelling at you to open the store. Do you do it?",
      music: "Who's There.mp3",
      background_image: "watchTV.jpg",
      choices: [
        {
          text: "No! It's not time to open yet!",
          nextLevel: "noOpen",
        },

        {
          text: "Sure. Why not?",
          nextLevel: "yesOpen",
        },
      ],
    },

    noOpen: {
      message:
        "You ignore customers' pleas. It's not even 5:30 yet. They can wait until opening.",
      music: "Deduction.mp3",
      background_image: "Yasogami.jpg",
      choices: [
        {
          text: "Enter the store.",
          nextLevel: "insideStore",
        },
      ],
    },

    yesOpen: {
      message:
        "Right when you're about to open, a coworker sees what you're doing and tells you to stop.",
      music: "Reverie.mp3",
      background_image: "P4Background2.jpg",
      choices: [
        {
          text: "ok, time to enter the store and get ready.",
          nextLevel: "insideStore",
        },
      ],
    },

    insideStore: {
      message:
        "You and your coworkers spend time organizing the store before opening (as if it's not going to be unrecognizable in a few hours). Finally, it's time to open! Brace yourself for what's to come.",
      music: "Backside Of The TV.mp3",
      background_image: "Midnight.jpg",
      choices: [
        {
          text: "Oh no.",
          nextLevel: "openingTime",
        },
        {
          text: "Happy Hunger Games, and may the odds be ever in your favor.",
          nextLevel: "openingTime",
        },
      ],
    },

    chieShadow: {
      message:
        "Right away people come rushing in. However, since the crowd is too large, not everyone can enter the store at the same time. A lady who was unable to enter the store tells you that the lines are too long. Can you make them shorter?",
      music: "Borderline of Madness.mp3",
      background_image: "ChieShadow.PNG",
      choices: [
        {
          text: `"No, I can't make lines shorter. The lines are there for a reason!"`,
          nextLevel: "lineLady1",
        },
        {
          text: "Ignore her and walk away. I'm not dealing with this nonsense.",
          nextLevel: "",
        },
      ],
    },

    lineLady1: {
      message:
        "Well, responding to her was a mistake! She now wants to go to the front of the line. When you tell her no, she asks to speak to the manager.",
      music: "I'll Face Myself -Battle-.mp3",
      background_image: "YukikoCastle.jpg",
      choices: [
        {
          text: "Lie and say that you're the manager.",
          nextLevel: "managerLie",
        },

        {
          text: `"Ma'am, there are hundreds of people in this store. I cannot get the manager.`,
          nextLevel: "managerTruth",
        },
      ],
    },

    managerLie: {
      message:
        "You're able to convince her that you're the manager, and that she should wait her turn.",
      music: "I'll Face Myself.mp3",
      background_image: "ChieAccepts.jpg",
      choices: [
        {
          text: "Problem solved!",
          nextLevel: "p4end",
        },
      ],
    },

    managerTruth: {
      message:
        "The lady gets mad when you tell her this and throws a tantrum. She sits on the floor and refuses to get up. You really don't want to deal with this right now.",
      music: "Electronica In Velvet Room.mp3",
      background_image: "P4Background1.jpg",
      choices: [
        {
          text: "Call security and leave it up to them.",
          nextLevel: "ladySecurity",
        },
        {
          text: "Walk away. I need to help other customers.",
          nextLevel: "section",
        },
        {
          text: "Drop everything and go home.",
          nextLevel: "ladyGoHome",
        },
      ],
    },

    ladySecurity: {
      message:
        "You call security and leave the rest up to them. Finally, you can get back to work.",
      music: "Reverie.mp3",
      background_image: "P4Background1.jpg",
      choices: [
        {
          text: "Get to work!",
          nextLevel: "section",
        },
      ],
    },

    ladyGoHome: {
      message:
        "Since the store had JUST opened and you were already dealing with insufferable people, you figured that the rest of today would be torture. You decide to go home. Unfortunately, you did not survive Walmart Black Friday.",
      music: "Where We Used To Be.mp3",
      background_image: "uraya-screen-2.jpg",
      choices: [
        {
          text: "Back to start :(",
          nextLevel: "start",
        },
      ],
    },

    section: {
      message:
        "Now that that's done, what do you want to deal with? I mean, where do you want to work?",
      music: "Exploration.mp3",
      background_image: "uraya-screen-2.jpg",
      choices: [
        {
          text: "Electronics section",
          nextLevel: "electronics",
        },
        {
          text: "Home goods section",
          nextLevel: "homeGoods",
        },
      ],
    },

    gormott: {
      message:
        "Okay, so now you're in Gormott, a place unrelated to where you died.",
      music: "Gormott.mp3",
      background_image: "gormott.jpg",
      choices: [
        {
          text: "Haha, throwback to when I died.",
          nextLevel: "rotbart",
        },
        {
          text: "Isn't there a town nearby?",
          nextLevel: "torigoth",
        },
      ],
    },

    rotbart: {
      message:
        "Oh no! Territorial Rotbart has spotted you! He's a high-level Unique Monster! What do you do?",
      music: "Those Who Stand Against Our Path.mp3",
      background_image: "rotbart.jpg",
      choices: [
        {
          text: "Fight him, even though I'm incredibly underleveled.",
          nextLevel: "rotbartLoss",
        },
        {
          text: "Run away.",
          nextLevel: "rotbartWin",
        },
      ],
    },

    rotbartWin: {
      message: "You made the right choice. You're safe...for now.",
      music: "Kirby Dance.mp3",
      background_image: "gormott-screen-1.jpg",
      choices: [
        {
          text: "I've had enough of this place.",
          nextLevel: "torigoth",
        },
      ],
    },

    rotbartLoss: {
      message:
        "You've made a huge mistake. Did you really think you could pick a fight with a level 78 monster when you're level 8, and win? You somehow managed to die a second time.",
      music: "Defeat.mp3",
      background_image: "gormott-screen-1.jpg",
      choices: [
        {
          text: "Pyra, I've failed you.",
          nextLevel: "start",
        },
      ],
    },

    torigoth: {
      message: "You decide to check out the local town, Torigoth. What now?",
      music: "Torigoth Day.mp3",
      background_image: "gormott-screen-6.jpg",
      choices: [
        {
          text: "Wander",
          nextLevel: "ardainian",
        },
        {
          text: "I need a break.",
          nextLevel: "inn",
        },
      ],
    },

    ardainian: {
      message:
        "You were minding your own business, but then an Ardainian soldier came out of nowhere. Think you can take him?",
      music: "Monster Surprised You.mp3",
      background_image: "soldier.jpg",
      choices: [
        {
          text: "I cannot.",
          nextLevel: "inn",
        },
        {
          text: "I can take him.",
          nextLevel: "soldierFight",
        },
      ],
    },

    soldierFight: {
      message:
        "It turns out that this fight is a bit overwhelming. What do you do?",
      music:
        "the xenoblade chronicles 2 battle theme but you won't forget it.mp3",
      background_image: "soldier.jpg",
      choices: [
        {
          text: "Keep fighting",
          nextLevel: "dontForget",
        },
        {
          text: "Run away!",
          nextLevel: "soldierWin",
        },
      ],
    },

    dontForget: {
      message: "You couldn't take him. Game over.",
      music: "Defeat.mp3",
      background_image: "dontforget.jpg",
      choices: [
        {
          text: "I won't forget him.",
          nextLevel: "start",
        },
      ],
    },

    soldierWin: {
      message: "You're safe! Now you can keep going!",
      music: "Omens of Life.mp3",
      background_image: "gormott-screen-3.jpg",
      choices: [
        {
          text: "Onwards!",
          nextLevel: "xc2ending",
        },
      ],
    },

    inn: {
      message:
        "Do you want to chill at an inn? It's almost nighttime, and you're starting to feel tired.",
      music: "Torigoth Night.mp3",
      background_image: "gormott-screen-3.jpg",
      choices: [
        {
          text: "Nah. I think I'm good to go.",
          nextLevel: "tired",
        },
        {
          text: "Sure. Why not?",
          nextLevel: "sleep",
        },
      ],
    },

    tired: {
      message:
        "Uhh, I don't think you were actually good to go. You passed out back there.",
      music: "Defeat.mp3",
      background_image: "gormott.jpg",
      choices: [
        {
          text: "Adventuring isn't for me.",
          nextLevel: "start",
        },
      ],
    },

    sleep: {
      message: "You shleep.",
      music: "White All Around Us.mp3",
      background_image: "alrest.jpg",
      choices: [
        {
          text: "Rise and shine.",
          nextLevel: "wakeyWakey",
        },
      ],
    },

    wakeyWakey: {
      message: "It's morning. You can keep going now.",
      music: "Mor Ardain.mp3",
      background_image: "gormott-screen-2.jpg",
      choices: [
        {
          text: "To Elysium!",
          nextLevel: "xc2ending",
        },
      ],
    },

    xc2ending: {
      message:
        "You've won (not really but this game isn't over and it's kinda long so for the sake of time I'm saying you won)! Do you make it to Elysium? I'm not telling.",
      music: "Still, Move Forward!.mp3",
      background_image: "XC2-World-Tree.jpg",
      choices: [
        {
          text: "👌",
          nextLevel: "start",
        },
      ],
    },
  },
};
