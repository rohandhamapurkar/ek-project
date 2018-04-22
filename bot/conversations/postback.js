module.exports = function (controller, bot, apiai) {
    controller.on('facebook_postback', function (bot, message) {
        apiai.process(message, bot);
    })
}