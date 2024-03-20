let addTask = document.getElementById("plus");
let taskList = document.querySelector(".content > ul");

//Evento para criar input que recebera nova task
addTask.addEventListener("click", event =>{
    let inp = document.createElement("input");
    inp.setAttribute("type","text");

    let newTask = document.createElement("li");
    document.querySelector(".content > ul").appendChild(newTask);
    document.querySelector(".content > ul").appendChild(inp);

    //Evento que atribui o valor recebido do usuario à nova task e exclui o respectivo input
    inp.addEventListener("keydown", event =>{
        if(event.key == 'Enter') {
            newTask.innerHTML += `<input type="checkbox"> `
            newTask.innerHTML += event.target.value
            inp.remove();
        }
    })
})