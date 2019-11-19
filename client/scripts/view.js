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

const editTask = ev => {
    const editTaskInput = ev.target;
    const mainContainer = $(editTaskInput).parent();
    const initialTaskTextElem = $(mainContainer).find('.task');
    const initialTaskDateElem = $(mainContainer).find('.date-created');
    const toggleDisplayElements = [initialTaskTextElem, initialTaskDateElem, editTaskInput];

    if (ev.key === 'Enter') {
        const newTask = $(editTaskInput).val();

        toggleClass('d-none', toggleDisplayElements);
        $(initialTaskTextElem).text(newTask);
        ev.preventDefault();
    }

    if (ev.key === 'Escape') {
        toggleClass('d-none', toggleDisplayElements);
    }
};

const toggleClass = (className, items) => {
    for (let item of items) {
        $(item).toggleClass(className);
    }
};

export {renderTask, renderTasks, showTaskEdit, editTask}
