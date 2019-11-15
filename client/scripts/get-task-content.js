'use strict';

import {Task} from './task';

function getTask() {
    const taskInput = $('.create-input');
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

function createTask() {
    const date = getDate();
    const task = getTask();

    return new Task(3, task, date);
}

export {createTask};
