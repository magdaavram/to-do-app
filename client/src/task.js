'use strict';

class Task {
    constructor(id, task, date) {
        this.taskId = id;
        this.task = task;
        this.date = date;
        this.done = false;
    }
}

const validate = text => {
    if (text === '') {
        throw 'no-task';
    }

    if (text.length > 70) {
        throw 'too-long';
    }
};

const save = text => {
    return new Task(Math.floor(Math.random() * 100), text, '11/12, 10:30');
};

export {Task, validate, save};
