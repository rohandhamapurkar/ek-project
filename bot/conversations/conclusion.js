module.exports = function(controller,bot,User){
    controller.on('conclusion',function(bot,message){
        if(User[message.user]["intent"].length != 0){
            let t = "Your reasons for depression may be "
            for(i of User[message.user]["intent"]){
                t += " "+i+", ";
            }
            bot.reply(message,t);
        } else {
            bot.reply(message,"You are good to go.\nIn the future we are here to make you feel good and happy.\nHave a nice day.")
        }
        
    })
}
