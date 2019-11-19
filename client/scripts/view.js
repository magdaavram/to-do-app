'use strict';

import {Task} from "./task";

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

const saveTaskAction = () => {
    const taskInput = $('.create-input');
    const task = taskInput.val();

    if (task.trim()) {
        const newTask = new Task(3, task, '11/12, 10:30');

        renderTask(newTask);
        taskInput.val('');
    } else {
        return false;
    }
};


const toggleCheckedTask = ev => {
    const checkboxInput = ev.target;

    $(checkboxInput).parent().find('.task').toggleClass('checked');
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

const deleteTask = (ev) => {
    const deleteTaskButton = ev.target;

    $(deleteTaskButton).parent().remove();

    if (!$('.task-inputs').children('.task-group').length) {
        disableButtons(true, '.show-all', '.show-undone');
    }
};

const showAll = () => {
    disableButtons(true, '.show-all');
    disableButtons(false, '.show-undone');
};

const showUndone = () => {
    disableButtons(true, '.show-undone');
    disableButtons(false, '.show-all');
};

const deleteAll = () => {
    $('.task-inputs').children('.task-group').remove();
    disableButtons(true, '.show-all', '.show-undone', '.delete-button');
};


const toggleClass = (className, items) => {
    for (let item of items) {
        $(item).toggleClass(className);
    }
};

const disableButtons = (state, ...buttons) => {
    for (let button of buttons) {
        $(button).attr('disabled', state);
    }
};

export {saveTaskAction, toggleCheckedTask, showTaskEdit, editTask, deleteTask, showAll, showUndone, deleteAll, disableButtons};
