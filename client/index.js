let newTask;

$(".create-button").click(() => {
    newTask = getTask(".create-input");
    createTask(newTask, 3, "12/11, 10:33");
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
    $(`<div class="custom-control custom-checkbox mr-sm-2 task-group">
<input class="custom-control-input" id="task-${taskId}" type="checkbox">
<label class="custom-control-label task-container" for="task-${taskId}">
<div>
<span>${taskName}</span>
<span class="date-created">(${date})</span>
</div>
<input class="form-control no-display" name="task-${taskId}" type="text"></label>
<button attr-btn="task-${taskId}" class="btn btn-danger btn-sm" type="button">X</button>
</div>`)
        .appendTo(".task-inputs");
}