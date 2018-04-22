var bot = require('./init-user').bot;
var controller = require('./init-user').controller;
const apiaibotkit = require('api-ai-botkit');
const axios = require('axios');
const apiai = apiaibotkit("216dd6479acc4c63a223fc33b034eefb");

controller.hears('.*','message_received',function(bot,message){
    if (message.type === 'message_received') {
        apiai.process(message, bot);
    }
});
apiai.all(function (message, resp, bot) {
    console.log(message);
    console.log(resp);
    bot.reply(message, resp.result.fulfillment.speech);
    axios.get('https://api.dialogflow.com/v1/query?v=20150910&e=family_introvert&timezone=Asia&lang=en&sessionId=1234567890',
    {
        headers:{
            Authorization: "Bearer 216dd6479acc4c63a223fc33b034eefb"
        }}).then(function (response) {
            console.log(response);
            bot.reply(message, response.data.result.fulfillment.speech);
          })
          .catch(function (error) {
            console.log(error);
          });
})
require("./conversations/familyIntrovert")(controller,bot,apiai);

