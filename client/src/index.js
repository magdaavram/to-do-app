'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import 'bootstrap';

import * as handlers from './handlers';

const $ = require('jquery');


$('.create-task').on('submit', handlers.saveTaskHandler);
$('.task-inputs')
    .on('click', 'input[type="checkbox"]', handlers.toggleCheckedTaskHandler)
    .on('click', '.edit-btn', handlers.showTaskEditHandler)
    .on('keydown', '.edit-task', handlers.editTaskHandler)
    .on('click', '.delete-task', handlers.deleteTaskHandler);
$('.show-all').on('click', handlers.showAllHandler);
$('.show-undone').on('click', handlers.showUndoneHandler);
$('.delete-button').on('click', handlers.deleteAllHandler);
$('.close-alert').on('click', handlers.hideAlertHandler);
