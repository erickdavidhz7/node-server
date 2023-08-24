const readlineSync = require("readline-sync");

let idCounter = 0;

function addTask(taskList) {
  idCounter += 1;
  let taskName = readlineSync.question("Please enter the name of your task: ");
  let taskDescription = readlineSync.question(`Please enter the description of your task ${taskName}: `);
  console.log(`The new task's ID is: ${idCounter}`);
  const newTask = {
    id: idCounter,
    name : taskName,
    description : taskDescription,
    status : "Not completed"
  }

  taskList = [...taskList, newTask];
  return new Promise((resolve) => {
    console.log("Loading...");
    setTimeout(()=> resolve(taskList), 2000)
  })
}

module.exports = addTask;
