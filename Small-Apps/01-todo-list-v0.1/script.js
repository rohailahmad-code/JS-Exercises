// Todo List App - Version 1.0

let tasks = [];

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const input = document.querySelector('#input-text').value;

  if (tasks.includes(input)) {
    alert('Duplicate tasks are not accepted');
    return;
  }

  tasks.push(input);

  // Show that text in the below tasks section

  if (input.trim() !== '') {
    // selecting tasks container div
    const taskContainer = document.querySelector('.tasks');
    const anyFirstTask = document.querySelector('.empty-task');

    if (anyFirstTask) {
      anyFirstTask.style.display = 'none';
    }

    // creating task div
    const newTask = document.createElement('div');
    newTask.classList.add('task');

    // creating span text
    const newText = document.createElement('span');
    newText.textContent = input;

    // creating div for button
    const newBtn = document.createElement('div');
    newBtn.classList.add('btn');

    // create button for edit
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(newTask, newText));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(newTask, input));

    // Now Appending

    // append newBtn and newText to newTask
    newTask.appendChild(newText);
    newTask.appendChild(newBtn);

    // append buttons to newBtn div
    newBtn.appendChild(editButton);
    newBtn.appendChild(deleteButton);

    // now appending the new task div to main tasks container
    taskContainer.appendChild(newTask);

    // make the input empty
    document.querySelector('#input-text').value = '';
  } else {
    alert('Kindly Enter Any Task');
  }
});

// Create a function with parameters for the task element and its text element.
function editTask(newTaskDiv, newTaskText) {
  // Retrieve the current text from the text element.
  const currentText = newTaskText.textContent;

  // Create a text input element.
  // Set its value to the current text.
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;

  // Replace the text element with the input element in the DOM.
  newTaskDiv.replaceChild(input, newTaskText);

  // Add a blur event listener to the input:
  // On blur, get the new text from the input.
  input.addEventListener('blur', () => {
    const updatedText = input.value;

    // Check if it's a duplicate and different from the original:
    if (tasks.includes(updatedText)) {
      // If so, alert the user, revert the input, and replace the input with the original text element.
      alert('Duplicate values are not accepted.');
      input.value = currentText;
      newTaskDiv.replaceChild(newTaskText, input);
      return;
    }

    // Otherwise, update the task list and replace the input with the updated text element.
    const taskIndex = tasks.indexOf(currentText);
    tasks[taskIndex] = updatedText;
    newTaskText.textContent = updatedText;
    newTaskDiv.replaceChild(newTaskText, input);
  });

  // Add a keypress event listener to the input:
  // If the Enter key is pressed, trigger the blur event.
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      input.blur();
    }
  });
  input.focus();
}

// Create a function with parameters for the task element and the task text.
function deleteTask(newTaskDiv, newTaskText) {
  // Find Task Index
  const taskIndex = tasks.indexOf(newTaskText);

  // Locate the index of the task text in the tasks array.
  // If the task is found (index is greater than -1), remove it from the tasks array.
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
  }
  newTaskDiv.remove();

  // If the tasks array is now empty, show the element that indicates no tasks (e.g., set its display style to 'block').
  if (tasks.length === 0) {
    document.querySelector('.empty-task').style.display = 'block';
  }
}
