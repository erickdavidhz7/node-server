const readlineSync = require("readline-sync");
const displayMenu = require("./modules/displayMenu");
const addTask = require("./modules/addTask");
const deleteTask = require("./modules/deleteTask");
const completeTask = require("./modules/completeTask");
const displayTasks = require("./modules/displayTasks");
const serverNode = require("./modules/serverNode");

async function main() {
  let taskList = [];
  let userInput = "";

  while (userInput != "5") {
    displayMenu();
    userInput = readlineSync.question("Enter a menu selection: ");
    console.log("----------------------------------------");
    switch (userInput) {
      case "1":
        taskList = await addTask(taskList);
        break;

      case "2":
        taskList = await deleteTask(taskList);
        break;

      case "3":
        taskList = await completeTask(taskList);
        break;

      case "4":
        await displayTasks(taskList);
        break;

      case "5":
        break;

      default:
        console.log("Invalid Input");
        console.log("Please Enter a valid input");
    }
  }
  serverNode(taskList);
  console.log("Thanks for using the program!");
}

main();
