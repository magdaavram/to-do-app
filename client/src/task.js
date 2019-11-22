'use strict';

class Task {
    constructor(id, text, date, done) {
        this.id = id;
        this.text = text;
        this.created_at = date;
        this.done = done;
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

export {Task, validate};
