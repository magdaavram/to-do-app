'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '../styles/index.scss';
import 'bootstrap';

import * as actions from './view';

const $ = require('jquery');

const disableButtons = actions.disableButtons;
const saveTaskAction = actions.saveTaskAction;
const toggleCheckedTask = actions.toggleCheckedTask;
const showTaskEdit = actions.showTaskEdit;
const editTask = actions.editTask;
const deleteTask = actions.deleteTask;
const showAll = actions.showAll;
const showUndone = actions.showUndone;
const deleteAll = actions.deleteAll;


$(window).on('load', () => {
    if ($('.task-inputs').children('.task-group').length) {
        disableButtons(false, '.show-all', '.show-undone', '.delete-button');
    }
});

$(document).ready(() => {
    $('.create-button').on('click', () => {
        if (saveTaskAction() !== false) {
            disableButtons(false, '.show-all', '.show-undone', '.delete-button');
        }
    });


    $('.create-input').on('keydown', ev => {
        if (ev.key === 'Enter') {
            if (saveTaskAction() !== false) {
                disableButtons(false, '.show-all', '.show-undone', '.delete-button');
            }

            ev.preventDefault();
        }
    });


    $('.task-inputs')
        .on('click', 'input[type="checkbox"]', ev => {
            toggleCheckedTask(ev);
        })
        .on('click', '.edit-btn', ev => {
            showTaskEdit(ev);
        })
        .on('keydown', '.edit-task', ev => {
            editTask(ev);
        })
        .on('click', '.delete-task', ev => {
            deleteTask(ev);
        });

    $('.show-all').on('click', (showAll));
    $('.show-undone').on('click', (showUndone));
    $('.delete-button').on('click', (deleteAll));
});
