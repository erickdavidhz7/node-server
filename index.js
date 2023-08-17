const readlineSync = require("readline-sync");
const displayMenu = require("./displayMenu");
const addTask = require("./addTask");
const deleteTask = require("./deleteTask");
const completeTask = require("./completeTask");
const displayTasks = require("./displayTasks");

const taskList = [];
let userInput = "";

while (userInput != "5") {
  displayMenu();
  userInput = readlineSync.question("Enter a menu selection: ");
  console.log("----------------------------------------");

  switch (userInput) {
    case "1":
      addTask(taskList);
      break;

    case "2":
      deleteTask(taskList);
      break;

    case "3":
      completeTask(taskList);
      break;
      
    case "4":
      displayTasks(taskList);
      break;

    case "5":
      break;
      
    default:
      console.log("Invalid Input");
      console.log("Please Enter a valid input");
  }
}
console.log("Thanks for using the program!");
