function showMessage(text, isError = false) {
  const message = document.getElementById('authMessage');
  message.textContent = text;
  message.style.color = isError ? '#d92d20' : '#2455d6';
}

function renderTasks(tasks) {
  const taskList = document.getElementById('taskList');
  const filterValue = document.getElementById('filterTasks').value;

  let filteredTasks = tasks;
  if (filterValue === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filterValue === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }

  if (!filteredTasks.length) {
    taskList.innerHTML = '<div class="empty-state">Пока задач нет</div>';
    return;
  }

  taskList.innerHTML = filteredTasks.map(task => `
    <div class="task-item ${task.completed ? 'completed' : ''}">
      <div class="task-title-row">
        <div>
          <div class="task-title">${escapeHtml(task.title)}</div>
          <div class="task-description">${escapeHtml(task.description || 'Без описания')}</div>
        </div>
      </div>
      <div class="task-actions">
        <button onclick="toggleTask(${task.id}, ${task.completed})">
          ${task.completed ? 'Вернуть' : 'Выполнить'}
        </button>
        <button onclick="removeTask(${task.id})">Удалить</button>
      </div>
    </div>
  `).join('');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
