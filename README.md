# TODO App

Exercising front end with a simple to do application.

I have used: 
* JavaScript
* jQuery
* Sass
* Bootstrap
* npm
* webpack


## Business Requirements

### Model & Actions
* create (id, text, created_at, done)
* edit task
* toggle done
* get list of all
* get list of undone
* delete task
* delete all tasks


### Flows
* on page load, display all items ordered by creation date (newest first)
* on create, the new item is added in the list
* on delete, the item is removed from the list
* the item can be toggled done; the marked as done items are visually differentiated
* on delete all, all tasks are deleted
* on get all, show all tasks (done and undone)
* on get undone, filter undone tasks
* display errors for all actions


## Technical Requirements

### Front End
* single page application (responsive)
* elements on page: 
    * create form (task input, add button)
    * list of items (task text, toggle done checkbox, date of creation, edit button, delete button)
    * delete all button
    * get all button
    * get undone button
    * error message