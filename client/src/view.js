'use strict';

const $ = require('jquery');
const Mustache = require('mustache');

const enableButtons = () => {
    if ($('.task-inputs').children('.task-group').length) {
        $('.btn-change-display').attr('disabled', false);
    }
};

const toggleCheckedTask = ev => {
    $(ev.target).parent().find('.task').toggleClass('checked');
};

const showTaskEdit = ev => {
    const mainContainer = $(ev.target).parent();
    const editTaskInput = $(mainContainer).find('.edit-task');
    const taskTextElem = $(mainContainer).find('.task');
    const taskText = $(taskTextElem).text();
    const taskDateElem = $(mainContainer).find('.date-created');
    const toggleDisplayElements = [editTaskInput, taskTextElem, taskDateElem];

    toggleClass('d-none', toggleDisplayElements);
    $(editTaskInput).val(taskText).focus().select();
};


const deleteTask = ev => {
    $(ev.target).parent().remove();

    if (!$('.task-inputs').children('.task-group').length) {
        $('.btn-change-display').attr('disabled', true);
    }
};

const showAll = () => {
    $('.show-all').attr('disabled', true);
    $('.show-undone').attr('disabled', false);
};

const showUndone = () => {
    $('.show-undone').attr('disabled', true);
    $('.show-all').attr('disabled', false);
};

const deleteAll = () => {
    $('.task-inputs').children('.task-group').remove();
    $('.btn-change-display').attr('disabled', true);
};

const hideAlert = () => {
    $('.alert-content').hide();
    $('.alert-container').addClass('d-none');
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


export {
    renderTask,
    handleErrors,
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
