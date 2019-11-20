'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import 'bootstrap';
import * as actions from './view';
import {saveTaskHandler, editTaskHandler} from './handlers';
import {saveTaskAction} from "./view";
import {renderTask} from "./view";
import {handleErrors} from "./view";
import {Task} from "./task";

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

import {validateTask, saveTask} from "./task";

$(document).ready(() => {
    $('.create-task').on('submit', saveTaskHandler);
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
