'use strict';

import {injectTasks} from './inject-task';
import {createTask} from './get-task-content';


$('.create-button').click(() => {
    const tasks = [];
    const newTask = createTask();

    tasks.push(newTask);
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

$('.task-container').click((ev) => {
    const taskContainer = ev.target;
    // const taskItem = taskContainer.children();
    // const inputItem = $('input[type="checkbox"');
    console.log(taskContainer);

    // if (inputItem[0].checked) {
    //     taskItem.addClass('checked');
    // } else {
    //     taskItem.removeClass('checked');
    // }

    const id = $('input[type="checkbox"]').attr('id');
    const taskId = id.slice(id.indexOf('-') + 1);
});
