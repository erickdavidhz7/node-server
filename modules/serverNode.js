const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());

function serverNode(taskList) {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome!")
  })
  app.get("/task_list", (req,res) => {
    res.status(200).send({ taskList : taskList});
  })
  
  app.listen(port , () => {
    console.log(`Listening on port ${port}`);
  })
}


module.exports = serverNode;