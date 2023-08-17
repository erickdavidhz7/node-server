const readlineSync = require("readline-sync");

function deleteTask(taskList){
    let idInput = parseInt(readlineSync.question("Please enter the id of the task that you would like delete: "), 10);
    for (const task of taskList) {
        if (task.id === idInput){
            const index = taskList.indexOf(idInput);
            taskList.splice(index, 1);
            console.log(`The task of id: ${idInput}\nWas deleted from the list.`);
            return;
        }
    }
    console.log("The id that you have entered was not found");
}

module.exports = deleteTask;