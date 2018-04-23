const string = require('../strings')
module.exports = function(controller,bot,apiai,User){
    apiai.action('studies_flow',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"School",
            "payload":"School"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"High School",
            "payload":"high school"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"College",
            "payload":"College"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Graduation College",
            "payload":"Graduation College"
        })
        bot.reply(message,template);
    }).action('where_study',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Excellent",
            "payload":"Excellent"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Good",
            "payload":"Good"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Satisfactory",
            "payload":"Satisfactory"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Unsatisfactory",
            "payload":"Unsatisfactory"
        })
        bot.reply(message,template);
    }).action('feel_study',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Yes",
            "payload":"yes"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"No",
            "payload":"No"
        })
        bot.reply(message,template);
    }).action('feel_study_2',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Yes",
            "payload":"yes"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"No",
            "payload":"No"
        })
        bot.reply(message,template);
    }).action('bother_yes',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Yes",
            "payload":"yes"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"No",
            "payload":"No"
        })
        bot.reply(message,template);
    }).action('bother_no',function (message, resp, bot) {
        message.text = "studies_jump"
        apiai.process(message,bot);    
    }).action('progress_yes',function (message, resp, bot) {
        message.text = "studies_jump"
        apiai.process(message,bot);    
    }).action('progress_no',function (message, resp, bot) {
        //watson    
    }).action('studies_jump',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Bullying",
            "payload":"Bullying"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Stress",
            "payload":"Stress"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Loneliness",
            "payload":"Loneliness"
        })
        
        bot.reply(message,template);
    }).action('anything_else',function (message, resp, bot) {
        let template = Object.assign({},string.testQuickreply);
        template.quick_replies = [];
        template.text = "";
        template.text = resp.result.fulfillment.speech;
        template.quick_replies.push({
            "content_type":"text",
            "title":"Yes",
            "payload":"Yes"
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"No",
            "payload":"No"
        })
        bot.reply(message,template);
    }).action('talk_yes',function (message, resp, bot) {
        //watson
    }).action('talk_no',function (message, resp, bot) {
       //watson
    })
}