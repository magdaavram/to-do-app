'use strict';

export class Task {
    constructor(id, task, date) {
        this.taskId = id;
        this.task = task;
        this.date = date;
        this.done = false;
    }
}
