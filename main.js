const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.url === "/greeting" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hello world!");
    res.end();
  }

  else {
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Route note found"}));
  }
});



server.listen(8080, () => console.log("Server Runing on 8080"));


