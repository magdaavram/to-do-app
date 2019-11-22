'use strict';

const $ = require('jquery');
const Mustache = require('mustache');

const renderTask = task => {
    const taskTemplate = $('#task-template').html();
    $('.task-inputs').append(Mustache.render(taskTemplate, task));
};


const handleErrors = e => {
    switch (e) {
        case 'no-task':
            setAlert('Please insert a valid task name.');
            break;
        case 'too-long':
            setAlert('Please insert a less than 70 characters task.');
            break;
        default:
            setAlert('Sorry! Some error occurred and the action could not be done.');
            break;
    }
};


const setAlert = alert => {
    $('.alert-container').removeClass('d-none');
    $('.alert-content').show();
    $('.alert-text').text(alert);
};


const createRequest = (url, method, body, callback) => {
    fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => {
            callback(json);
        });
};


export {renderTask, handleErrors, createRequest};
