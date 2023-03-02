const login_id = document.querySelector('#login-id');
const login_form = document.querySelector('#login-form');
const greetingtext = document.querySelector('#greeting');
const _clock = document.querySelector('h1#clock');
const _weekday = document.querySelector('h2#weekday');
const _toDoForm = document.getElementById('todo-form');

function onSubmit(event) {
  event.preventDefault();
  greetingtext.innerHTML = `${greeting}, ${login_id.value}.`;
  greetingtext.classList.remove('hidden');
  _toDoForm.classList.remove('hidden');
  login_form.classList.add('hidden');
  localStorage.setItem('username', login_id.value);
}

const username = localStorage.getItem('username');
const hour = new Date().getHours();
let greeting;
if (8 <= hour && hour <= 11) greeting = 'Good Morning';
else if (12 <= hour && hour <= 17) greeting = 'Good Afternoon';
else if (18 <= hour && hour <= 20) greeting = 'Good Evening';
else greeting = 'Good Night';

if (username) {
  // 이미 이름 치고 들어온 사람 :)
  login_form.classList.add('hidden');
  _clock.classList.remove('hidden');
  _toDoForm.classList.remove('hidden');
  _weekday.classList.remove('hidden');
  greetingtext.innerHTML = `${greeting}, ${username}.`;
}

greetingtext.addEventListener('dblclick', () => {
  greetingtext.classList.add('hidden');
  _toDoForm.classList.add('hidden');
  localStorage.clear();
  login_form.classList.remove('hidden');
});

login_form.addEventListener('submit', onSubmit);
