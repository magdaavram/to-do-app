$(document).ready(() => {
    $(".create-button").click(() => {
        getTask(".create-input");
    });


    $(".create-input").keydown((ev) => {
        if (ev.key === "Enter") {
            ev.preventDefault();
            getTask(".create-input");
        }
    });
});


function getTask(taskInputId) {
    const taskInput = $(taskInputId);
    const newTask = taskInput.val();
    taskInput.val("");

    console.log(newTask);
    return newTask;
}
