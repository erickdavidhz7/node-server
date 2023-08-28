const http = require("http");
const port = 8000;

function serverNode(taskList) {
  const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/task_list" && req.method === "GET"){
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(taskList));
    }else{
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  })
  
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}


module.exports = serverNode;