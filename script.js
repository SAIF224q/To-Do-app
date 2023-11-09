let input = document.getElementById("input") ; 
let list = document.getElementById("elements")


function addElement(){
    let toDo_element = document.createElement("li")
    let done_button = document.createElement("button")

    let inputValue = input.value
    toDo_element.innerHTML = inputValue;
    done_button.innerText = "DONE";
    toDo_element.setAttribute("class","to-do-element")
    done_button.setAttribute("class","done");
    list.append(toDo_element);
    toDo_element.append(done_button)
    input.value = ""    

    done_button.addEventListener("click", function () {
        toDo_element.parentNode.removeChild(toDo_element);
    });
}





