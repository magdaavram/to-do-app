'use strict';

const $ = require('jquery');
const Mustache = require('mustache');

const renderTask = (task) => {
    const taskTemplate = $('#task-template').html();

    $('.task-inputs').append(Mustache.render(taskTemplate, task));
};

const renderTasks = (tasks) => {
    const taskTemplate = $('#task-template').html();

    $.each(tasks, (index, task) => {
        $('.task-inputs').append(Mustache.render(taskTemplate, task));
    });
};

export {renderTask, renderTasks}
