const string = require('../strings')
module.exports = function(controller,bot,apiai,User,tone_analyzer){
    apiai.action('family_introvert',function (message, resp, bot) {
        let index = User[message.user]["array"].indexOf('family_introvert');
        if (index > -1) {
            User[message.user]["array"].splice(index, 1);
        }
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
            "title":"Dont feel like it",
            "payload":"You didnt feel like talking",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"Something Went Wrong",
            "payload":"Something Went Wrong with us",
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
            "payload":"Yes",
        })
        template.quick_replies.push({
            "content_type":"text",
            "title":"No",
            "payload":"No",
        })
        bot.reply(message,template);
    }).action('reason_time',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    }).action('reason_others',function (message, resp, bot) {
        message.text = "share_something"
        apiai.process(message,bot);
    }).action('share_yes',function (message, resp, bot) {
        bot.startConversation(message, function (err, convo) {
            convo.ask(resp.result.fulfillment.speech, function (response, convo) {
                tone_analyzer.tone({
                    'tone_input': { 'text': response.text },
                      'content_type': 'application/json'
                    }, function(error, response) {
                    if (error){
                        console.log('error:', error);
                        convo.stop();
                    }
                    else{
                        let data = {};
                        for(i of response.document_tone.tones){
                            if(i.tone_id == 'sadness'){
                                data.sad = i.score;
                            }
                            if(i.tone_id == 'joy'){
                                data.joy = i.score;
                            }
                        }
                        if(data.hasOwnProperty('sad') && data.hasOwnProperty('joy')){
                            if(data.sad>data.joy){
                                User[message.user]["intent"].push({reason:"Family",score:data.sad*100});
                            }
                        } else if(data.hasOwnProperty('sad')){
                            User[message.user]["intent"].push({reason:"Family",score:data.sad*100});
                        }
                        convo.stop();
                        if(User[message.user]["array"].length>0){
                            message.text = User[message.user]["array"][Math.floor(Math.random() * User[message.user]["array"].length)]
                            apiai.process(message,bot);
                        } else {
                            controller.trigger('conclusion',[bot,message]);
                        }

                    }

                    }
                  );
                convo.stop();
            });
        });
    }).action('share_no',function (message, resp, bot) {
        bot.reply(message,resp.result.fulfillment.speech);
    })
}
