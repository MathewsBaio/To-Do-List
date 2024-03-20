let addTask = document.getElementById("plus");
let taskList = document.querySelector(".content > ul");
let x 
let edit;

let limit = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

//Evento para criar input que recebera nova task
addTask.addEventListener("click", event =>{
    let inp = document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("maxlength", limit.length - 2)
    inp.setAttribute("size", limit.length - 2)

    let newTask = document.createElement("li");
    document.querySelector(".content > ul").appendChild(newTask);
    document.querySelector(".content > ul").appendChild(inp);

    //Evento que atribui o valor recebido do usuario à nova task e exclui o respectivo input
    inp.addEventListener("keydown", event =>{
        if(event.key == 'Enter') {
            newTask.innerHTML += `<input type="checkbox"> `
            newTask.innerHTML += event.target.value
            
            x = document.createElement("p");
            x.textContent = `-`
            x.classList.add("x-class")
            newTask.appendChild(x)

            edit = document.createElement("p");
            edit.innerHTML = `<strong class="edit-icon">/</strong> Edit task`
            edit.classList.add("edit")
            newTask.appendChild(edit);

            inp.remove();
        }
    })
})