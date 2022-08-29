const ul = document.querySelector("ul");
const itemToAdd = document.getElementById('task');
const form = document.querySelector('#additem');
const saveTodos = JSON.parse(localStorage.getItem("toDoList")) || [];


for(let i = 0; i < saveTodos.length;i++){
    const newItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    newItem.innerText = saveTodos[i].task;
    newItem.isCompleted = saveTodos[i].isCompleted ? true : false;
    newItem.appendChild(removeBtn);
    removeBtn.innerText="Remove Item"
    newItem.classList.add("todo")
    console.log(newItem.isCompleted);
    if(newItem.isCompleted){
        newItem.classList.toggle("completed");
        newItem.isCompleted=true;
        console.log(newItem.isCompleted);
    }
    ul.appendChild(newItem);

}

ul.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        e.target.isCompleted = true;
        
    }

    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        localStorage.removeItem(e.target.parentElement);
    }
    
})

form.addEventListener('submit', function(e){
e.preventDefault();
const newItem = document.createElement('li');
const removeBtn = document.createElement('button');

newItem.innerText = itemToAdd.value;
newItem.isCompleted = false;
ul.appendChild(newItem);

saveTodos.push({ task: newItem.innerText, isCompleted: newItem.isCompleted });
localStorage.setItem("toDoList", JSON.stringify(saveTodos));

newItem.appendChild(removeBtn);
removeBtn.innerText="Remove Item"

newItem.classList.add("todo");
itemToAdd.value ="";

});



