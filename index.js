const readlineSync = require("readline-sync");
const displayMenu = require("./modules/displayMenu");
const serverNode = require("./modules/serverNode");
const taskFunctions = require("./modules/taskFunctions")

async function main() {
  let taskList = [];
  let userInput = "";

  while (userInput != "5") {
    displayMenu();
    userInput = readlineSync.question("Enter a menu selection: ");
    console.log("----------------------------------------");
    taskList = await taskFunctions(userInput, taskList);
  }
  serverNode(taskList);
  console.log("Thanks for using the program!");
}

main();
