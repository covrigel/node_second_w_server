// var hello = require("./custom_hello");
// var gb = require("./custom_goodbye");
// var makeRequest = require("./http_request");
// var express = require("express");
// var app = express();

// app.get("/", function(request, response){
//   response.sendFile(__dirname + "index.html")
// });

// app.listen(3000);

// makeRequest("A new message");
// hello();
// gb.goodbye();

var request = require("request");
var url = require("url");

app.get("twwts/:username", function(request, response){
  var username = require.params.username;
  options = {
    protocol: "http:",
    host: "api.twitter.com",
    pathname: "/1/statuses/user_timeline.json",
    query: {screen_name: username, count: 10}
  }
  var twitter_url = url.format(options);
  request(twitterUrl).pipe(response);
});