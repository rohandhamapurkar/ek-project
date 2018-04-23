var bot = require('./init-user').bot;
var controller = require('./init-user').controller;
const apiaibotkit = require('api-ai-botkit');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const tone_analyzer = new ToneAnalyzerV3({
    "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
    "username": "8c8c7592-5ad6-4457-a82b-437712e51c58",
    "password": "RZNYmylCiAeb",
    version_date: '2017-09-21'
});
const string = require('./strings');
const axios = require('axios');
const apiai = apiaibotkit("216dd6479acc4c63a223fc33b034eefb");
var User = {}

require("./conversations/postback")(controller,bot,apiai,User);
require("./conversations/hears")(controller,bot,apiai,User);
require("./conversations/familyIntrovert")(controller,bot,apiai,User,tone_analyzer);
require("./conversations/familyExtrovert")(controller,bot,apiai,User,tone_analyzer);
require("./conversations/studies")(controller,bot,apiai,User,tone_analyzer)
