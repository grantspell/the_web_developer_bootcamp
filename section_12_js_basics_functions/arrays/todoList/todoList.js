var todos = []
// setTimeout alllows HTML to load before JavaScript
setTimeout(function () {
    var input = prompt("What would you like to do?")

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            newTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
    console.log("OK, YOU QUIT THE APP");
}, 500);

function listTodos() {
    todos.forEach(function (todo, i) {
        console.log("**********");
        console.log(i + ". " + todo);
        console.log("**********");
    })
};

function newTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log(newTodo + " was added to your todo list!")
}

function deleteTodo() {
    var todoIndexD = prompt("Enter todo index #")
    todos.splice(todoIndexD, 1);
    console.log("Todo was deleted!")
}