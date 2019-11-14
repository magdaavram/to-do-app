"use strict";

const tasks = [
    {
        taskId: 3,
        task: "get things done",
        date: "11/12, 10:31"
    },
    {
        taskId: 4,
        task: "shopping list",
        date: "11/12, 11:21"
    },
    {
        taskId: 5,
        task: "holiday airplane tickets",
        date: "11/12, 16:13"
    }
];

function injectTasks(tasks) {
    const taskTemplate = $("#task-template").html();

    $.each(tasks, (index, task) => {
        const output = Mustache.render(taskTemplate, task);

        $(".task-inputs").append(output);
    });
}

injectTasks(tasks);

// export {tasks};
