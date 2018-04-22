const string = require('../strings')
module.exports = function(controller,bot,apiai){
    apiai.action('family_introvert',function (message, resp, bot) {
        let template = string.testQuickreply;
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Joint family",
            "payload":"Joint family"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Small family",
            "payload":"Small family"
        })
        bot.reply(message,template);
        template.quick_replies = [];
    }).action('family_1',function (message, resp, bot) {
        let template = string.testQuickreply;
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Parents",
            "payload":"Parents",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Cousins",
            "payload":"Cousins",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Siblings",
            "payload":"Siblings",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Aunt",
            "payload":"Aunt",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Uncle",
            "payload":"Uncle",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"GrandParents",
            "payload":"GrandParents",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"None",
            "payload":"None",
        })
        bot.reply(message,template);
        template.quick_replies = [];
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