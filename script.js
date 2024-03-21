//Content Section

let addTask = document.getElementById("plus");
let taskList = document.querySelector(".content > ul");
let x, inp, editInp;
let edit, editIcons, editedTask;


let limit = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

//Evento para criar input que recebera nova task
addTask.addEventListener("click", event =>{
    inp = document.createElement("input");
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

            x.addEventListener("click", event => {
                deleteTask(newTask);
            })

            edit = document.createElement("p");
            edit.innerHTML = `<strong class="edit-icon">/</strong> Edit task`;
            edit.classList.add("edit");
            newTask.appendChild(edit);

            edit.addEventListener("click", event =>{
                editInp = document.createElement("input");
                createInput(editInp)
                editTask(editInp, newTask);
            })
            

            inp.remove();
        }
    })
})

function createInput(editInp) {
    editInp.setAttribute("type","text");
    editInp.setAttribute("maxlength", limit.length - 2);
    editInp.setAttribute("size", limit.length - 2);
    document.querySelector(".content > ul").appendChild(editInp);
}

function editTask(editInp, newTask) {
    editInp.addEventListener("keydown", event => {
        if (event.key == "Enter") {
            newTask.innerHTML = `<input type="checkbox">`
            newTask.innerHTML += event.target.value

            x = document.createElement("p");
            x.textContent = `-`
            x.classList.add("x-class")
            newTask.appendChild(x)

            x.addEventListener("click", event => {
                deleteTask(newTask);
            })

            edit = document.createElement("p");
            edit.innerHTML = `<strong class="edit-icon">/</strong> Edit task`;
            edit.classList.add("edit");
            newTask.appendChild(edit);

            edit.addEventListener("click", event =>{
                editInp = document.createElement("input");
                createInput(editInp)
                editTask(editInp, newTask);
            })

            editInp.remove();
        }
    })
}

function deleteTask(newTask) {
    newTask.remove();
}

//Menu Section

let menuList = document.querySelector("#arrow-menu > ul");
let arrowIcon = document.querySelector("#arrow-menu > i");

//evento para colapsar menu
arrowIcon.addEventListener("click", event =>{
    menuList.classList.toggle("collapsed")
    arrowIcon.classList.toggle("down")
})

