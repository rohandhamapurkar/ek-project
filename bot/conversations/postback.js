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
            bot.reply(message,string.testQuickreplyMenu);
        } else if(payload.text === string.start_over){
            if(User.hasOwnProperty(message.user)){
                axios.delete("https://api.dialogflow.com/v1/contexts?sessionId=" + User[message.user], {
                    headers: {
                        authorization: 'Bearer '+env.clientAccessToken
                    }
                    }).then(function (response) {
                    console.log("Deleted session");
                    })
                    .catch(function (error) {
                    console.error("NLP session delete error 1 getVendorDetails", error);
                    });
            }
            bot.reply(message,"Started Over!");
            bot.reply(message,string.testQuickreplyMenu);
        }
    })
}