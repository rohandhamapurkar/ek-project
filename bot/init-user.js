// required botkit for the messenger api

const botKit = require('botkit');
const string = require('./strings');
// required to access the env file

var express = require('express'),
request = require('request'),
bodyParser = require('body-parser'),
app = express();

var api_host = 'graph.facebook.com';
var static_dir =  process.cwd() + '/public';
var static_dir2 =  process.cwd() + '/public';
const env = require('./env');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(static_dir));

var api_host = 'graph.facebook.com';

//Initializing bot controller. with the page following params
const controller = botKit.facebookbot({
    debug: true, // make false to stop debug mode
    receive_via_postback: true, // permission to setup postback
    access_token: env.ACCESS_TOKEN, // page id
    verify_token: env.VERIFY_TOKEN  // verification key that was set on the dev page
});

//Bot spawned.
const bot = controller.spawn({});

app.listen(env.PORT,()=>{
    console.log("listening on port: "+env.PORT);
});

request.post('https://' + api_host + '/me/subscribed_apps?access_token=' + env.ACCESS_TOKEN,
function(err, res, body) {
    if (err) {
        console.log('Could not subscribe to page messages');
    } else {
        console.log('******USER Successfully subscribed to Facebook events:', body);
        controller.startTicking();
    }
});

//Webserver created and bot loaded.
controller.createWebhookEndpoints(app, bot, function () {
    console.log('This user bot is online!!!');
});

//profile settings.
controller.api.messenger_profile.greeting('Hello There im a BOT');
controller.api.messenger_profile.get_started(string.getStartedSetup); //get started button
controller.api.messenger_profile.menu(string.persistentMenu); // persistent menu setup
//exporting controller and bot.
module.exports = {
    controller,
    bot
};