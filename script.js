var i = 0;
var j = 0;

let allTodos = {
  todoData : [],
};

function onPress () {
  var todoName = document.querySelector('#todo-name').value;
  var todoDeadline = document.querySelector('#deadline').value;

  let parent=[];
  let TODO_Record_str = localStorage.getItem('userTODOs');
  if (TODO_Record_str != null) {
    
  }
  parent[i]= (document.createElement('div'));
  parent[i].innerHTML = `<div>${todoName}</div><div>${todoDeadline}</div><button>remove</button>`
  document.querySelector('#display-todos').appendChild(parent[i]);
  parent[i].classList.add('display-todo-info');
  document.querySelectorAll('.display-todo-info')[i].querySelectorAll('div')[0].classList.add('todo-name-div');

  document.querySelectorAll('.display-todo-info')[i].querySelectorAll('div')[1].classList.add('todo-deadline-div');

  document.querySelectorAll('.display-todo-info')[i].querySelectorAll('button')[0].classList.add('remove-todo-btn');

  allTodos.todoData[i] = [todoName,todoDeadline];
  i++;

  localStorage.setItem('userTODOs', JSON.stringify(allTodos));
}
