module.exports = function(controller,bot,User){
    controller.on('conclusion',function(bot,message){
        let t = "Your reasons for depression may be "
        for(i of User[message.user]["intent"]){
            t += " "+i+", ";
        }
        bot.reply(message,t);
    })
}
