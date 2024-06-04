
let todoList=[];
function addTodo(){
    let TodoInput=document.querySelector('#todoInput');
    let DateInput=document.querySelector("#inputDate")
    let Todo=TodoInput.value;
    let date=DateInput.value;
    if(Todo!=''){
        if(date==''){
            date=new Date();
        };
        todoList.push({Task:Todo,time:date});
        TodoInput.value='';
        DateInput.value='';
        displayTodo();
    }
}
function displayTodo(){
    let box=document.querySelector('.output-sec');
    let newHtml='';
    for(i=0;i<todoList.length;i++){
        newHtml+= `
                   <span class="output-todo">${todoList[i].Task}</span>
                   <span class="output-todo">${todoList[i].time}</span>
                   <button onclick="editTodo(${i})" class="delButton"> Edit</button>
                   <button onclick="todoList.splice(${i},1); displayTodo()" class="delButton"> Delete</button>                  
                   `;
    }
    box.innerHTML=newHtml;
}