var http = require("http");
var options = {
  host: "localhost", port: 3000, path: "/", method: "POST"
}

var makeRequest = function(message){
  var request = http.request(options, function(response){
    response.on("data", function(data){
      console.log(data);
    });
  });

  request.write(message);
  request.end();
}

module.exports = makeRequest;