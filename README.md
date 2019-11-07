# TODO App

## Business Requirements

### Model
* create (id, task, created_at, done)
* edit
* toggle done
* get list of all
* get list of undone
* delete task
* delete all tasks


### Flows
* on page load, display all items ordered by creation date (newest first); the marked as done 
items are visually differentiated
* on create, the new item is added in the list
* on delete, the item is removed from the list
* the item can be toggled done
* on delete all, all tasks are deleted
* on get all, show all tasks (done and undone)
* on get undone, filter undone tasks
* display errors for all actions


## Technical Requirements

### Front End
* single page application (responsive)
* elements on page: 
    * create form (task input, add button)
    * list of items (task text, toggle done checkbox, date of creation, delete button)
    * delete all button
    * get all button
    * get undone button
    * error message