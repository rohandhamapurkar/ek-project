var bot = require('./init-user').bot;
var controller = require('./init-user').controller;
const apiaibotkit = require('api-ai-botkit');
const string = require('./strings');
const axios = require('axios');
const apiai = apiaibotkit("216dd6479acc4c63a223fc33b034eefb");
let a = false;
controller.hears('.*','message_received',function(bot,message){
    if (message.type === 'message_received') {
        if(message.quick_reply != undefined){
            message.text = message.quick_reply.payload;
            apiai.process(message, bot);
        } else {
            apiai.process(message, bot);
        }
    }
});
apiai.all(function (message, resp, bot) {
    console.log(resp.result.action);
    bot.reply(message,string.testQuickreply);
    if(!a){
        message.text = "family_introvert";
        apiai.process(message,bot);
        a = true;
    }
    //bot.reply(message, resp.result.fulfillment.speech);
})
require("./conversations/familyIntrovert")(controller,bot,apiai);
require("./conversations/postback")(controller,bot,apiai);

