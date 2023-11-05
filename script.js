let input = document.getElementById("input") ; 
let list = document.getElementById("elements")

function addElement(){
    let toDo_element = document.createElement("li")
    let inputValue = input.value
    toDo_element.innerHTML = inputValue;
    list.appendChild(toDo_element);
    input.value = ""    
}