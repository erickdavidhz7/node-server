function displayTasks(taskList) {
  console.log("------------ Printing tasks------------- ");
  taskList.map((task, taskNumber) => {
    console.log(`Task ${taskNumber + 1}`);
    console.log(`ID: ${task.id}`);
    console.log(`Name: ${task.name}`);
    console.log(`Description: ${task.description}`);
    console.log(`Status: ${task.status}`);
    if (taskList.indexOf(task) !== taskList.length - 1) console.log("----------------------------------------");
  });
  return new Promise((resolve) => {
    console.log("\nLoading...");
    setTimeout(() => resolve(), 1000);
  });
}

module.exports = displayTasks;