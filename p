// SELECTORES


// nameInput.addEventListener("input", handleInput)
// phoneInput.addEventListener("input", handleInput)
// rifasInput.addEventListener("input", handleInput)


const addButton = document.getElementById("add")
addButton.addEventListener("click", create)

function create(event) {
    event.preventDefault()
    const tarea = readForm()
    createRow(tarea)
    clearForm()
    saveDataLS()
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
    tareas.push(tarea)
    return tarea
}

function createRow(tarea) {
    const tbody = document.getElementById('tbody')
  
    tbody.innerHTML += `
           <tr>
              <td>${tarea.name}</td>
              <td>${tarea.phone}</td>
              <td>${tarea.rifas}</td>
              <td>
                  <button class="edit">Editar</button>
                  <button class="delete">Eliminar</button>
              </td>
          </tr>
      `
  }

  function clearForm() {
    const form = document.getElementById('form')
    form.reset()
  }
  
  function saveDataLS() {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }
  
  function readFromLS() {
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.forEach((el) => createRow(el))
  }
  
  readFromLS()



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