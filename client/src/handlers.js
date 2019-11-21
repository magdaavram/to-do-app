'use strict';

import {renderTask, handleErrors, toggleClass} from './view';
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

const editTaskHandler = ev => {
    const editTaskInput = ev.target;
    const mainContainer = $(editTaskInput).parent();
    const initialTaskTextElem = $(mainContainer).find('.task');
    const initialTaskDateElem = $(mainContainer).find('.date-created');
    const toggleDisplayElements = [initialTaskTextElem, initialTaskDateElem, editTaskInput];


    if (ev.key === 'Enter') {
        ev.preventDefault();

        const text = $(ev.target).val().trim();

        toggleClass('d-none', toggleDisplayElements);

        try {
            validateTask(text);

            $(initialTaskTextElem).text(text);
        } catch (e) {
            handleErrors(e);
        }
    }

    if (ev.key === 'Escape') {
        toggleClass('d-none', toggleDisplayElements);
    }
};

export {saveTaskHandler, editTaskHandler};
