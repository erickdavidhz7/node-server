function displayTasks(taskList) {
  console.log("---------- Printing the tasks----------- ");
  taskList.map((task, taskNumber) => {
    console.log(`Task ${taskNumber + 1}`);
    console.log(`Name: ${task.name}`);
    console.log(`Description: ${task.description}`);
    console.log(`Status: ${task.status}`);
    console.log("");
  });
}

module.exports = displayTasks;