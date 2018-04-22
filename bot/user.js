var bot = require('./init-user').bot;
var controller = require('./init-user').controller;
const apiaibotkit = require('api-ai-botkit');
const apiai = apiaibotkit("216dd6479acc4c63a223fc33b034eefb");

controller.hears('.*','message_received',function(bot,message){
    if (message.type === 'message_received') {
        apiai.process(message, bot);
    }
});
apiai.all(function (message, resp, bot) {
    console.log(message);
    console.log(resp.result.action);
    bot.reply(message, resp.queryResult.fulfillmentText);
})
require("./conversations/familyIntrovert")(controller,bot,apiai);

