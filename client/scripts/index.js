"use strict";

// import {tasks} from "./inject-task";
// console.log(tasks[1]);

let newTask;

$(".create-button").click(() => {
    const date = getDate();

    newTask = getTask(".create-input");
    console.log(newTask, date);
});


$(".create-input").keydown((ev) => {
    if (ev.key === "Enter") {
        const date = getDate();

        ev.preventDefault();
        newTask = getTask(".create-input");
        console.log(newTask, date);
    }
});


function getTask(taskInputId) {
    const taskInput = $(taskInputId);
    const newTask = taskInput.val();
    taskInput.val("");

    return newTask;
}

function getDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    return `${day}/${month}, ${hour}:${minutes}`;
}
