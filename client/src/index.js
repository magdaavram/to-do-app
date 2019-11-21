'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import 'bootstrap';
import * as actions from './view';
import {saveTaskHandler, editTaskHandler} from './handlers';

const $ = require('jquery');


$('.create-task').on('submit', saveTaskHandler);
$('.task-inputs')
    .on('click', 'input[type="checkbox"]', actions.toggleCheckedTask)
    .on('click', '.edit-btn', actions.showTaskEdit)
    .on('keydown', '.edit-task', editTaskHandler)
    .on('click', '.delete-task', actions.deleteTask);
$('.show-all').on('click', actions.showAll);
$('.show-undone').on('click', actions.showUndone);
$('.delete-button').on('click', actions.deleteAll);
$('.close-alert').on('click', actions.hideAlert);
