(function(){
    // Variables
    var list = document.getElementById("list");
    var textInput = document.getElementById("textInput");
    var button = document.getElementById("buttonAdd");

    //Functions
    var addTask = function(){
        var task = textInput.value;
        var newTask = document.createElement("li");
        var link = document.createElement("a");
        var content = document.createTextNode(task);

        if(task==""){
            textInput.setAttribute("placeholder","Add a valid task");
            textInput.className = "error";
            return false;
        }

        link.appendChild(content); //Add content to link
        link.setAttribute("href", "#"); //Add link to the new a
        newTask.appendChild(link);
        list.appendChild(newTask);

        textInput.value = ""; //Clean text input

        for(var i=0; i<list.children.length;i++){
            list.children[i].addEventListener("click", deleteTask);
        }

        textInput.focus();
    };

    var addTaskEnter = function(e){
        if(e.key === "Enter"){
            e.preventDefault();
            addTask();
        }
    };

    var checkInput = function(){
        textInput.className = "";
        textInput.setAttribute("placeholder", "Add a task");
    };

    var deleteTask = function(){
        this.parentNode.removeChild(this);
    };

    //Events
    button.addEventListener("click", addTask);
    textInput.addEventListener("click", checkInput);
    textInput.addEventListener("keydown", addTaskEnter);
    for(var i=0; i<list.children.length;i++){
        list.children[i].addEventListener("click", deleteTask);
    }
}());