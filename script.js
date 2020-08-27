const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let contador = 1;
let pendiente = 0;

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  let tarea = document.createElement("input");
  tarea.classname = classNames.TODO_CHECKBOX;
  tarea.type = "checkbox";

  tarea.addEventListener('change', (event) => {
    if (event.target.checked == true) {
      revisar();
    } else if (event.target.checked == false) {
      revisar();
    }
  })
  let lista = document.createElement("li");
  let nombre = document.createElement("span");
  nombre.setAttribute("editable", true);
  nombre.innerHTML = `Tarea Nro. ${contador++}`;  
  itemCountSpan.innerHTML = contador-1;
  lista.appendChild(tarea);
  lista.appendChild(nombre);
  list.appendChild(lista);
  revisar();
}

 

function revisar(){
  
  let checkeado = document.getElementsByTagName("input");
  pendiente = checkeado.length;
  for (let index = 0; index < checkeado.length; index++) {
    const element = checkeado[index];
    if(element.checked == true){
      pendiente--
    }
  }  
    uncheckedCountSpan.innerHTML = pendiente;
}
