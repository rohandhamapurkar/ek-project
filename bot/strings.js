module.exports = {
    getStartedSetup: '{"text":"GET_STARTED"}',
    testQuickreply : {
        "text": "Here is a quick reply!",
        "quick_replies":[
        {
            "content_type":"text",
            "title":"Search",
            "payload":"<POSTBACK_PAYLOAD>",
            "image_url":"http://example.com/img/red.png"
        },
        {
            "content_type":"location"
        }
        ]
    },
    persistentMenu: [
        { //persistent menu
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [
                {
                    "title": "Chat Options",
                    "type": "nested",
                    "call_to_actions": [
                        {
                            "title": "Start Over",
                            "type": "postback",
                            "payload": '{"text":"start_over"}'
                        }
                        // ,
                        // {
                        //     "type":"web_url",
                        //     "title":"Test Webview",
                        //     "url":"https://orderstack.xyz/welcome/",
                        //     "webview_height_ratio":"full"
                        // }
                    ]
                },
              {
               "title": "Profile Options",
                    "type": "nested",
                    "call_to_actions": [
                        {
                            "title": 'Change Address',
                            "type": "postback",
                            "payload": '{"text":"change_address_persistance"}'
                        },
                        {
                            "title": 'Show Address',
                            "type": "postback",
                            "payload": '{"text":"show_address"}'
                        }
                    ]
                }
            ]
        },
        {
            "locale": "zh_CN",
            "composer_input_disabled": false
        }
    ]
}