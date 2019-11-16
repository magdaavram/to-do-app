'use strict';

import {injectTasks} from './inject-task';
import {createTask} from './get-task-content';

const saveTaskAction = () => {
    //createTask()
    //injectTask()
    //new Task with task val
};


$('.create-button').click(() => {
    const tasks = [];

    tasks.push(createTask());
    injectTasks(tasks);
});


$('.create-input').keydown((ev) => {
    if (ev.key === 'Enter') {
        const tasks = [];

        tasks.push(createTask());
        injectTasks(tasks);
        ev.preventDefault();
    }
});


$('.task-inputs').on('click', 'input[type="checkbox"]', (ev) => {
    const element = ev.target;
    const id = parseInt($(element).attr('attr-id'));

    $(element).parent().find('.task').toggleClass('checked');
    console.log(id);
});
