// Jazz Fit Diagnostics

module.exports.totalWellness = {
    Fourth: "(Needs critical improvement) You have a significant need to manage your overall well-being. Changes in actions related to your physical, social, emotional and mental dimensions of well-being are necessary. Continued negligence may lead to stress, anxiety, depression, self-image concerns, physical health problems and relationship issues, with people at home and at work",
    Third: "(Needs improvement) Your wellbeing needs attention; Some dimensions of your life need to be worked on. Without addressing them, you may have to face adverse consequences related to health, stress, anxiety, relationships and self-image. Please read the summary of your results and make use of the recommendations provided.",
    Second: "(Good) You manage your wellbeing well; however, there is room for improving certain dimensions of the well-being. To understand your strengths and areas of improvement, please read the summary of your well-being score and identify the action steps that you can take to address the issues.",
    First: "(Excellent) You manage your wellbeing quite all. You need to sustain your actions and support others to achieve the same. To get details of your wellbeing on different dimensions, explore the results and focus on areas that may need some improvement."
}

module.exports.physicalWellness = {
    Fourth: "You have a significant need to manage your physical wellbeing. A major lifestyle change is needed at this point. Continued negligence may lead to health problems and drop in productivity at work. To view details of your results, tap/click on the bar chart. Note: Detailed recommendations will be given (covered in the next segment)",
    Third: "You are not managing your physical wellbeing; certain aspects of your life need to be addressed soon or your energy will further drop which will likely lead to adverse consequences for your health and social life. To view methods to improve your physical wellbeing, click/tap on the bar chart. Note: Detailed recommendations will be given (covered in the next segment)",
    Second: "You are good at managing your physical wellbeing; however, there are areas which need your immediate attention. Little changes can lead to a much better and productive lifestyle. To view methods to improve your physical wellbeing, click/tap on the bar chart. Note: Detailed recommendations will be given (covered in the next segment)",
    First: "You are excellent at managing your physical wellbeing. Nonetheless, you may look up methods to specifically address the areas which may need some improvement. Other than that, your focus should be on maintaining the practices you partake in currently. Note: Detailed recommendations will be given (covered in the next segment)"
}

module.exports.emotionalWellness = {
    Fourth: "You have a significant need to manage your emotional wellbeing. A major lifestyle change is needed at this point. Continued negligence may lead to anxiety, self-image concerns, physical health problems and relationship issues, with people at home and at work.",
    Third: "You are not managing your emotional well-being; certain aspects of your life need to be addressed soon or your energy will further drop which will likely lead to adverse consequences for your health and social life. To view methods to improve your emotional wellbeing, click/tap on the bar chart.",
    Second: "You are good at managing your emotional wellbeing; however, there are areas which need your immediate attention. Little changes can lead to a much better and productive lifestyle. To view methods to improve your emotional wellbeing, click/tap on the bar chart.",
    First: "You are excellent at managing your emotional well-being. Nonetheless, you may look up methods to specifically address the areas which may need some improvement. Other than that, your focus should be on maintaining the practices you partake in currently. Note: Detailed recommendations will be given (covered in the next segment)"
}

module.exports.mentalWellness = {
    Fourth: "You have a significant need to manage your mental wellbeing. A major lifestyle change is needed at this point. Continued negligence may lead to anxiety, distractions, lack of focus and burn-out.",
    Third: "You are not managing your mental well-being; certain aspects of your life need to be addressed soon or your energy will further drop which will likely lead to adverse consequences for your health and social life. To view methods to improve your mental well-being, click/tap on the bar chart.",
    Second: "You are good at managing your mental wellbeing; however, there are areas which need your immediate attention. Little changes can lead to a much better and productive lifestyle. To view methods to improve your mental wellbeing, click/tap on the bar chart.",
    First: " You are excellent at managing your mental well-being. Nonetheless, you may look up methods to specifically address the areas which may need some improvement. Other than that, your focus should be on maintaining the practices you partake in currently. Note: Detailed recommendations will be given (covered in the next segment)"
}

module.exports.socialWellness = {
    Fourth: "You have a significant need to manage your social wellbeing. A major lifestyle change is needed at this point. Continued negligence may lead to anxiety, self-image concerns, physical health problems and relationship issues, with people at home and at work.",
    Third: "You are not managing your social well-being; certain aspects of your life need to be addressed soon or your energy will further drop which will likely lead to adverse consequences for your health and social life. To view methods to improve your social wellbeing, click/tap on the bar chart.",
    Second: "You are good at managing your social wellbeing; however, there are areas which need your immediate attention. Little changes can lead to a much better and productive lifestyle. To view methods to improve your social wellbeing, click/tap on the bar chart.",
    First: "You are excellent at managing your social well-being. Nonetheless, you may look up methods to specifically address the areas which may need some improvement. Other than that, your focus should be on maintaining the practices you partake in currently. Note: Detailed recommendations will be given (covered in the next segment)"
}

// Recommendations against each score

module.exports.physicalRecommendations = {
    QuestionOne: {
        questionTitle: "I get 7-8 hours of sleep everyday",
        recommendationTitle: "Sleep is essential for your physical wellbeing. On-going sleep deficiency can add to your stress and anxieties. Here are a few tips that can help you get good sleep.",
        recommendationArr: [
            {
                title: "Avoid Caffeine",
                detail: "Limit yourself to just one cup of caffeinated coffee at breakfast, or drink decaf. Too much caffeine in the morning can stay with you until bedtime. (If you're used to drinking several cups of coffee a day, wean yourself off it gradually over a few weeks.)"
            },
            {
                title: "Reduce irregular daytime naps",
                detail: "Sleeping in the daytime can confuse your internal clock, struggling to sleep at night."
            },
            {
                title: "Lighten up on evening meals",
                detail: "Eating a pizza at 10 p.m. may be a recipe for insomnia. Finish dinner several hours before bedtime and avoid foods that cause indigestion."
            },
            {
                title: "Use light to your advantage",
                detail: "Natural light keeps your internal clock on a healthy sleep-wake cycle. So let in the light first thing in the morning and get out of the office for a sun break during the day."
            }
        ]
    },
    QuestionTwo: {
        questionTitle: "I eat a healthy breakfast everyday",
        recommendationTitle: "Breakfast is arguably the most important meal of the day. Whether your goal is weight loss or simply to be healthy, it is imperative that you make eating breakfast a regular habit. Here are a few tips on getting habitual of having healthy breakfast daily. ",
        recommendationArr: [
            {
                title: "Prep the night before",
                detail: "Not only does prepping lunches the night before make mornings easier, but making breakfast the night before helps tremendously."
            },
            {
                title: "Eating vegetables/fruits",
                detail: "Don’t forget to include at least one serving of fruits and vegetables in your breakfast–otherwise, you will find it hard to get your optimal daily intake."
            },
            {
                title: "Make healthy snacking easier to achieve than unhealthy snacking",
                detail: "Place a container of almonds and a selection of protein bars by your computer, near your line of vision."
            },
            {
                title: "Nutrition Awareness session",
                detail: "Register yourself for a Nutrition Awareness session"
            }
        ]
    },
    QuestionThree: {
        questionTitle: "I exercise at least three days every week",
        recommendationTitle: "Your physical activity needs attention. Keep in mind the following tips:",
        recommendationArr: [
            {
                title: "Exercise boosts energy",
                detail: "Find a convenient time and place to do activities. Try to make it a habit but be flexible. If you miss an exercise opportunity, work activity into your day another way. Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently."
            },
            {
                title: "Exercise combats health conditions and diseases",
                detail: "Choose activities that are fun, not exhausting. Add variety. Develop a repertoire of several activities that you can enjoy. That way, exercise will never seem boring or routine. Exercise boosts high-density lipoprotein (HDL) cholesterol, the 'good' cholesterol, and it decreases unhealthy triglycerides. This keeps your blood flowing smoothly, which decreases your risk of cardiovascular diseases."
            }
        ]
    },
    QuestionFour: {
        questionTitle: "I drink at least 8 glasses of water every day",
        recommendationTitle: "Drinking more water can help with weight loss. The timing is important too, and drinking water half an hour before meals is the most effective. Here are some tips that can help you:",
        recommendationArr: [
            {
                title: "Sip before every meal",
                detail: "If you are making dinner at home, sip while you cook and prep. If you're out at a restaurant, ask for water when the server comes around to take drink orders. If you're waiting for your lunch to heat up or your toast to pop, drink water while doing it. Even if you're putting together a snack, drink that water. It's just a simple rule that will help you drink more water."
            },
            {
                title: "Add flavor",
                detail: "You can add a little bit of excitement and flavor by steeping fresh fruit (grapefruit, strawberries, lemon), veggie slices (cucumber, ginger, celery), and herbs (basil, mint, lavender) in your carafe. The longer you let it steep, the tastier each cup will be. And you can play around with different combos, like cucumber mint or basil lemon."
            },
            {
                title: "Dilute sugary drinks with water and ice",
                detail: "If you're drinking something extra sweet like juice, lemonade, or iced tea, water down your beverage by adding ice or even diluting a cup with some water. You’ll still get the sweetness you’re craving and have some extra water at the same time."
            },
            {
                title: "Keep a gallon jug nearby",
                detail: "It’s easy to remember to fill up on water when the source is nearby. Keep a gallon jug or large carafe at your desk, by the bed at home, and on the kitchen counter as a constant reminder to drink up. The more you have to look at that water jug, the more you'll remember to fill it and drink it."
            }
        ]
    },
    QuestionFive: {
        questionTitle: "I smoke cigarettes/vapes/sheesha",
        recommendationTitle: "When tobacco is smoked, nicotine causes physical and psychological dependency. Tobacco use leads most commonly to diseases affecting the heart, liver and lungs. Smoking is a major risk factor for heart attacks, strokes, chronic obstructive pulmonary diseases. Here are a few tips that can curbing this habit.",
        recommendationArr: [
            {
                title: "Smoking Cessation workshop",
                detail: "Register yourself for a Smoking Cessation workshop"
            },
            {
                title: "Avoid triggers",
                detail: "Urges for tobacco are likely to be strongest in the situations where you smoked or chewed tobacco most often, such as at parties, or while feeling stressed or sipping coffee. Identify your trigger situations and have a plan in place to avoid them entirely or get through them without using tobacco."
            },
            {
                title: "Delay",
                detail: "If you feel like you're going to give in to your tobacco craving, tell yourself that you must first wait 10 more minutes — and then do something to distract yourself for that period of time. Try going to a public, smoke-free zone. These simple tricks may be enough to derail your tobacco craving."
            }
        ]
    }
}


module.exports.emotionalRecommendations = {

    QuestionOne: {
        questionTitle: "I find myself worrying about the future",
        recommendationTitle: "Constantly worrying about the future is the major source of anxiety in people. One of the reasons for this is one’s inability to think in the present.",
        recommendationArr: [
            {
                title: "mindful meditation",
                detail: "Keeping yourself engaged in meaningful activities can prevent this act. Practices such as mindful meditation are also a good way to train one’s mind to not be distracted with thoughts about the uncertain future"
            },
            {
                title: "Enrolling in a Take Control Stress Management Workshop",
                detail: "will allow you to identify your stressors and ways of dealing with them"
            }
        ]
    },

    QuestionTwo: {
        questionTitle: "I mostly enjoy my work",
        recommendationTitle: "One of the major sources of stress is the lack of purpose one sees in his/her job.",
        recommendationArr: [
            {
                title: "Carrying out actions",
                detail: "Carrying out actions daily that don’t have any meaningful impact can become very frustrating. You need to spend an afternoon to think about your career and whether it is allowing you to fully express and exert yourself or not."
            },
            {
                title: "Opting for a Take Control Mind Over Matter workshop",
                detail: "can help give you structure in this respect."
            }
        ]
    },

    QuestionThree: {
        questionTitle: "There is a big gap between what I say and what I do",
        recommendationTitle: "Dissonance between what one believes and what one does is another major source of stress in people. Not doing what we believe in eventually makes one go into self-loathing and eventually makes one weak",
        recommendationArr: [
            {
                title: "first be aware",
                detail: "It is important for you to first be aware of what you believe in and understand your values and then choose a vocation which is in line with those values."
            },
            {
                title: "Control Stress Management",
                detail: "Attend a Take Control Stress Management workshop"
            }
        ]
    },

    Questionfour: {
        questionTitle: "I like taking risks and doing new things",
        recommendationTitle: "Taking a risk to achieve a goal requires courage to face the fear of uncertainty. No matter the outcome, either way, we grow through the process and become more resilient and confident. Risk-taking and being risk-averse are products of the mindset we hold. A fixed mindset, which forces us to put limits on the potential of our abilities discourages us from taking risks, while a growth mindset pushes us to venture into the new and unknown, thereby take risks in order to learn and expand our abilities.",
        recommendationArr: [
            {
                title: "Take Control Mind Over Matter workshop",
                detail: "A Take Control Mind Over Matter workshop can enable you to differentiate between the two mindsets and give you the tools to make the transition from fixed to growth."
            }

        ]
    },

    Questionfive: {
        questionTitle: "I easily lose my temper and become angry",
        recommendationTitle: "Chronic anger can increase your heart-attack and stroke risk. It can also weaken your immune system. The brain shunts blood away from the gut and towards the muscles, in preparation for physical exertion.",
        recommendationArr: [
            {
                title: "Take Control Mind Over Matter workshop",
                detail: "Anger is a result of having little impulse control plus perceiving the surrounding environment as hostile or unjust. In order to make yourself less prone to getting angry you will have to work on both elements; a Take Control Mind Over Matter workshop will enable you to not only understand yourself better but also challenge your perceptions about others around you."
            }

        ]
    }

}

module.exports.socialRecommendations = {
    QuestionOne: {
        questionTitle: "I am aware of the needs and concerns of my coworkers",
        recommendationTitle: "Your relationship with people affects your wellbeing. It’s essential to understand what your coworkers are going through and be empathetic.",
        recommendationArr: [
            {
                title: "Become an active listener",
                detail: "one of the most important steps of developing empathy is actively listening to others, so that you can understand their positions. When you listen, be sure to listen to the entire message that the other person is trying to communicate. Listen with your ears – what is being said, and what tone is being used? Listen with your eyes – what the person is doing with his or her body while speaking? Listen with your instincts – do you sense that the person is not communicating something important? Listen with your heart – what do you think the other person feels?"
            },
            {
                title: "Put aside your judgement",
                detail: "try to see things from the other person's point of view. When you do this, you'll realize that other people most likely aren't being evil, unkind, stubborn, or unreasonable – they're probably just reacting to the situation with the knowledge they have. Avoid judgement as much as you can. Always try to see things from others’ viewpoint before reacting."
            },
            {
                title: "Try switching tasks with peers",
                detail: "Once you understand their job role/work only then you will be able to show empathy. If the situation allows, try experimenting by swapping jobs for a bit."
            },
            {
                title: "Learn various tools of knowing self and others",
                detail: "•	Learn various tools of knowing self and others - by attending workshops on personal mastery, relationship management"
            },
            {
                title: "Social Quotient workshop ",
                detail: "Attend a Take Control Social Quotient workshop"
            }
        ]
    },

    Questiontwo: {
        questionTitle: "I spend enough time with my family",
        recommendationTitle: "One of the biggest sources of stress is inability to balance work and life. Some of the tips to improve your social wellbeing are:",
        recommendationArr: [
            {
                title: "Learn to say no",
                detail: "earn to fight the guilt of not being available to everyone. It’s important to learn assertiveness by refusing tasks that can take extra time and add to your stress levels. Adherence to deadlines is important but taking more work than possible can lead to burn-out."
            },
            {
                title: "Protect your family/private time",
                detail: "set fair and realistic limits on what you will and will not do both at work and at home. Clearly communicate these boundaries to your supervisor, coworkers, partner and family. For instance, you might commit to not working late on certain days unless there is a crisis. Additionally, set aside a time at home during which you will not check or respond to work-related emails or voicemails."
            },
            {
                title: "Stress management workshop ",
                detail: "Attend a Take Control Stress management workshop"
            }

        ]
    },

    Questionthree: {
        questionTitle: "I am quick to show my appreciation for others",
        recommendationTitle: "Null",
        recommendationArr: [
            {
                title: "Praise a job well done.",
                detail: "Identify the specific actions that you found admirable. This praise feels sincere since you took the time to spell out details—not just, 'You did a good job.' You also emphasize the actions that you'd like to see the employee do more often and everybody benefits when people experience clear direction"
            },
            {
                title: "Say thank you",
                detail: "Show your appreciation for others hard work and contributions. Don't forget to say please often as well. Social niceties do belong at work. A more gracious, polite, civilized workplace is appreciated by all."
            },
            {
                title: "Learn your co-workers' interests",
                detail: "Questions and acknowledgments about their family, their hobbies, their weekend or a special event they attended are always welcome. Your genuine interest—as opposed to being nosey—causes people to feel valued and cared about."
            },
            {
                title: "Present a personalized gift",
                detail: "Know your coworker’s interests well enough to present a small gift occasionally. An appreciated gift and the gesture of providing it will light up your coworker’s day. A greeting card serves the same purpose. You can give a card for no reason at all, to celebrate a special day such as a birthday, or to offer sympathy when a coworker is ill or experiences a family death."
            },
            {
                title: "Social Quotient",
                detail: "Attend a Take control Social Quotient"
            }

        ]
    },

    Questiontfour: {
        questionTitle: "I am comfortable sharing my achievements with others",
        recommendationTitle: "Null",
        recommendationArr: [
            {
                title: "Focus on your successes",
                detail: "It’s difficult to boost confidence if you’re bemoaning what you don’t do well. Remind yourself of all the successful projects you’ve done to boost confidence in your abilities at work. Did you meet a tight deadline? Did you manage to turn a difficult project around? Did your boss praise one of your ideas? Recalling successful times at work is a better way to boost confidence instead of constantly focusing on the negatives"
            },
            {
                title: "Trumpet your own success",
                detail: "It's OK to let people know when you get a win, at least in small doses. That's not normally true with friends or spouses in daily life, because it sounds like bragging. Yet, you can build your own confidence by pointing out, in a matter-of-fact way, that you were the one who accomplished something for the company. It makes you more confident because you get into the habit of self-rewards and self-acknowledgement."
            },
            {
                title: "Speak your mind",
                detail: "not recommending you avoid having a filter for what you say at meetings and just chime in with whatever comes to your mind. Yet, a lack of confidence is often a bottleneck that keeps you from saying what you really think. Uncork that confidence blocker. By stating your view in a meeting, you are building confidence because at least you can see the reactions to your viewpoint and adjust as needed"
            },
            {
                title: "A Take control Social Quotient workshop",
                detail: "•	A Take control Social Quotient workshop can enable you to differentiate between the two mindsets and give you the tools to make the transition from fixed to growth."
            },
            {
                title: "Increase your knowledge",
                detail: "It might seem obvious, but you can also build confidence by learning more. Read more books, watch more TED talks, attend more seminars. It's easy to go overboard, and spouting your knowledge too often can be a confidence killer when people who have greater knowledge on the subject start debating with you, but knowing what to do about a complex issue or problem can help you gain confidence. Confidence grows when you act on what you know."
            }

        ]
    },

    Questiontfive: {
        questionTitle: "I find conflicts difficult to resolve",
        recommendationTitle: "Null",
        recommendationArr: [
            {
                title: "Listening carefully",
                detail: "Most conflicts occur when one party refuses to listen other so it is an important skill to develop when it comes to resolve conflicts. Listening carefully also help in calming the heated situation as most people lose their temper when other refuses to listen to them. So, listen carefully when there are conflicts and your half of the problem will be solved then and there, without much effort. Most people choose to argue when conflicts occur due to any reason which complicates the situation and if they listen before they say something then most of the conflicts gets resolved without doing anything. Listening carefully gives you the power to deal and a better understanding of the reason for conflicts"
            },
            {
                title: "Communicate",
                detail: "Communication is an important skill in resolving conflicts effectively. Good communication skill is what you need to make both parties listen to you who have conflicts between them. Communication provides a window to share thoughts and problems as well as the reason why they are having conflicts. It is easy to solve the problem when you know the reason which causes problem to occur in the first place. Communication also helps in communicating with both parties by which you know what they actually need. So, to resolve conflicts, know the importance of communication skills and develop good communication skills to resolve conflicts."
            },
            {
                title: "Choose a solution which can be accepted by both",
                detail: "Choose a solution which can be accepted by both - Resolving conflict is not the easiest task, it needs a lot of time and energy to do so. You need to brainstorm solutions which can be accepted by both the parties, work on finding a solution during the resolution process and discuss it with both parties individually so that you can make the necessary changes according to the situation without causing more problems. The goal of resolving conflicts is to choose the solution which can be accepted by both parties so that resolving process can be fruitful and you get success in resolving the conflict."
            },
            {
                title: "Involve third party mediator",
                detail: "Involve third party mediator - If you are having your doubts for the solution you choose to resolve conflicts then involve third party mediator which can be trusted by both parties as well can give a fair and honest opinion after listening to both parties. The involving mediator also helps in verifying your solutions that you both are agreeing on and you can use it for future reference as well when conflicts occur again."
            },
            {
                title: "Social Quotient workshop",
                detail: "Attend a Take Control Social Quotient workshop"
            }
        ]
    }


}

module.exports.mentalRecommendations = {

    Questionone: {
        questionTitle: "I get distracted easily",
        recommendationTitle: "Lack of focus leads to stress. It’s essential to take a pause and understand what needs to be done.",
        recommendationArr: [
            {
                title: "Meditate",
                detail: "Take 20 minutes from your day to meditate. Meditation allows you to stay attentive for longer periods of time, just like exercise trains your muscles. Your brain will become strong enough to ignore distractions- start by reading on mindfulness and doing some breathing exercises, everyday (links attached)- Attend workshops on mindfulness to understand the process."
            },
            {
                title: "Break work into chunks",
                detail: "Try to focus on a segment of work and treat yourself with a break, good music or a walk around the floor after short durations of concentration. Don’t spend long hours in one position and make sure you break the monotony after every 45 minutes"
            },
            {
                title: "Eliminate visual/physical distractions",
                detail: "As obvious as it sounds, get rid of everything that distracts you. Move to a quieter corner of the room, remove unnecessary visuals from your workstation, try to put your mobile device away when in the middle of a task."
            },
            {
                title: "Stress Management workshop",
                detail: "Attend a Take Control Stress Management workshop"
            }
        ]
    },

    Questiontwo: {
        questionTitle: "I care more about the long term goal than short term wins",
        recommendationTitle: ":Lack of clarity about the long-term goals and big picture can hinder self-improvement and create stress about the future. Continuous improvement is the key here. Here are a few tips:",
        recommendationArr: [
            {
                title: "Make learning a habit",
                detail: "- Enroll yourself in e-learning courses, attend workshops and training sessions on topics that excite you, build connections to learn about different aspects of life and business to develop a futuristic outlook on life."
            },
            {
                title: "Stop accepting the standard",
                detail: "If I had asked people what they wanted, they would have said faster horses”- Henry Ford. It’s easier to accept the status quo, but challenge what’s around you for brilliant results. Try to do a cost-benefit analysis of every decision you take- make it a habit to see the bigger picture instead of focusing on the immediate."
            },
            {
                title: "Mind Over Matter workshop",
                detail: "Attend a Take Control Mind Over Matter workshop"
            }
        ]
    },

    Questionthree: {
        questionTitle: "I come up with creative solutions to problems",
        recommendationTitle: "Creativity is essential for your work at Jazz. To remain number 1, your work needs to speak for itself.",
        recommendationArr: [
            {
                title: "Learn tangible tools of creative thinking",
                detail: "such as design thinking (Read the book Change by Design by Tim Brown). This will give you a perspective into how certain steps of our thinking process feed into each other to solve different issues. Attend workshops on the topic and keep learning about creativity"
            },
            {
                title: "Mind Over Matter workshop",
                detail: "Attend a Take Control Mind Over Matter workshop"
            }
        ]
    },

    Questiontfour: {
        questionTitle: "I take frequent breaks from my work throughout the day to think about other things",
        recommendationTitle: "Null",
        recommendationArr: [
            {
                title: "Create some margin in your life",
                detail: "Margin simply means breathing space. Your schedule should be simple enough that you control it, instead of it controlling you. Take time out for some activities that you enjoy, connect with people on the floor, talk to family. Make sure you don’t swamp yourself with work all the time. This is very significant for renewing your mental energies"
            },
            {
                title: "Stress Management workshop ",
                detail: "Attend a Take Control Stress Management workshop"
            }
        ]
    },

    Questiontfive: {
        questionTitle: "I organize my tasks before starting my work",
        recommendationTitle: "Putting in the effort of getting organized, especially if this organization extends to multiple areas of your life, can help reduce stress levels long term by requiring less last-minute scrambling in a variety of everyday situations",
        recommendationArr: [
            {
                title: "Create a to-do list",
                detail: "Make it a habit to structure your thoughts in a diary, computer or mobile device. This process of translating your thoughts into an ordered to-do list declutters your brain and enables you to focus on all tasks one by one. Try to accomplish one significant task before lunch"
            },
            {
                title: "Practice Mindfulness",
                detail: "It’s very important for thoughts to make sense in the head before they are translated into actions- Take workshops on mindfulness to understand the power of your brain by living in the present. This will allow you to prioritize activities in order of significance"
            },
            {
                title: "Block your calendar beforehand",
                detail: "Even if you think your plans may change, it’s always wise to block your calendar for important/planned events. Once it becomes a habit, your brain will start planning all activities in advance."
            },
            {
                title: "Matter workshop",
                detail: "Attend a Take Control Mind Over Matter workshop"
            }
        ]
    }

}
