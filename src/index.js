import './style.scss'

//Theme Switcher
const themeSwitcher = document.querySelector("input")
const addTaskModal = document.querySelector(".addTaskModal")

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
const closeButtons = Array.from(document.querySelectorAll(".closeModal"))

closeButtons.forEach(element => {
    if(element.classList.contains("bottomModal")) {
        element.addEventListener("click",  () => closeModal(showTaskModal))
    } else {
        element.addEventListener("click",  () => closeModal(addTaskModal))
    }
    
});

addTaskButton.addEventListener("click",  () => openModal(addTaskModal))


function closeModal(modal) {
    modal.setAttribute("open", false);
}

function openModal(modal) {
    modal.setAttribute("open", true);
}


//Add Task

//Task Data
const title = document.querySelector("#Title")
const description = document.querySelector("#Description")
const dueDate = document.querySelector("#DueDate")
const priority = document.querySelector("#Priority")
const values = [title, description, dueDate, priority]

//Task Items
const taskBar = document.querySelector(".tasks")
let existingTasks = {}
let close = true

//showTask Modal
const showTaskModal = document.querySelector(".showTaskModal")
const taskModalInfo = document.querySelector(".info")



function addTask() {
    formCheck()
    if(addTaskModal.getAttribute("open") == "false") {
        existingTasks[title.value] = new Task(title.value, description.value, dueDate.value, priority.value)
        console.log(existingTasks)
        let titleText = title.value
        let newTask = document.createElement("button")
        newTask.innerText = title.value

        newTask.classList.add("task")
        newTask.addEventListener("click", () => showTaskInfo(existingTasks[titleText]))
        taskBar.appendChild(newTask)
        cleanInputs()
        
    }
    

    
}

function formCheck() {
    
    

    
    values.forEach(element => {
        if(element.value == "") {
            element.setAttribute("aria-invalid", true)
            close = false
        } else {
            element.setAttribute("aria-invalid", false)
        }
    });
    if (close) {
        closeModal(addTaskModal)
        
    }
   

}

function showTaskInfo(info) {
    taskModalInfo.innerHTML = `<p>Title: ${info.title}</p> <p>Description: ${info.description}</p> <p>DueDate: ${info.dueDate}</p> <p>Priority: ${info.priority}</p>`
    openModal(showTaskModal)

}
function cleanInputs() {
    values.forEach(element => {
        element.value = ""
        element.setAttribute("aria-invalid", undefined)
    });
    close = true

}


confirmButton.addEventListener("click", () => addTask())




