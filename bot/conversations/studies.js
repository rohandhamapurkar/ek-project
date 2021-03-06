const string = require('../strings')
module.exports = function(controller,bot,apiai,User,tone_analyzer){
    apiai.action('studies_flow',function (message, resp, bot) {
        let index = User[message.user]["array"].indexOf('studies_flow');
        if (index > -1) {
            User[message.user]["array"].splice(index, 1);
        }
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
        bot.startConversation(message, function (err, convo) {
            convo.ask("What you feel is wrong according to you?", function (response, convo) {
                tone_analyzer.tone({
                    'tone_input': { 'text': response.text },
                      'content_type': 'application/json'
                    }, function(error, response) {
                    if (error) {
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
                                User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
                            }
                        } else if(data.hasOwnProperty('sad')){
                            User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
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
        bot.startConversation(message, function (err, convo) {
            convo.ask("Say something about it.", function (response, convo) {
                tone_analyzer.tone({
                    'tone_input': { 'text': response.text },
                      'content_type': 'application/json'
                    }, function(error, response) {
                    if (error) {
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
                                User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
                            }
                        } else if(data.hasOwnProperty('sad')){
                            User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
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
    }).action('talk_no',function (message, resp, bot) {
        if(User[message.user]["array"].length>0){
            message.text = User[message.user]["array"][Math.floor(Math.random() * User[message.user]["array"].length)]
            apiai.process(message,bot);
        } else {
            controller.trigger('conclusion',[bot,message]);
        }
        // let template = null;
        // if(User[message.user].type == 'introvert'){
        //     template = Object.assign({},string.introvertQuickreplyMenu);
        // } else {
        //     template = Object.assign({},string.extrovertQuickreplyMenu);
        // }
        // template.text = "Would you like to talk about something else?"
        // bot.reply(message,template);
    }).action('reason_no',function (message, resp, bot) {
        bot.startConversation(message, function (err, convo) {
            convo.ask("Exactly what about your studies bothers you?", function (response, convo) {
                tone_analyzer.tone({
                    'tone_input': { 'text': response.text },
                      'content_type': 'application/json'
                    }, function(error, response) {
                    if (error) {
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
                                User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
                            }
                        } else if(data.hasOwnProperty('sad')){
                            User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
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
    }).action('reason_yes',function (message, resp, bot) {
        bot.startConversation(message, function (err, convo) {
            convo.ask("Talk about it.", function (response, convo) {
                tone_analyzer.tone({
                    'tone_input': { 'text': response.text },
                      'content_type': 'application/json'
                    }, function(error, response) {
                    if (error) {
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
                                User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
                            }
                        } else if(data.hasOwnProperty('sad')){
                            User[message.user]["intent"].push({reason:"Studies",score:data.sad*100});
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
    })
}
