const addBut = document.getElementById("addTask")
const inputBut = document.getElementById("taskInput")
var list = document.getElementById("taskList")

let i=1;

function addTask(){
    var textInput = document.getElementById("taskInput").value;
    if(textInput){
        var entry = document.createElement('li');

        var completeBut = document.createElement('button');
        var deleteBut = document.createElement('button');

        completeBut.setAttribute('id', 'item'+i);
        completeBut.setAttribute('onclick', "completeFunc(this.id)")
        deleteBut.setAttribute('onclick', "deleteFunc(this.id)")
        deleteBut.setAttribute('id', 'item'+i);
        //completeBut.addEventListener("click", deleteFunc(completeBut.id))

        completeBut.innerText = "COMPLETE";
        deleteBut.innerText = "DELETE";

        completeBut.style.margin = "5px";
        deleteBut.style.margin = "5px";

        entry.appendChild(document.createTextNode(textInput));
        entry.appendChild(completeBut);
        entry.appendChild(deleteBut);

        list.appendChild(entry);
        i++;
    }
}
function deleteFunc(id){
    var elem = document.getElementById(id)
    var parent = elem.parentNode
    parent.remove();
}
function completeFunc(id){
    var elem = document.getElementById(id);
    var parent = elem.parentNode;
    parent.style.textDecoration = "line-through"
}