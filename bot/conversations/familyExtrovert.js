const string = require('../strings')
module.exports = function(controller,bot,apiai){
    apiai.action('family_extrovert',function (message, resp, bot) {
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
    }).action('family_extrovert_closest',function (message, resp, bot) {
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
    }).action('family_extrovert_tell_something',function (message, resp, bot) {
        bot.startConversation(message, function (err, convo) {
            convo.ask(resp.result.fulfillment.speech, function (response, convo) {
                console.log("&^&&^&^&^&^&^&^&^&^&^&"+response)
                let testText = response.text;
                response.text = 'family_extrovert_last_time';
                console.log(response);
                apiai.process(response,bot);
            });
        });
    }).action('family_extrovert_last_time',function (message, resp, bot) {
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
    }).action('family_extrovert_last_time_days',function (message, resp, bot) {
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
    }).action('family_extrovert_last_time_months',function (message, resp, bot) {
        message.text = "family_reasons"
        apiai.process(message,bot);    
    }).action('family_extrovert_talk_feel',function (message, resp, bot) {
        message.text = "share_something"
        apiai.process(message,bot);
    })
}