const string = require('../strings')
module.exports = function (controller, bot, apiai,User) {
    controller.hears('.*','message_received',function(bot,message){
        console.log(message);
        if (message.type !== 'facebook_postback') {
            if(message.quick_reply != undefined){
                message.text = message.quick_reply.payload;
                apiai.process(message, bot);
            } else {
                apiai.process(message, bot);
            }
        }
    });
    apiai.all(function (message, resp, bot) {
        if(!User.hasOwnProperty(message.user)){
            User[message.user] = {}
            User[message.user]["sessionId"] = resp.result.sessionId;
        }
        User[message.user].sessionId = resp.result.sessionId;
        console.log(resp.result);
    })
    apiai.action('smalltalk.greetings.hello', function (message, resp, bot) {
        User[message.user] = {};
        User[message.user]["sessionId"] = resp.result.sessionId;
        bot.getMessageUser(message,function(err,profile){
            bot.reply(message,"Hey "+profile.first_name+" EmoBOT here!",function(err){
                console.log(err)
                bot.reply(message,"So glad you reached out.",function(err){
                    console.log(err)
                    bot.startConversation(message, function (err, convo) {
                        convo.ask("Lets get started by entering your token.", function (response, convo) {
                            console.log(Number.isInteger(response.text));
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
                                convo.stop();
                                bot.reply(message,"Invalid token, type hi or press 'start over'");
                            }
                        })
                    })
                })
            });
            
        })
        
            
    })
}
