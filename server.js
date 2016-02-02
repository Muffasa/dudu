var http = require('http')

console.log("http: "+ http)

http.createServer(function (req, res) {
     res.end('<h1>hi there from node js</h1>');
}).listen(9999);
   
   console.log("server is runng and listening on port 9615")