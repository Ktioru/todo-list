import './style.scss'

const themeSwitcher = document.querySelector("input")
const modal = document.querySelector("dialog")
const cancelButton = document.querySelector("#cancel")
const closeButton = document.querySelector(".close")
const addTaskButton = document.querySelector("#addTask")
const confirmButton = document.querySelector("#confirm")



themeSwitcher.addEventListener("click", () => changeTheme())

function changeTheme() {
    if (document.querySelector("html").dataset["theme"] == "dark") {
        document.querySelector("html").dataset["theme"] = "light"
    } else {
        document.querySelector("html").dataset["theme"] = "dark"
    }
}

//Create tasks
function Task(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}


//Toggle Modal
closeButton.addEventListener("click",  () => closeModal())
cancelButton.addEventListener("click",  () => closeModal())
addTaskButton.addEventListener("click",  () => openModal())


function closeModal() {
    modal.setAttribute("open", false);
}

function openModal() {
    modal.setAttribute("open", true);
}


//Add Task
const title = document.querySelector("#Title")
const description = document.querySelector("#Description")
const dueDate = document.querySelector("#DueDate")
const priority = document.querySelector("#Priority")
const values = [title, description, dueDate, priority]

function addTask() {
    formCheck()
    if(modal.getAttribute("open") == "false") {
        const penisNovo = new Task(title.value, description.value, dueDate.value, priority.value)
        console.log(penisNovo)
        console.log("AAAAAAAAAAAAAAA")
        cleanInputs()
    }
    
    
}

function formCheck() {
    let close = true
    

    
    values.forEach(element => {
        if(element.value == "") {
            element.setAttribute("aria-invalid", true)
            close = false
        } else {
            element.setAttribute("aria-invalid", false)
        }
    });
    if (close) {
        closeModal()
        
    }
   

}
function cleanInputs() {
    values.forEach(element => {
        element.value = ""
        element.setAttribute("aria-invalid", undefined)
    });
    close = true

}


confirmButton.addEventListener("click", () => addTask())

