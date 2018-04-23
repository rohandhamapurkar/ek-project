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
        if(User[message.user].hasOwnProperty('sessionId')){
            User[message.user] = {}
            User[message.user].sessionId = resp.result.sessionId;
        }
        User[message.user].sessionId = resp.result.sessionId;
        console.log(resp.result.action);
        //bot.reply(message, resp.result.fulfillment.speech);
    })
    apiai.action('smalltalk.greetings.hello', function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech,function(err){
            bot.reply(message,string.testQuickreplyMenu);
        });  
    })
}
