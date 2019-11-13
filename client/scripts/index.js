"use strict";

let newTask;

$(".create-button").click(() => {
    newTask = getTask(".create-input");
    console.log(newTask);
});


$(".create-input").keydown((ev) => {
    if (ev.key === "Enter") {
        ev.preventDefault();
        newTask = getTask(".create-input");
        console.log(newTask);
    }
});


function getTask(taskInputId) {
    const taskInput = $(taskInputId);
    const newTask = taskInput.val();
    taskInput.val("");

    return newTask;
}
