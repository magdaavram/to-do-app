'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '../styles/index.scss';
import 'bootstrap';

import {renderTask} from './view';
import {Task} from './task';

const $ = require('jquery');

$(document).ready(() => {
    $('.create-button').click(() => {
        saveTaskAction();
    });


    $('.create-input').keydown(ev => {
        if (ev.key === 'Enter') {
            saveTaskAction();
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
        });
});


const saveTaskAction = () => {
    const taskInput = $('.create-input');
    const task = taskInput.val();
    const newTask = new Task(3, task, '11/12, 10:30');

    renderTask(newTask);
    taskInput.val('');
};
