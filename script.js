let addTask = document.getElementById("plus");
let taskList = document.querySelector(".content > ul");
let container = document.getElementsByClassName("content")

addTask.addEventListener("click", event =>{
    let inp = document.createElement("input");
    inp.setAttribute("type","text");

    let newTask = document.createElement("li");
    document.querySelector(".content > ul").appendChild(newTask);
    document.querySelector(".content > ul").appendChild(inp);


    inp.addEventListener("keydown", event =>{
        if(event.key == 'Enter') {
            newTask.innerHTML += `<input type="checkbox"> `   
            newTask.innerHTML += event.target.value
            inp.remove();
        }
    })
})