'use strict';

import {injectTasks} from './inject-task';
import {createTask} from './get-task-content';


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
