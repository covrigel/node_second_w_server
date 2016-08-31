var hello = require("./custom_hello");
var gb = require("./custom_goodbye");
var makeRequest = require("./http_request");

makeRequest("A new message");
hello();
gb.goodbye();