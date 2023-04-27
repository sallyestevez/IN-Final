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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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

    openingTime: {
      message:
        "Right away people come rushing in. However, since the crowd is too large, not everyone can enter the store at the same time. A lady who was unable to enter the store tells you that the lines are too long. Can you make them shorter?",
      music: "Borderline of Madness.mp3",
      background_image: "",
      choices: [
        {
          text: `"No, I can't make lines shorter. The lines are there for a reason!"`,
          nextLevel: "lineLady1",
        },
        {
          text: "Ignore her and walk away. I'm not dealing with this nonsense.",
          nextLevel: "section",
        },
      ],
    },

    lineLady1: {
      message:
        "Well, responding to her was a mistake! She now wants to go to the front of the line. When you tell her no, she asks to speak to the manager.",
      music: "I'll Face Myself -Battle-.mp3",
      background_image: "",
      choices: [
        {
          text: "Lie and say that you're the manager.",
          nextLevel: "managerLie",
        },

        {
          text: `"Ma'am, there are hundreds of people in this store. I cannot get the manager."`,
          nextLevel: "managerTruth",
        },
      ],
    },

    managerLie: {
      message:
        "You're able to convince her that you're the manager, and that she should wait her turn.",
      music: "I'll Face Myself.mp3",
      background_image: "",
      choices: [
        {
          text: "Problem solved!",
          nextLevel: "section",
        },
      ],
    },

    managerTruth: {
      message:
        "The lady gets mad when you tell her this and throws a tantrum. She sits on the floor and it doesn't look like she'll get up anytime soon. You really don't want to deal with this right now.",
      music: "Electronica In Velvet Room.mp3",
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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
      background_image: "",
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

    electronics: {
      message:
        "Ah yes, the electronics section. Home to Xbox bundles and $200 4K TVs.",
      music: "Gormott.mp3",
      background_image: "",
      choices: [
        {
          text: "Help out with the TVs",
          nextLevel: "tvs",
        },
        {
          text: "Help out with the Xbox bundles",
          nextLevel: "xbox",
        },
      ],
    },

    tvs: {
      message:
        "Over at the TV section, you see two people fighting over a TV. Do you intervene?",
      music: "Those Who Stand Against Our Path.mp3",
      background_image: "",
      choices: [
        {
          text: "Try to stop them from fighting. There is no fighting in this store!",
          nextLevel: "fightLoss",
        },
        {
          text: "Call security. I'm not trained to stop conflict.",
          nextLevel: "tvSecurity",
        },
        {
          text: "Go over to the Xboxes.",
          nextLevel: "xbox",
        },
      ],
    },

    fightLoss: {
      message:
        "You try to break up the fight, but uh oh! One of the guys fighting punches you in the face and breaks your nose!",
      music: "Kirby Dance.mp3",
      background_image: "",
      choices: [
        {
          text: "Ow, my nose :(",
          nextLevel: "hospital",
        },
      ],
    },

    hospital: {
      message:
        "Unfortunately, you now have to go to the hospital. An ambulance comes to pick you up. You were not able to survive Walmart Black Friday.",
      music: "Defeat.mp3",
      background_image: "",
      choices: [
        {
          text: "Back to start :(",
          nextLevel: "start",
        },
      ],
    },

    tvSecurity: {
      message:
        "You call security, who comes in to stop the fight. Problem solved, I guess. You can move on.",
      music: "Torigoth Day.mp3",
      background_image: "",
      choices: [
        {
          text: "Go over to the Xboxes",
          nextLevel: "xbox",
        },
      ],
    },

    xbox: {
      message:
        "You are now at the Xbox area, where they have a few Xbox + Halo Infinite bundles for $350! And by 'few' I mean 10. There are about 100 people waiting in line. What do you do?",
      music: "Monster Surprised You.mp3",
      background_image: "",
      choices: [
        {
          text: "Give them out first come, first serve of course!",
          nextLevel: "firstCome",
        },
        {
          text: "Throw the bundles at people. Whoever grabs one wins.",
          nextLevel: "throwXbox",
        },
      ],
    },

    throwXbox: {
      message:
        "The Xbox section is chaos. Everyone is trying to grab 1 of the 10 Xboxes. You could have done something else...",
      music: "Monster Surprised You.mp3",
      background_image: "",
      choices: [
        {
          text: "Ok, that's not my problem.",
          nextLevel: "notMyProblem",
        },
        {
          text: "You're right. I shouldn't have.",
          nextLevel: "helpCoworkers",
        },
      ],
    },

    firstCome: {
      message:
        "You give out all the Xbox bundles, but there are still people waiting in line. Which announcement do you make?",
      music:
        "the xenoblade chronicles 2 battle theme but you won't forget it.mp3",
      background_image: "",
      choices: [
        {
          text: "The Xbox bundles are no longer available!",
          nextLevel: "noLongerAvailable",
        },
        {
          text: "The Xboxes are gone. Leave! Get out of here!",
          nextLevel: "xboxGone",
        },
        {
          text: "It turns out we got an additional Xbox shipment! I'll go get them!",
          nextLevel: "moreXboxes",
        },
      ],
    },

    noLongerAvailable: {
      message:
        "Customers actually listened to you! They're leaving! Now what do you do?",
      music: "Defeat.mp3",
      background_image: "",
      choices: [
        {
          text: "Stay in the electronics section",
          nextLevel: "stayHere",
        },
        {
          text: "Go help my coworkers.",
          nextLevel: "helpCoworkers",
        },
      ],
    },

    xboxGone: {
      message:
        "For some reason customers think you're lying. They demand to go to the backrooms and see for themselves. You try to explain that you can't let them do that, but they start throwing insults at you. What's next?",
      music: "Omens of Life.mp3",
      background_image: "",
      choices: [
        {
          text: "Start crying",
          nextLevel: "cry",
        },
        {
          text: "Ignore them and walk away.",
          nextLevel: "xboxIgnore",
        },
      ],
    },

    moreXboxes: {
      message: `The "additional Xbox shipment" was a lie. "I'll be back" was also a lie. You left and didn't look back. The customers are waiting for their Xboxes! Management finds out about this and you get fired on the spot. You (technically) survived Black Friday, but at what cost?`,
      music: "Omens of Life.mp3",
      background_image: "",
      choices: [
        {
          text: "Darn :(",
          nextLevel: "start",
        },
      ],
    },

    notMyProblem: {
      message:
        "It seems like the store is getting busier and busier. There are too many customers and you can't keep up with them all. How are you feeling?",
      music: "Torigoth Night.mp3",
      background_image: "",
      choices: [
        {
          text: "Better than ever! I can take them!",
          nextLevel: "better",
        },
        {
          text: "I feel AWFUL. I don't have a single 'YIPPEE!' left in me.",
          nextLevel: "awful",
        },
      ],
    },

    cry: {
      message:
        "Customers can be so mean! You can't take it anymore and walk out of the store crying. You did not survive Walmart Black Friday.",
      music: "Defeat.mp3",
      background_image: "",
      choices: [
        {
          text: "Back to start",
          nextLevel: "start",
        },
      ],
    },

    stayHere: {
      message:
        "Things are starting to slow down and the store isn't as chaotic anymore. You spend the next few hours helping customers, and before you know it, your shift is over! Congratulations! You survived Walmart Black Friday!",
      music: "Period.mp3",
      background_image: "",
      choices: [
        {
          text: "Yay!",
          nextLevel: "start",
        },
      ],
    },

    helpCoworkers: {
      message:
        "You go help your coworkers. They look like they really need it. Together, you get a lot of work done, and before you know it, it's time to leave! Congratulations! You've survived Walmart Black Friday!",
      music: "Period.mp3",
      background_image: "",
      choices: [
        {
          text: "Yay!",
          nextLevel: "start",
        },
      ],
    },

    xc2ending: {
      message:
        "You've won (not really but this game isn't over and it's kinda long so for the sake of time I'm saying you won)! Do you make it to Elysium? I'm not telling.",
      music: "Still, Move Forward!.mp3",
      background_image: "",
      choices: [
        {
          text: "👌",
          nextLevel: "start",
        },
      ],
    },
  },
};
