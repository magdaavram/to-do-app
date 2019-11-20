'use strict';

import {saveTaskAction, renderTask, handleErrors, editTask, toggleClass} from './view';

const $ = require('jquery');

const saveTaskHandler = ev => {
    ev.preventDefault();

    try {
        const newTask = saveTaskAction();
        renderTask(newTask);
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
        try {
            editTask(ev, initialTaskTextElem);
            toggleClass('d-none', toggleDisplayElements);
        } catch (e) {
            handleErrors(e);
        }
    }

    if (ev.key === 'Escape') {
        toggleClass('d-none', toggleDisplayElements);
    }
};

export {saveTaskHandler, editTaskHandler};
