const readlineSync = require("readline-sync");

function completeTask(taskList){
    let idInput = parseInt(readlineSync.question("Please enter the id of the task that you would like delete: "), 10);
    for (const task of taskList) {
        if (task.id === idInput){
            task.status = "Completed"
            console.log(`The task of id: ${idInput}\nHas been assigned as completed.`);
            return;
        }
    }
    console.log("The id that you have entered was not found");
}

module.exports = completeTask;