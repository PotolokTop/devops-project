let currentTasks = [];
const taskForm = document.getElementById('taskForm');
const filterTasks = document.getElementById('filterTasks');

document.addEventListener('DOMContentLoaded', initUserSession);
filterTasks.addEventListener('change', () => renderTasks(currentTasks));

taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();

  try {
    await apiRequest('/tasks', 'POST', { title, description });
    taskForm.reset();
    loadTasks();
  } catch (error) {
    alert(error.message);
  }
});

async function loadTasks() {
  try {
    currentTasks = await apiRequest('/tasks');
    renderTasks(currentTasks);
  } catch (error) {
    console.error(error.message);
  }
}

async function toggleTask(taskId, currentCompleted) {
  const task = currentTasks.find(item => item.id === taskId);
  if (!task) return;

  try {
    await apiRequest(`/tasks/${taskId}`, 'PUT', {
      title: task.title,
      description: task.description,
      completed: !currentCompleted,
    });
    loadTasks();
  } catch (error) {
    alert(error.message);
  }
}

async function removeTask(taskId) {
  try {
    await apiRequest(`/tasks/${taskId}`, 'DELETE');
    loadTasks();
  } catch (error) {
    alert(error.message);
  }
}
