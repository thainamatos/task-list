window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listEl = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //impede de atualizar a pagina

        const task = input.value; 

        if (!task){
            alert("Please, fill out the task")
            return;
        }

        const taskEl =  document.createElement("div"); //permite criar elementos DOM que podem ser inseridas na pagina
        taskEl.classList.add("task"); //adiciona uma classe 

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content"); 
        //taskContentEl.innerText = task; 

        taskEl.appendChild(taskContentEl); //insere um novo nó na estrutura DOM; acrescenta ao elemento selecionado o que for declarado dentro dos parenteses  

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        taskContentEl.appendChild(taskInputEl);

        const taskActionsEl = document.createElement("div");
        taskActionsEl.classList.add("actions");

        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "Edit";

        const taskDeleteEl = document.createElement("button");
        taskDeleteEl.classList.add("delete");
        taskDeleteEl.innerHTML = "Delete";

        taskActionsEl.appendChild(taskEditEl);
        taskActionsEl.appendChild(taskDeleteEl);

        taskEl.appendChild(taskActionsEl);

        listEl.appendChild(taskEl);

        input.value = "";

        taskEditEl.addEventListener('click', () => {
            taskInputEl.removeAttribute("readonly"); //permite que seja alterado/editado dentro do input
            taskInputEl.focus();
            taskEditEl.innerText = "Save"; //altera de EDIT para SAVE enquanto a task estiver sendo editada
        })
    })
})
