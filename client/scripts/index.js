"use strict";

let newTask;

$(".create-button").click(() => {
    newTask = getTask(".create-input");
    createTask(newTask, 5, "12/11, 10:33");
});


$(".create-input").keydown((ev) => {
    if (ev.key === "Enter") {
        ev.preventDefault();
        newTask = getTask(".create-input");
        createTask(newTask, 4, "12/11, 11:21");
    }
});


function getTask(taskInputId) {
    const taskInput = $(taskInputId);
    const newTask = taskInput.val();
    taskInput.val("");

    return newTask;
}

function createTask(taskName, taskId, date) {
    $(`<div class="custom-control custom-checkbox mr-sm-2 task-group d-flex justify-content-between">
<input class="custom-control-input" id="task-${taskId}" type="checkbox">
<label class="custom-control-label task-container" for="task-${taskId}">
<div class="d-flex align-items-center">
<span>${taskName}</span>
<span class="date-created text-center">(${date})</span>
</div>
<input class="form-control d-none" name="task-${taskId}" type="text"></label>
<button attr-btn="task-${taskId}" class="btn btn-danger btn-sm" type="button">X</button>
</div>`)
        .appendTo(".task-inputs");
}