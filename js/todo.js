const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');

// ⭐
let toDos = [];

// 배열이 바뀌면 항상 호출
function saveAtLS() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteToDo(event) {
  // li 지우기
  // LS에서도 지우기
  const li = event.target.parentElement;
  const id = li.id;
  li.remove();

  toDos = toDos.filter((todo) => todo.id !== parseInt(id));
  saveAtLS();
}
// 할일 목록을 페이지에 띄우기
function printToDo(todo) {
  const li = document.createElement('li');

  const button = document.createElement('button');
  const span = document.createElement('span');
  span.innerText = todo.text;
  button.innerText = '✅';

  button.addEventListener('click', deleteToDo);

  li.id = todo.id;
  li.appendChild(button); // 순서 바꾸기
  li.appendChild(span);

  toDoList.appendChild(li);
}

function onToDoSubmit(event) {
  // 사용자가 입력한 할일을 가져오고, 배열에 저장

  event.preventDefault();
  // object == 구조체 변수
  const todo = {
    text: toDoInput.value,
    id: Date.now(),
  };

  toDos.push(todo);
  saveAtLS();
  printToDo(todo);
  toDoInput.value = '';
}

const getToDos = localStorage.getItem('toDos');

if (getToDos) {
  // 그 todos를 html에 보여주면 된다
  const parsedToDos = JSON.parse(getToDos);

  toDos = parsedToDos;

  toDos.forEach((todo) => printToDo(todo));
}

toDoForm.addEventListener('submit', onToDoSubmit);
