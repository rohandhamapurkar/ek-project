const string = require('../strings');
module.exports = function (controller, bot, apiai) {
    controller.on('facebook_postback', function (bot, message) {
        var payload = {};
        try {
          payload = JSON.parse(message.payload);
        }
        catch (err) {
          payload.text = "undefined payload";
        }
        if (payload.text === string.getStarted) {
            bot.reply(message,string.testQuickreplyMenu);
        }
    })
}