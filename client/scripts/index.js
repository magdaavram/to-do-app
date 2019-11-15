'use strict';

import {injectTasks} from './inject-task';

const tasks = [
    {
        taskId: 3,
        task: 'finish UI development',
        date: '11/12, 10:31'
    },
    {
        taskId: 4,
        task: 'shopping list',
        date: '11/12, 11:21'
    },
    {
        taskId: 5,
        task: 'holiday airplane tickets',
        date: '11/12, 16:13'
    }
];
injectTasks(tasks);

let newTask;

$('.create-button').click(() => {
    const date = getDate();

    newTask = getTask('.create-input');
    console.log(newTask, date);
});


$('.create-input').keydown((ev) => {
    if (ev.key === 'Enter') {
        const date = getDate();

        ev.preventDefault();
        newTask = getTask('.create-input');
        console.log(newTask, date);
    }
});


function getTask(taskInputId) {
    const taskInput = $(taskInputId);
    const newTask = taskInput.val();
    taskInput.val('');

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
