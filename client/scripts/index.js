'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '../styles/index.scss';
import 'bootstrap';

import {renderTask} from './view';
import {Task} from './task';

const $ = require('jquery');


$(window).on('load', () => {
    if ($('.task-inputs').children('.task-group').length) {
        toggleDisableButtons(false, '.show-all', '.show-undone');
    }
});

$(document).ready(() => {
    // TODO add events on form submit
    // TODO add task on data base
    $('.create-button').click(() => {
        if (saveTaskAction() !== false) {
            toggleDisableButtons(false, '.show-all', '.show-undone');
        }
    });


    $('.create-input').keydown(ev => {
        if (ev.key === 'Enter') {
            if (saveTaskAction() !== false) {
                toggleDisableButtons(false, '.show-all', '.show-undone');
            }

            ev.preventDefault();
        }
    });


    $('.task-inputs')
        .on('click', 'input[type="checkbox"]', ev => {
            // TODO toggle done on data base
            const element = ev.target;
            const taskId = parseInt($(element).attr('attr-id'));

            $(element).parent().find('.task').toggleClass('checked');
        })
        .on('click', 'button', ev => {
            // TODO delete on data base
            const element = ev.target;
            const taskId = parseInt($(element).attr('attr-id'));

            $(element).parent().remove();

            if (!$('.task-inputs').children('.task-group').length) {
                toggleDisableButtons(true, '.show-all', '.show-undone');
            }
        });


    $('.show-all').on('click', ev => {
        // TODO get all from data base and render list
        toggleDisableButtons(true, '.show-all');
        toggleDisableButtons(false, '.show-undone');
    });

    $('.show-undone').on('click', ev => {
        // TODO get undone from data base and render list
        toggleDisableButtons(true, '.show-undone');
        toggleDisableButtons(false, '.show-all');
    });
});


const saveTaskAction = () => {
    const taskInput = $('.create-input');
    const task = taskInput.val();

    if (task.trim()) {
        const newTask = new Task(3, task, '11/12, 10:30');

        renderTask(newTask);
        taskInput.val('');
    } else {
        // TODO display alert
        return false;
    }
};

const toggleDisableButtons = (state, ...args) => {
    for (let arg of args) {
        $(arg).attr('disabled', state);
    }
};
