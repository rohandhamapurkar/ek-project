const string = require('../strings');
const axios = require('axios');
module.exports = function (controller, bot, apiai,User) {
    controller.on('facebook_postback', function (bot, message) {
        var payload = {};
        try {
          payload = JSON.parse(message.postback.payload);
        }
        catch (err) {
          payload.text = "undefined payload";
        }
        if (payload.text === string.getStarted) {
            User[message.user] = {}
            User[message.user]["sessionId"] = resp.result.sessionId;
            bot.startConversation(message, function (err, convo) {
                convo.ask("Please enter your token.", function (response, convo) {
                    if(Number.isInteger(Number(response.text))){
                        let a = Number(response.text);
                        convo.stop();
                        if(a<=500){
                            User[message.user]["array"] = ['family_introvert','studies_flow'];
                            User[message.user].type = 'introvert';
                            User[message.user]['intent'] = [];
                            bot.reply(message,string.introvertQuickreplyMenu);
                        } else {
                            User[message.user]["array"] = ['family_extrovert','studies_flow'];
                            User[message.user].type = 'extrovert';
                            User[message.user]['intent'] = [];
                            bot.reply(message,string.extrovertQuickreplyMenu);
                        }
                    } else {
                        convo.repeat();
                        convo.next();
                    }
                })
            })
        } else if(payload.text === string.start_over){
            if(User.hasOwnProperty(message.user)){
                axios.delete("https://api.dialogflow.com/v2/contexts?sessionId=" + User[message.user]["sessionId"], {
                    headers: {
                        authorization: 'Bearer 216dd6479acc4c63a223fc33b034eefb'
                    }
                    }).then(function (response) {
                    console.log("Deleted session");
                    })
                    .catch(function (error) {
                    console.error("NLP session delete error 1 getVendorDetails", error);
                    });
            }
            User[message.user] = {}
            User[message.user]["sessionId"] = resp.result.sessionId;

            bot.startConversation(message, function (err, convo) {
                convo.ask("Please enter your token.", function (response, convo) {
                    if(Number.isInteger(Number(response.text))){
                        let a = Number(response.text);
                        convo.stop();
                        if(a<=500){
                            User[message.user]["array"] = ['family_introvert','studies_flow'];
                            User[message.user]['intent'] = [];
                            User[message.user].type = 'introvert';
                            bot.reply(message,string.introvertQuickreplyMenu);
                        } else {
                            User[message.user]["array"] = ['family_extrovert','studies_flow'];
                            User[message.user]['intent'] = [];
                            User[message.user].type = 'extrovert';
                            bot.reply(message,string.extrovertQuickreplyMenu);
                        }
                    } else {
                        convo.repeat();
                        convo.next();
                    }
                })
            })

        }
    })
}
