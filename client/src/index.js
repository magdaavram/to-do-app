'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import 'bootstrap';
import * as actions from './view';
import {saveTaskHandler, editTaskHandler} from './handlers';

const $ = require('jquery');

const enableButtons = actions.enableButtons;
const toggleCheckedTask = actions.toggleCheckedTask;
const showTaskEdit = actions.showTaskEdit;
const deleteTask = actions.deleteTask;
const showAll = actions.showAll;
const showUndone = actions.showUndone;
const deleteAll = actions.deleteAll;
const hideAlert = actions.hideAlert;

$(window).on('load', enableButtons);
$(document).ready(() => {
    $('.create-task').on('submit', saveTaskHandler);
    $('.task-inputs')
        .on('click', 'input[type="checkbox"]', toggleCheckedTask)
        .on('click', '.edit-btn', showTaskEdit)
        .on('keydown', '.edit-task', editTaskHandler)
        .on('click', '.delete-task', deleteTask);
    $('.show-all').on('click', showAll);
    $('.show-undone').on('click', showUndone);
    $('.delete-button').on('click', deleteAll);
    $('.close-alert').on('click', hideAlert);
});
