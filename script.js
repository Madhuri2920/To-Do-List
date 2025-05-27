
// script.js
document.getElementById('add-btn').addEventListener('click', function () {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(removeBtn);

  document.getElementById('task-list').appendChild(taskItem);
  taskInput.value = '';
});
