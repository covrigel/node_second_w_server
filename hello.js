var http = require("http");

http.createServer(function(request, response){
  response.writeHead(200);
  response.write("Hello world");
  setTimeout(function(){
    response.write("Hello world is done now");
    response.end();
  }, 5000);
}).listen(3000);