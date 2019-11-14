"use strict";

// import lodash from 'lodash';
import {hello} from './hello';
// import * as t from './inject-task';
// console.log(t.injectTasks(t.tasks));
// t.injectTasks(t.tasks);
let newTask;
// console.log(lodash.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
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
