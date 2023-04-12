// SELECTORES


// nameInput.addEventListener("input", handleInput)
// phoneInput.addEventListener("input", handleInput)
// rifasInput.addEventListener("input", handleInput)


const addButton = document.getElementById("add")
addButton.addEventListener("click", create)
const tareas = []

function create(event) {
    event.preventDefault()
    const tarea = readForm()
    createRow(tarea)

}

function readForm () {
    const nameInput = document.getElementById("name")
    const phoneInput = document.getElementById("phone")
    const rifasInput = document.getElementById("rifas")

    const tarea = {
        name: nameInput.value,
        phone: phoneInput.value,
        rifas: rifasInput.value
    }
    return tarea
}

function limpiarFormulario () {}

function llenarTabla () {}

function createRow(tarea) {
    const tbody = document.getElementById ('tbody')

    tbody.innerHTML += `
        <tr>
            <td class="centrar">${tarea.name}</td>
            <td class="centrar">${tarea.phone}</td>
            <td class="centrar">${tarea.rifas}</td>
            <button class="delete">x</button>
        </tr>
        `
}




// const addButton = document.getElementById("delete")
// addButton.addEventListener("click", handleClick)

// function handleClick(event) {
//     event.preventDefault()
//     const tarea = {
//         name: nameInput.value,
//         phone: phoneInput.value,
//         rifas: rifasInput.value
//     }
//     console.log(tarea)
//}


// EVENTOS
// let tarea = {}

// function handleInput(event) {
//     const { value, id } = event.target
//     tarea = {
//         ...tarea,
//         [id]: value
//     }
//     console.log(tarea)
// }

//addButton.addEventListener("click",)