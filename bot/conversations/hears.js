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
        //bot.reply(message, resp.result.fulfillment.speech);
    })
    apiai.action('smalltalk.greetings.hello', function (message, resp, bot) {
        if(!User.hasOwnProperty(message.user)){
            User[message.user] = {}
            User[message.user]["sessionId"] = resp.result.sessionId;
        }
        bot.reply(message,resp.result.fulfillment.speech,function(err){
            bot.startConversation(message, function (err, convo) {
                convo.ask("Please enter your token.", function (response, convo) {
                    if(Number(response.text) != NaN){
                        let a = Number(response.text);
                        convo.stop();
                        if(a<=500){
                            User[message.user].type = 'introvert';
                            bot.reply(message,string.introvertQuickreplyMenu);
                        } else {
                            User[message.user].type = 'extrovert';
                            bot.reply(message,string.extrovertQuickreplyMenu);
                        }
                    } else {
                        convo.repeat();
                    }
                })
            })
        });
    })
}
