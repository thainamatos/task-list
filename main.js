window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input =  document.querySelector("#new-task-input");
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

        taskEl.appendChild(taskContentEl); //insere um novo nó na estrutura DOM; acrescenta ao elemento selecionado o que for declarado dentro dos parenteses  

        listEl.appendChild(taskEl);
    })
})
