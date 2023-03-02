const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = document.getElementById('todo-id');

let toDos = [];

function saveToDosAtLocalStorage() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((elem) => elem.id !== parseInt(li.id));
  saveToDosAtLocalStorage();
  li.remove();
}
function showToDo(todo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerText = todo.text;
  button.innerText = '✅';
  button.addEventListener('click', deleteToDo);
  li.id = todo.id;
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}
function onToDoSubmit(event) {
  event.preventDefault();
  const todo = {
    text: toDoInput.value,
    id: Date.now(),
  };

  toDoInput.value = '';
  toDos.push(todo);
  showToDo(todo);
  saveToDosAtLocalStorage();
}

toDoForm.addEventListener('submit', onToDoSubmit);
const getToDos = localStorage.getItem('toDos');
if (getToDos) {
  const parsedToDos = JSON.parse(getToDos);
  toDos = parsedToDos;
  toDos.forEach((todo) => showToDo(todo));
}
