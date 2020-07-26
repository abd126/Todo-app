var list = document.getElementById('list')

function Add(){
    var Todo = document.getElementById('todo');
    var li = document.createElement('li')
    var liTxt = document.createTextNode(Todo.value + " ")
    li.appendChild(liTxt)
    list.appendChild(li)
    Todo.value = ""    

    // Delet Button

    var dltBtn = document.createElement('button')
    var dltTxt = document.createTextNode('Delet Todo ')
    dltBtn.setAttribute("onclick" , "dltBtn(this)")
    dltBtn.setAttribute("class" , "btn dltBtn")
    dltBtn.appendChild(dltTxt)
    li.appendChild(dltBtn)

    // Edit button

    var EditBtn = document.createElement('button')
    var EditTxt = document.createTextNode('Edit Todo ')
    EditBtn.setAttribute("onclick" , "editBtn(this)")
    EditBtn.setAttribute("class" , "btn editBtn")
    EditBtn.appendChild(EditTxt)
    li.appendChild(EditBtn)

    console.log(li)



}

function dltBtn(d){
    d.parentNode.remove()
}

function DeletAll(){
    list.innerHTML = ""
}

function editBtn(e){
    var edtval = prompt("Enter Updated Value " , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edtval;

    
}


