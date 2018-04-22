module.exports = function (controller, bot, apiai) {
    controller.on('facebook_postback', function (bot, message) {
        message.text = message.quick_reply.payload;
        console.error(message);
        apiai.process(message, bot);
    })
}