const string = require('../strings')
module.exports = function(controller,bot,apiai){
    apiai.action('family_introvert',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
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
    }).action('family_1',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
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
    }).action('closest_family',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Yes",
            "payload":"Yes",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"No",
            "payload":"No",
        })
        bot.reply(message,template);
    }).action('closest_family_none',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('regular_yes',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Somedays Ago",
            "payload":"Somedays Ago",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Months ago",
            "payload":"Months ago",
        })
        bot.reply(message,template);
    }).action('regular_no',function (message, resp, bot) {
        message.text = "family_reasons"
        apiai.process(message,bot);
    }).action('time_days',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Relieved",
            "payload":"Relieved",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Rejected",
            "payload":"Rejected",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Content",
            "payload":"Content",
        })
        bot.reply(message,template);
    }).action('time_months',function (message, resp, bot) {
        message.text = "family_reasons"
        apiai.process(message,bot);
    }).action('talk_feel',function (message, resp, bot) {
        message.text = "share_something"
        apiai.process(message,bot);
    }).action('family_reasons',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Time",
            "payload":"Time",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"You didnt feel like talking",
            "payload":"notTalk",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Something Went Wrong",
            "payload":"wrong",
        })
        bot.reply(message,template);
    }).action('share_something',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Yes",
            "payload":"share_yes",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"No",
            "payload":"share_no",
        })
        bot.reply(message,template);
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