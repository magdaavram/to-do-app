'use strict';

const $ = require('jquery');
const Mustache = require('mustache');

const renderTask = task => {
    const taskTemplate = $('#task-template').html();

    $('.task-inputs').append(Mustache.render(taskTemplate, task));
};

const renderTasks = tasks => {
    const taskTemplate = $('#task-template').html();

    $.each(tasks, (index, task) => {
        $('.task-inputs').append(Mustache.render(taskTemplate, task));
    });
};

const showTaskEdit = ev => {
    const editTaskButton = ev.target;
    const mainContainer = $(editTaskButton).parent();
    const editTaskInput = $(mainContainer).find('.edit-task');
    const taskTextElem = $(mainContainer).find('.task');
    const taskText = $(taskTextElem).text();
    const taskDateElem = $(mainContainer).find('.date-created');
    const taskId = parseInt($(editTaskInput).attr('attr-id'));

    $(editTaskInput).removeClass('d-none').val(taskText).focus().select();
    $(taskTextElem).addClass('d-none');
    $(taskDateElem).addClass('d-none');
};

export {renderTask, renderTasks, showTaskEdit}
