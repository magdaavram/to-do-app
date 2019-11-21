'use strict';

import {renderTask, handleErrors} from './view';
import {save as saveTask, validate as validateTask} from "./task";

const $ = require('jquery');

const saveTaskHandler = ev => {
    ev.preventDefault();

    const taskInput = $('.create-input');
    const text = taskInput.val().trim();
    taskInput.val('');
    $('.alert-content').hide();

    try {
        validateTask(text);

        const newTask = saveTask(text);
        renderTask(newTask);

        $('.btn-change-display').attr('disabled', false);
    } catch (e) {
        handleErrors(e);
    }
};


const toggleCheckedTaskHandler = ev => {
    $(ev.target).parent().find('.task').toggleClass('checked');
};


const showTaskEditHandler = ev => {
    const mainContainer = $(ev.target).parent();
    const editTaskInput = $(mainContainer).find('.edit-task');
    const taskTextElem = $(mainContainer).find('.task');
    const taskText = $(taskTextElem).text();
    const taskDateElem = $(mainContainer).find('.date-created');

    $(taskTextElem).toggleClass('d-none');
    $(taskDateElem).toggleClass('d-none');
    $(editTaskInput).toggleClass('d-none').val(taskText).focus().select();
};


const editTaskHandler = ev => {
    const editTaskInput = ev.target;
    const mainContainer = $(editTaskInput).parent();
    const initialTaskTextElem = $(mainContainer).find('.task');
    const initialTaskDateElem = $(mainContainer).find('.date-created');


    if (ev.key === 'Enter') {
        ev.preventDefault();

        const text = $(ev.target).val().trim();

        $(initialTaskTextElem).toggleClass('d-none');
        $(initialTaskDateElem).toggleClass('d-none');
        $(editTaskInput).toggleClass('d-none');

        try {
            validateTask(text);

            $(initialTaskTextElem).text(text);
        } catch (e) {
            handleErrors(e);
        }
    }

    if (ev.key === 'Escape') {
        $(initialTaskTextElem).toggleClass('d-none');
        $(initialTaskDateElem).toggleClass('d-none');
        $(editTaskInput).toggleClass('d-none');
    }
};


const deleteTaskHandler = ev => {
    $(ev.target).parent().remove();

    if (!$('.task-inputs').children('.task-group').length) {
        $('.btn-change-display').attr('disabled', true);
    }
};


const showAllHandler = () => {
    $('.show-all').attr('disabled', true);
    $('.show-undone').attr('disabled', false);
};

const showUndoneHandler = () => {
    $('.show-undone').attr('disabled', true);
    $('.show-all').attr('disabled', false);
};

const deleteAllHandler = () => {
    $('.task-inputs').children('.task-group').remove();
    $('.btn-change-display').attr('disabled', true);
};

const hideAlertHandler = () => {
    $('.alert-content').hide();
    $('.alert-container').addClass('d-none');
};


export {
    saveTaskHandler,
    toggleCheckedTaskHandler,
    showTaskEditHandler,
    editTaskHandler,
    deleteTaskHandler,
    showAllHandler,
    showUndoneHandler,
    deleteAllHandler,
    hideAlertHandler
};
