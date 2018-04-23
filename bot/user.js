var bot = require('./init-user').bot;
var controller = require('./init-user').controller;
const apiaibotkit = require('api-ai-botkit');
const string = require('./strings');
const axios = require('axios');
const apiai = apiaibotkit("216dd6479acc4c63a223fc33b034eefb");
var User = {}

require("./conversations/postback")(controller,bot,apiai,User);
require("./conversations/hears")(controller,bot,apiai,User);
require("./conversations/familyIntrovert")(controller,bot,apiai,User);
require("./conversations/familyExtrovert")(controller,bot,apiai,User);
require("./conversations/studies")(controller,bot,apiai,User)


