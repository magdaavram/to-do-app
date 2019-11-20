'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '../styles/index.scss';
import 'bootstrap';
import * as actions from './view';

const $ = require('jquery');

const enableButtons = actions.enableButtons;
const saveTaskHandler = actions.saveTaskHandler;
const toggleCheckedTask = actions.toggleCheckedTask;
const showTaskEdit = actions.showTaskEdit;
const editTaskHandler = actions.editTaskHandler;
const deleteTask = actions.deleteTask;
const showAll = actions.showAll;
const showUndone = actions.showUndone;
const deleteAll = actions.deleteAll;
const hideAlert = actions.hideAlert;

$(window).on('load', enableButtons);
$(document).ready(() => {
    $('.create-task').on('submit', ev => saveTaskHandler(ev));
    $('.task-inputs')
        .on('click', 'input[type="checkbox"]', ev => toggleCheckedTask(ev))
        .on('click', '.edit-btn', ev => showTaskEdit(ev))
        .on('keydown', '.edit-task', ev => editTaskHandler(ev))
        .on('click', '.delete-task', ev => deleteTask(ev));
    $('.show-all').on('click', showAll);
    $('.show-undone').on('click', showUndone);
    $('.delete-button').on('click', deleteAll);
    $('.close-alert').on('click', hideAlert);
});
