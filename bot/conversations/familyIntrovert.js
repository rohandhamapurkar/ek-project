
module.exports = function(controller,bot,apiai){
    apiai.action('family_1',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('closest_family',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('closest_family_none',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('regular_yes',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('regular_no',function (message, resp, bot) {
        message.text = "family_reasons"
        apiai.process(message,bot);
    }).action('time_days',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('time_months',function (message, resp, bot) {
        message.text = "family_reasons"
        apiai.process(message,bot);
    }).action('talk_feel',function (message, resp, bot) {
        message.text = "share_something"
        apiai.process(message,bot);
    }).action('family_reasons',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('share_something',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('reason_time',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('reason_others',function (message, resp, bot) {
        message.text = "share_something"
        apiai.process(message,bot);
    }).action('share_yes',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('share_no',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    })
}