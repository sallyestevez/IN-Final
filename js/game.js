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
      message: "",
      music: "Deduction.mp3",
      background_image: "Yasogami.jpg",
      choices: [
        {
          text: "Not at all",
          nextLevel: "yukikoDied",
        },

        {
          text: "Definitely. Yukiko must be inside the TV.",
          nextLevel: "saveYukiko",
        },
      ],
    },

    yukikoDied: {
      message:
        "So, the Midnight Channel does have something to do with the murders. People are thrown into the TV, where they are then killed. That's what happened to Yukiko. You could've saved her.",
      music: "Reverie.mp3",
      background_image: "P4Background2.jpg",
      choices: [
        {
          text: "Game over for me",
          nextLevel: "start",
        },
      ],
    },

    saveYukiko: {
      message:
        "You guys decide to save Yukiko! With your newfound Persona powers, this will be a piece of cake!",
      music: "Backside Of The TV.mp3",
      background_image: "Midnight.jpg",
      choices: [
        {
          text: "But Chie doesn't have a Persona",
          nextLevel: "chieShadow",
        },
      ],
    },

    chieShadow: {
      message:
        "Uh oh! Chie's shadow self appeared! It's a part of Chie that she doesn't want to accept (so you need to fight it before it runs amok). Deep down, Chie is jealous of Yukiko.",
      music: "Borderline of Madness.mp3",
      background_image: "ChieShadow.PNG",
      choices: [
        {
          text: "'You're not me!' ~ Chie",
          nextLevel: "chieShadowFight",
        },
      ],
    },

    chieShadowFight: {
      message:
        "This is a group effort. You and Yosuke need to fight this thing together. Since, you know, you two are the only ones with Personas. And Chie really needs your help.",
      music: "I'll Face Myself -Battle-.mp3",
      background_image: "YukikoCastle.jpg",
      choices: [
        {
          text: "YEAH!",
          nextLevel: "fightSuccess",
        },

        {
          text: "We're not fighting this",
          nextLevel: "fightFailure",
        },
      ],
    },

    fightSuccess: {
      message:
        "You defeated Chie's Shadow, and she managed to accept it. Okay, yeah, maybe she is a bit jealous of Yukiko. Who wouldn't be? Oh, and Chie also got a Persona!",
      music: "I'll Face Myself.mp3",
      background_image: "ChieAccepts.jpg",
      choices: [
        {
          text: "Now we can actually save Yukiko!",
          nextLevel: "p4end",
        },
      ],
    },

    p4end: {
      message:
        "I'm going to end things here. You guys end up saving Yukiko, she gets a Persona, and you meet new people who also get Personas. This group of Persona users is known as the Investigation Team (although you guys can't tell anyone you use Personas). You solve the mystery of the Midnight Channel, and it turns out the killer was someone you knew. After that, all is good in the small town you and your friends live in.",
      music: "Electronica In Velvet Room.mp3",
      background_image: "P4Background1.jpg",
      choices: [
        {
          text: "That was fun",
          nextLevel: "start",
        },
      ],
    },

    fightFailure: {
      message: "And you LOST",
      music: "Reverie.mp3",
      background_image: "P4Background1.jpg",
      choices: [
        {
          text: "Game over",
          nextLevel: "start",
        },
      ],
    },

    xc2Start: {
      message:
        "It turns out that the green thing is actually a sword girl named Pyra, and she brings you back from the dead on one condition: you need to take her to Elysium (a.k.a. a place that may or may not exist). What do you do?",
      music: "Where We Used To Be.mp3",
      background_image: "uraya-screen-2.jpg",
      choices: [
        {
          text: "Sure, I'll take Pyra to Elysium.",
          nextLevel: "elysium",
        },

        {
          text: "Going to Elysium isn't worth it. Bye.",
          nextLevel: "start",
        },
      ],
    },

    elysium: {
      message:
        "Getting to Elysium is no easy task. There's a lot that needs to be done. I guess you could say it's going to be a bizarre adventure.",
      music: "Exploration.mp3",
      background_image: "uraya-screen-2.jpg",
      choices: [
        {
          text: "Darn. Okay. :(",
          nextLevel: "gormott",
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
