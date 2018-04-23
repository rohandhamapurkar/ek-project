module.exports = {
    getStartedSetup: '{"text":"GET_STARTED"}',
    getStarted: 'GET_STARTED',
    start_over: 'start_over',
    testQuickreply : {
        "text": "",
        "quick_replies":[
        ]
    },
    introvertQuickreplyMenu : {
        "text": "Choose one:",
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Family",
                "payload":"family_introvert"
            },
            {
                "content_type":"text",
                "title":"Studies",
                "payload":"studies_flow"
            }

        ]
    },
    extrovertQuickreplyMenu : {
        "text": "Choose one:",
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Family",
                "payload":"family_extrovert"
            },
            {
                "content_type":"text",
                "title":"Studies",
                "payload":"studies_flow"
            }

        ]
    },
    persistentMenu: [
        { //persistent menu
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [
                {
                    "title": "Start Over",
                    "type": "postback",
                    "payload": '{"text":"start_over"}'
                }
            ]
        },
        {
            "locale": "zh_CN",
            "composer_input_disabled": false
        }
    ]
}
