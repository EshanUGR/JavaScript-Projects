const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12--22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12--22",
  },
];
renderToDoList();

function renderToDoList() {
  let todoListHTML = "";


  todoListHTML.forEach((todoObject,index)=>
{
    // const name=todoObject.name;
    // const dueDate=todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    
    <div>${name} </div>
    <div>${dueDate}</div>
    <div><button onClick="
    todoList.splice(${index},1);
    renderToDoList();
    " class="delete-todo-button js-delete-todo-button">Delete</button></div>
    `;
    todoListHTML += html;
  }


);
  
 

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>
{
  deleteButton.addEventListener('click',()=>
  {
    todoList.splice(index,1);
    renderToDoList();
  });
})
}




document.querySelector('.js-add-todo-button').addEventListener('click',()=>
{
addTodo();

});








function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const deleteInputElement = document.querySelector(".js-due-date-input");

  const dueDate = deleteInputElement.value;

  todoList.push({
    name: name,
    dueDate,
    dueDate,
    // name,
    // dueDate
  });

  console.log(todoList);
  inputElement.value = "";

  renderToDoList();
}
