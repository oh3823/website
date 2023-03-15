const login_id = document.querySelector('#login-id');
const login_form = document.querySelector('#login-form');
const greetingtext = document.querySelector('#greeting');
const _toDoForm = document.querySelector('#todo-form');

const now = new Date();
const hour = now.getHours();
let greeting;

if (8 <= hour && hour <= 11) {
  greeting = 'Good Morning';
} else if (12 <= hour && hour <= 17) {
  greeting = 'Good Afternoon';
} else if (18 <= hour && hour <= 20) {
  greeting = 'Good Evening';
} else {
  greeting = 'Good Night';
}

function onSubmit(event) {
  // 로그인됨
  event.preventDefault();
  greetingtext.innerHTML = greeting + ', ' + login_id.value + '.';
  greetingtext.classList.remove('hidden'); // 추가
  _toDoForm.classList.remove('hidden');
  login_form.classList.add('hidden');
  localStorage.setItem('username', login_id.value);
}

function logout() {
  localStorage.clear();
  _toDoForm.classList.add('hidden');
  location.reload();
}
const username = localStorage.getItem('username');

if (username) {
  // 로그인됨
  // 이미 이름 치고 들어온 사람 :)
  login_form.classList.add('hidden');
  _toDoForm.classList.remove('hidden');
  greetingtext.classList.remove('hidden'); // 추가
  greetingtext.innerHTML = greeting + ', ' + username + '.';
} else {
  // 처음 온 손님 😊
  login_form.addEventListener('submit', onSubmit);
}

// greetingtext.addEventListener('dblclick', logout);

greetingtext.addEventListener('dblclick', () => {
  greetingtext.classList.add('hidden');
  _toDoForm.classList.add('hidden');
  localStorage.clear();
  login_form.classList.remove('hidden');
});
