'use strict';

const Mustache = require('mustache');

export function injectTasks(tasks) {
    const taskTemplate = $('#task-template').html();

    $.each(tasks, (index, task) => {
        const output = Mustache.render(taskTemplate, task);

        $('.task-inputs').append(output);
    });
}
// add renderTask method
// views.js
