const http = require("http");
var id = 1;

const server = http.createServer(async (req, res) => {
  if (req.url === "/greeting" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hello world!");
    res.end();
  }

  if(req.url=== "/employee" && req.method === "POST"){
    // var body = '';
    // req.on('data' , chunk => {
    //   body += chunk.toString();
    // })
    // req.on('end', () => {
    //   console.log(body);
    //   req.end()
    // })
      id++;
    res.writeHead(201, {'Content-Type' : "application/json"});
    res.write("employeeId : ");
    res.write(id.toString() );
    res.end();
  }

  else {
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Route note found"}));
  }
});


server.listen(8080, () => console.log("Server Runing on 8080"));


