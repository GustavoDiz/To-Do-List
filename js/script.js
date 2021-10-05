let tasks = [];
let task = document.getElementById("task");
let board = document.getElementById("board");

function add(){
    let adicionar = task.value;
    tasks.push(adicionar);
    if(adicionar == ""){
        alert("Insira uma Tarefa")
    }else{
        for(i = 0;tasks.length > i;i++){

            var tarefa = tasks[i]
            
        }
        board.innerHTML += '<li onclick="del(this)" class="t p">'+ tarefa + '</li>';
        task.value = "";
    }
    task.value = "";
}

function del(element){
    element.style.display = "none";
}
