const readlineSync = require("readline-sync");
const displayMenu = require("./displayMenu");
const addTask = require("./addTask");
const deleteTask = require("./deleteTask");
const completeTask = require("./completeTask");
const displayTasks = require("./displayTasks");

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
  console.log("Thanks for using the program!");
}

main();
