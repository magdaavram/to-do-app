'use strict';

export function injectTasks(tasks) {
    const taskTemplate = $('#task-template').html();

    $.each(tasks, (index, task) => {
        const output = Mustache.render(taskTemplate, task);

        $('.task-inputs').append(output);
    });
}
