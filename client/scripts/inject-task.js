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
    const taskTemplate = "<div class=\"custom-control custom-checkbox mr-sm-2 task-group d-flex justify-content-between\">"
        + "<input class=\"custom-control-input\" id=\"task-{{taskId}}\" type=\"checkbox\">"
        + "<label class=\"custom-control-label task-container\" for=\"task-{{taskId}}\">"
        + "<div class=\"d-flex align-items-center\">"
        + "<span>{{task}}</span>"
        + "<span class=\"date-created text-center\">({{date}})</span>"
        + "</div>"
        + "<input class=\"form-control d-none\" name=\"task-{{taskId}}\" type=\"text\">"
        + "</label>"
        + "<button attr-btn=\"task-{{taskId}}\" class=\"btn btn-danger btn-sm\" type=\"button\">"
        + "X"
        + "</button>"
        + "</div>";

    $.each(tasks, (index, task) => {
        const output = Mustache.render(taskTemplate, task);

        $(".task-inputs").append(output);
    });
}

injectTasks(tasks);

// export {tasks};
