const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showLogin = document.getElementById('showLogin');
const showRegister = document.getElementById('showRegister');
const authSection = document.getElementById('authSection');
const dashboard = document.getElementById('dashboard');
const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');

showLogin.addEventListener('click', () => switchTab('login'));
showRegister.addEventListener('click', () => switchTab('register'));
logoutBtn.addEventListener('click', logout);

function switchTab(type) {
  const loginActive = type === 'login';
  loginForm.classList.toggle('hidden', !loginActive);
  registerForm.classList.toggle('hidden', loginActive);
  showLogin.classList.toggle('active', loginActive);
  showRegister.classList.toggle('active', !loginActive);
  showMessage('');
}

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('registerUsername').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  try {
    const data = await apiRequest('/auth/register', 'POST', { username, email, password }, false);
    showMessage(data.message);
    registerForm.reset();
    switchTab('login');
  } catch (error) {
    showMessage(error.message, true);
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  try {
    const data = await apiRequest('/auth/login', 'POST', { email, password }, false);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    initUserSession();
  } catch (error) {
    showMessage(error.message, true);
  }
});

function initUserSession() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const token = localStorage.getItem('token');

  if (user && token) {
    authSection.classList.add('hidden');
    dashboard.classList.remove('hidden');
    welcomeText.textContent = `Добро пожаловать, ${user.username}`;
    loadTasks();
  } else {
    authSection.classList.remove('hidden');
    dashboard.classList.add('hidden');
  }
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  initUserSession();
}
