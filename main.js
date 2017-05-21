var form = document.getElementById('form');

var todos = document.getElementById('todos');

var input = document.getElementById('form-input');

var mainTodos = document.getElementById('main-todos');



function Todo() {
  addTask = function(e) {
    e.preventDefault();
    if (input.value == ' ' || input.value == '') {return '';}
    else {
      var newTodo = document.createElement('div');
      newTodo.className += 'view';
      todos.appendChild(newTodo);
      var newButtonFirst = document.createElement('button');
      newButtonFirst.addEventListener('click',completed);
      newButtonFirst.className += "checked";
      newTodo.appendChild(newButtonFirst);
      var newButtonSecond = document.createElement('button');
      newButtonSecond.className += "delete-task";
      newButtonSecond.addEventListener('click',deleteTask);
      newTodo.appendChild(newButtonSecond);
      var newPar = document.createElement('p');
      newPar.innerHTML = input.value;
      newTodo.appendChild(newPar);
      input.value = ' ';
    }
  };

  completed = function() {
    this.parentNode.classList.contains('completed') ? this.parentNode.className = 'view' : this.parentNode.className = 'view completed';
  };

  deleteTask = function() {
    this.parentNode.remove();
  };

  showAll = function() {
    var viewTask = document.getElementsByClassName('view');
    [].forEach.call(viewTask,function(item,i){
      viewTask[i].style.display = "block";
    });
  };

  clearCompleted = function() {
    var completedTasks = document.getElementsByClassName('completed');
    for (i = 0; i < completedTasks.length; i++) {
      completedTasks[i].remove();
      i--;
    }
  };

  showCompleted = function() {
    var viewTask = document.getElementsByClassName('view');
    [].forEach.call(viewTask,function(item,i){
      viewTask[i].style.display = "block";
      viewTask[i].classList.contains('completed') ? void 0  : viewTask[i].style.display = "none";
    });
  }

  showActive = function() {
    var viewTask = document.getElementsByClassName('view');
    [].forEach.call(viewTask,function(item,i){
      viewTask[i].style.display = "block";
      viewTask[i].classList.contains('completed') ? viewTask[i].style.display = "none"  : void 0 ;
    });
  }
}
function highlight() {
  var buttons = document.querySelectorAll('.menu-tabs button');
  [].forEach.call(buttons,function(item,i){
    buttons[i].className -= 'highlight';
  });
  this.className = 'highlight';
}
mainTodos = new Todo();
function id(id) {
  return document.getElementById(id);
}
id('clear-completed').addEventListener('click',clearCompleted);
id('show-completed').addEventListener('click',showCompleted);
id('all').addEventListener('click',showAll);
id('show-active').addEventListener('click',showActive);
id('show-completed').addEventListener('click',highlight);
id('all').addEventListener('click',highlight);
id('show-active').addEventListener('click',highlight);
form.addEventListener('submit',addTask);
