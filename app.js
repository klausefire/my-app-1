// select the HTML elements
const newTodoInput = document.querySelector('#new-todo');
const addTodoButton = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');

// add event listener to the input field
newTodoInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // check if Enter key was pressed
        event.preventDefault(); // prevent form submission
        addTodo(); // call the addTodo function
    }
});

// add event listener to the "Add" button
addTodoButton.addEventListener('click', addTodo);

// function to add a new to-do item
function addTodo() {
    // get the new to-do text from the input field
    const newTodoText = newTodoInput.value.trim();

    // check if the new to-do text is not empty
    if (newTodoText !== '') {
        // create a new li element for the to-do item
        const todoItem = document.createElement('li');

        // create a checkbox input element
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // create a span element for the to-do text
        const todoText = document.createElement('span');
        todoText.textContent = newTodoText;

        // add event listener to the checkbox
        checkbox.addEventListener('click', function() {
            todoText.classList.toggle('completed');
        });

        // create a button element to delete the to-do item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // add the elements to the to-do item li element
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        // add event listener to the delete button
        deleteButton.addEventListener('click', deleteTodo);

        // add the to-do item to the todo-list ul element
        todoList.appendChild(todoItem);
        // add a class to newly create li
        todoItem.classList.add('new-todo-item'); 

        // add the show class after a short delay
        setTimeout(function() {
            todoItem.classList.add('show');
        }, 10);

        // clear the new to-do input
        newTodoInput.value = '';
    }
}

// function to delete a to-do item
function deleteTodo() {
    // get the parent li element of the delete button
    const todoItem = this.parentNode;

    // remove the li element from the todo-list ul element
    todoList.removeChild(todoItem);
}
