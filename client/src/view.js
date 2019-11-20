'use strict';

import {Task} from "./task";

const $ = require('jquery');
const Mustache = require('mustache');

const enableButtons = () => {
    if ($('.task-inputs').children('.task-group').length) {
        disableButtons(false, '.show-all', '.show-undone', '.delete-button');
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
    const toggleDisplayElements = [editTaskInput, taskTextElem, taskDateElem];

    toggleClass('d-none', toggleDisplayElements);
    $(editTaskInput).val(taskText).focus().select();
};


const deleteTask = ev => {
    const deleteTaskButton = ev.target;

    $(deleteTaskButton).parent().remove();

    if (!$('.task-inputs').children('.task-group').length) {
        disableButtons(true, '.show-all', '.show-undone', '.delete-button');
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

const hideAlert = () => {
    $('.alert-content').hide();
    $('.alert-container').addClass('d-none');
};


const saveTaskAction = () => {
    const taskInput = $('.create-input');
    const task = taskInput.val().trim();

    taskInput.val('');
    checkTask(task);
    disableButtons(false, '.show-all', '.show-undone', '.delete-button');
    $('.alert-content').hide();

    return new Task(Math.floor(Math.random() * 100), task, '11/12, 10:30');
};


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


const editTask = (ev, initialTaskTextElem) => {
    const task = $(ev.target).val().trim();

    ev.preventDefault();
    checkTask(task);
    $(initialTaskTextElem).text(task);
};

const checkTask = task => {
    if (task === '') {
        throw 'no-task';
    } else if (task.length > 70) {
        throw 'too-long';
    }
};


const handleErrors = e => {
    switch (e) {
        case 'no-task':
            setAlert('Please insert a valid task name.');
            break;
        case 'too-long':
            setAlert('Please insert a less than 70 characters task.');
            break;
        default:
            setAlert('Sorry! Some error occurred and the action could not be done.');
            break;
    }
};


const setAlert = alert => {
    $('.alert-container').removeClass('d-none');
    $('.alert-content').show();
    $('.alert-text').text(alert);
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


export {
    saveTaskAction,
    renderTask,
    handleErrors,
    editTask,
    toggleClass,
    enableButtons,
    toggleCheckedTask,
    showTaskEdit,
    deleteTask,
    showAll,
    showUndone,
    deleteAll,
    hideAlert
};
