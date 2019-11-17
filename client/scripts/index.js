'use strict';

import {injectTasks} from './inject-task';
import {Task} from './task';


$('.create-button').click(() => {
    saveTaskAction();
});


$('.create-input').keydown((ev) => {
    if (ev.key === 'Enter') {
        saveTaskAction();
        ev.preventDefault();
    }
});


$('.task-inputs').on('click', 'input[type="checkbox"]', (ev) => {
    const element = ev.target;
    const id = parseInt($(element).attr('attr-id'));

    $(element).parent().find('.task').toggleClass('checked');
});


const saveTaskAction = () => {
    const tasks = [];
    const taskInput = $('.create-input');
    const task = taskInput.val();
    const newTask = new Task(3, task, '11/12, 10:30');

    tasks.push(newTask);
    injectTasks(tasks);
    taskInput.val('');
};