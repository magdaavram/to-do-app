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
    $('.create-button').click(() => {
        saveTaskAction();
        toggleDisableButtons(false, '.show-all', '.show-undone');
    });


    $('.create-input').keydown(ev => {
        if (ev.key === 'Enter') {
            saveTaskAction();
            toggleDisableButtons(false, '.show-all', '.show-undone');
            ev.preventDefault();
        }
    });


    $('.task-inputs')
        .on('click', 'input[type="checkbox"]', ev => {
            const element = ev.target;
            const taskId = parseInt($(element).attr('attr-id'));

            $(element).parent().find('.task').toggleClass('checked');
        })
        .on('click', 'button', ev => {
            const element = ev.target;
            const taskId = parseInt($(element).attr('attr-id'));

            $(element).parent().remove();

            if (!$('.task-inputs').children('.task-group').length) {
                toggleDisableButtons(true, '.show-all', '.show-undone');
            }
        });


    $('.show-all').on('click', ev => {
        toggleDisableButtons(true, '.show-all');
        toggleDisableButtons(false, '.show-undone');
    });

    $('.show-undone').on('click', ev => {
        toggleDisableButtons(true, '.show-undone');
        toggleDisableButtons(false, '.show-all');
    });
});


const saveTaskAction = () => {
    const taskInput = $('.create-input');
    const task = taskInput.val();
    const newTask = new Task(3, task, '11/12, 10:30');

    renderTask(newTask);
    taskInput.val('');
};

const toggleDisableButtons = (state, ...args) => {
    for (let arg of args) {
        $(arg).attr('disabled', state);
    }
};
