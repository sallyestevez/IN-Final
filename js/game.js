// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
  music: "Deduction.mp3",
  levels: {
    start: {
      music: "Deduction.mp3",
      message:
        "You recently started a new retail job at Walmart! You find out that you've been scheduled to work on Black Friday... Not only is it your first Black Friday at Walmart, it's also your first time working on Black Friday ever! Do you think you'll survive the day, or do you chicken out?",
      background_image: "Background1.jpg",
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
      music: "Period.mp3",
      background_image: "Background2.jpg",
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
      music: "Deduction.mp3",
      background_image: "Background3.jpg",
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
      music: "I'll Face Myself.mp3",
      background_image: "Background1.jpg",
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
      music: "specialist (Reincarnation).mp3",
      background_image: "Background2.jpg",
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
      music: "I'll Face Myself.mp3",
      background_image: "Background3.jpg",
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
      music: "Alone.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Go to sleep early! I have to wake up early!",
          nextLevel: "sleepEarly",
        },

        {
          text: "Stay up late. I want to spend time with my family!",
          nextLevel: "sleepLate",
        },
      ],
    },

    sleepEarly: {
      message:
        "Your alarm goes off at 4 am. Thankfully, you feel great because you went to bed early! You get ready since you have to be at work by 5 am.",
      music: "Alone.mp3",
      background_image: "Background2.jpg",
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
      music: "Who's There.mp3",
      background_image: "Background3.jpg",
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
      music: "Reverie.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Back to start!",
          nextLevel: "start",
        },
      ],
    },

    goToWalmart: {
      message:
        "You make it to Walmart, and there's already a crowd of people waiting outside! Some people are yelling at you to open the store, even though it's supposed to open at 6. Do you do it?",
      music: "Theme of Junes.mp3",
      background_image: "Background2.jpg",
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
      music: "Theme of Junes.mp3",
      background_image: "Background3.jpg",
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
      music: "Theme of Junes.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "OK, time to enter the store and get ready.",
          nextLevel: "insideStore",
        },
      ],
    },

    insideStore: {
      message:
        "You and your coworkers spend time organizing the store before opening (as if it's not going to be unrecognizable in a few hours). Finally, it's time to open! Brace yourself for what's to come.",
      music: "Theme of Junes.mp3",
      background_image: "Background2.jpg",
      choices: [
        {
          text: "Oh no.",
          nextLevel: "openingTime",
        },
        {
          text: "Happy Hunger Games, and may the odds be ever in your favor!",
          nextLevel: "openingTime",
        },
      ],
    },

    openingTime: {
      message:
        "People come rushing in right away. However, since the crowd is too large, not everyone can enter the store at the same time. A lady who was unable to enter the store tells you that the lines are too long. She wants to know if you can make them shorter.",
      music: "I'll Face Myself.mp3",
      background_image: "Background3.jpg",
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
      background_image: "Background1.jpg",
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
      music: "specialist (Reincarnation).mp3",
      background_image: "Background2.jpg",
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
      music: "Alone.mp3",
      background_image: "Background3.jpg",
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
      music: "Theme of Junes.mp3",
      background_image: "Background1.jpg",
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
      music: "Alone.mp3",
      background_image: "Background2.jpg",
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
      music: "Theme of Junes.mp3",
      background_image: "Background3.jpg",
      choices: [
        {
          text: "Electronics section!",
          nextLevel: "electronics",
        },
        {
          text: "Home goods section!",
          nextLevel: "homeGoods",
        },
      ],
    },

    electronics: {
      message:
        "Ah yes, the electronics section. Home to Xbox bundles and $200 4K TVs. Now what?",
      music: "Theme of Junes.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Help out with the TVs!",
          nextLevel: "tvs",
        },
        {
          text: "Help out with the Xbox bundles!",
          nextLevel: "xbox",
        },
      ],
    },

    tvs: {
      message:
        "Over at the TV section, you see two people fighting over a TV. Do you intervene?",
      music: "I'll Face Myself.mp3",
      background_image: "Background2.jpg",
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
      music: "Who's There.mp3",
      background_image: "Background3.jpg",
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
      music: "Reverie.mp3",
      background_image: "Background1.jpg",
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
      music: "Theme of Junes.mp3",
      background_image: "Background2.jpg",
      choices: [
        {
          text: "Go over to the Xboxes.",
          nextLevel: "xbox",
        },
      ],
    },

    xbox: {
      message:
        "You are now at the Xbox area, where they have a few Xbox + Halo Infinite bundles for $350! And by 'few' I mean 10. There are about 100 people waiting in line. What do you do?",
      music: "Deduction.mp3",
      background_image: "Background3.jpg",
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
      music: "specialist (Reincarnation).mp3",
      background_image: "Background1.jpg",
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
      music: "Deduction.mp3",
      background_image: "Background2.jpg",
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
      music: "Electronica In Velvet Room.mp3",
      background_image: "Background3.jpg",
      choices: [
        {
          text: "Stay in the electronics section.",
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
      music: "Who's There.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Start crying :(",
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
      music: "Who's There.mp3",
      background_image: "Background2.jpg",
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
      music: "Alone.mp3",
      background_image: "Background3.jpg",
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
      music: "Alone.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Back to start :(",
          nextLevel: "start",
        },
      ],
    },

    stayHere: {
      message:
        "Things are starting to slow down and the store isn't as chaotic anymore. You spend the next few hours helping customers, and before you know it, your shift is over! Congratulations! You survived Walmart Black Friday!",
      music: "Period.mp3",
      background_image: "Background2.jpg",
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
      background_image: "Background3.jpg",
      choices: [
        {
          text: "Yay!",
          nextLevel: "start",
        },
      ],
    },

    homeGoods: {
      message:
        "You made your way over to the home goods section. What do you feel like doing?",
      music: "Theme of Junes.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Organizing shelves!",
          nextLevel: "organizing",
        },
        {
          text: "Helping customers out!",
          nextLevel: "helpCustomers",
        },
      ],
    },

    organizing: {
      message:
        "Organizing shelves seems like the easiest thing to do as a first-time Black Friday employee. You're stuck organizing shelves for 8 hours, but at least customers don't bother you! 8 hours later, your shift is done and you can go home! Congratulations! You survived Walmart Black Friday!",
      music: "Period.mp3",
      background_image: "Background2.jpg",
      choices: [
        {
          text: "Yay!",
          nextLevel: "start",
        },
      ],
    },

    helpCustomers: {
      message: "You've decided to help customers. Who approaches you first?",
      music: "Theme of Junes.mp3",
      background_image: "Background3.jpg",
      choices: [
        {
          text: "Older lady holding a basket.",
          nextLevel: "olderLady",
        },
        {
          text: "Person with something in their hands.",
          nextLevel: "returns",
        },
        {
          text: "Middle-aged lady holding her cellphone.",
          nextLevel: "bestBuy",
        },
      ],
    },

    olderLady: {
      message: `The older lady with the basket approaches you and then brings you over to a display. All she has to say about this is "I don't understand this." She doesn't want to elaborate. What do you tell her?`,
      music: "Theme of Junes.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: `"Can you please give me more information? I might be able to help you then."`,
          nextLevel: "throwBasket",
        },
        {
          text: "Make up an explanation. She can figure it out herself.",
          nextLevel: "acceptExplanation",
        },
      ],
    },

    throwBasket: {
      message:
        "She doesn't like this explanation, apparently. She throws her basket at you. How do you react?",
      music: "I'll Face Myself.mp3",
      background_image: "Background2.jpg",
      choices: [
        {
          text: "Fight her!",
          nextLevel: "ladyFight",
        },
        {
          text: "Walk away!",
          nextLevel: "ladyWalkAway",
        },
      ],
    },

    ladyFight: {
      message:
        "You decide to fight her. Why did you? Security has to break you two apart, and you also get arrested. You did not survive Walmart Black Friday.",
      music: "Who's There.mp3",
      background_image: "Background3.jpg",
      choices: [
        {
          text: "Back to start :/",
          nextLevel: "start",
        },
      ],
    },

    ladyWalkAway: {
      message:
        "You walk away while laughing to yourself. This was the right choice, because the lady stormed out of the store! What do you feel like doing now?",
      music: "Theme of Junes.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Helping coworkers.",
          nextLevel: "helpCoworkers",
        },
        {
          text: "Organizing shelves.",
          nextLevel: "organizing",
        },
      ],
    },

    acceptExplanation: {
      message:
        "The lady accepts your explanation and leaves you alone! What do you feel like doing now?",
      music: "Theme of Junes.mp3",
      background_image: "Background2.jpg",
      choices: [
        {
          text: "Helping coworkers.",
          nextLevel: "helpCoworkers",
        },
        {
          text: "Organizing shelves.",
          nextLevel: "organizing",
        },
      ],
    },

    returns: {
      message:
        "Someone walks up to you holding a knife set. They said they're here to make a return (on Black Friday???). Now what?",
      music: "Theme of Junes.mp3",
      background_image: "Background3.jpg",
      choices: [
        {
          text: "Tell them to go home.",
          nextLevel: "returnsGoHome",
        },
        {
          text: "Point them in the direction of Returns & Exchanges.",
          nextLevel: "returnsExchanges",
        },
      ],
    },

    returnsGoHome: {
      message:
        "You tell them to go home and then walk away. You try to be productive the rest of your shift.",
      music: "Alone.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "I've been working for HOURS!",
          nextLevel: "notMyProblem",
        },
      ],
    },

    returnsExchanges: {
      message:
        "You point them in the direction of Returns & Exchanges. They thank you and quickly walk away. What do you do now?",
      music: "specialist (Reincarnation).mp3",
      background_image: "Background2.jpg",
      choices: [
        {
          text: "Organize shelves.",
          nextLevel: "organizing",
        },
        {
          text: "Help my coworkers.",
          nextLevel: "helpCoworkers",
        },
      ],
    },

    bestBuy: {
      message:
        "The lady that comes up with you shows you her phone and asks you if Walmart can price match a microwave with Best Buy. You can't price match. What do you tell her?",
      music: "Theme of Junes.mp3",
      background_image: "Background3.jpg",
      choices: [
        {
          text: `"Sorry, but we can't do that."`,
          nextLevel: "priceMatchNo",
        },
        {
          text: `"Yeah, we can price match."`,
          nextLevel: "priceMatchYes",
        },
      ],
    },

    priceMatchNo: {
      message:
        "The lady gets upset and calls 911 on you. The police arrive, and since there's no true emergency, they arrest her for misusing the emergency service. With that done, you're free to do your job. Congratulations! You've survived Walmart Black Friday!",
      music: "Period.mp3",
      background_image: "Background1.jpg",
      choices: [
        {
          text: "Yay!",
          nextLevel: "start",
        },
      ],
    },

    priceMatchYes: {
      message:
        "Yes, you lied to the customer. But she won't realize you did until she's paying for the microwave.",
      music: "Electronica In Velvet Room.mp3",
      background_image: "Background2.jpg",
      choices: [
        {
          text: "I'm such a great liar!",
          nextLevel: "notMyProblem",
        },
      ],
    },
  },
};
