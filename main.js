// SELECTORES


// nameInput.addEventListener("input", handleInput)
// phoneInput.addEventListener("input", handleInput)
// rifasInput.addEventListener("input", handleInput)





// 1.Se agrego un listener en el boton para que al momento de hacer click ejecute la tarea "create"
const addButton = document.getElementById("add")
addButton.addEventListener("click", create)
let tareas = []


let editBtn = false
let idEditBtn = null

const nameInput = document.getElementById("name")
const phoneInput = document.getElementById("phone")
const rifasInput = document.getElementById("rifas")
const editButton = document.getElementById("edit");
editButton.addEventListener("click", edit);

// 2. Create: con preventDefault se evita que por defecto recargue la página.
// 
function create(event) {
    event.preventDefault()
    const tarea = readForm()
    tareas.push(tarea)
    createRow(tarea)
    clearForm()
    saveDataLS()
    console.log(tareas)

}

// 3. readForm: obtiene todos los imputs del formulario
    //armamos un objeto donde se asigna un valor a las propiedads
    //push al array de Tareas 
    // retorna el objeto 
function readForm() {
        let id = Date.now();
      
        if (editBtn && idEditBtn !== null) {
          id = idEditBtn;
        }
      
        const tarea = {
          id: id,
          name: nameInput.value,
          phone: phoneInput.value,
          rifas: rifasInput.value,
        };
      
        return tarea;
      }
      

// 4. Agrega una fila al html 
function createRow(tarea) {
    const tbody = document.getElementById ('tbody')

    tbody.innerHTML += `
        <tr>
            <td class="centrar">${tarea.name}</td>
            <td class="centrar">${tarea.phone}</td>
            <td class="centrar">${tarea.rifas}</td>
            <td class="centrar">
            <button onclick = "editRow('${tarea.id}')"<i class="fa fa-pencil-square-o btn btn-success"></i></button>
            <button onclick = "deleteRow('${tarea.id}')"<i class="fa fa-times-circle-o btn btn-danger"></i></button>
        </td>
        </tr>
        `
}

// 5. clerForm: hace que todos los campos vuelvan a quedar en blanco
function clearForm() {
    const form = document.getElementById("form");
    form.reset()
}

//6. saveDataLS: para que la info se almacene en local storage
    //Toma el arry "tareas" y como solo podemos usar arrys de stings usamos el metodo
    //JSON.stingify para transformarlo en string.
function saveDataLS() {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }

//7. readFormLS: lee desde local storage. Única funcion que se ejecuta como primera acción
        //   function readFromLS() {
        //     let tareas
        //     if (JSON.parse(localStorage.getItem(tareas)) !=null) {
        //         tareas = JSON.parse(localStorage.getItem(tareas))
        //     } else {
        //         tareas = []
        //     }

        //     function readFromLS() {
        //     tareas = JSON.parse(localStorage.getItem(tareas)) || []
        //     tareas.forEach((el) => createRow(el))
        //   }
        function readFromLS() {
            const tareasLS = JSON.parse(localStorage.getItem('tareas'));
    if (tareasLS) {
        tareas = tareasLS
        tareas.forEach((tarea) => createRow(tarea));
    } else {
        tareas = []
    }
}
          

  //8. deleteRow: Esta función elimina una tarea del array de la lista de tareas y actualiza la tabla.
  function deleteRow(id) {
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas.splice(index, 1)
    saveDataLS()
    readFromLS()
    const tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    tareas.forEach((tarea) => createRow(tarea))
  }
  
// editRow: Esta función prepara el formulario para editar una tarea. Oculta el botón "agregar" y muestra el botón "editar", llena el formulario con los datos de la tarea y establece las variables editBtn e idEditBtn en true.
function editRow(id) {
    addButton.classList.add("hide");
    editButton.classList.remove("hide");
  
    const index = tareas.findIndex((tarea) => tarea.id == id);
    const tarea = tareas[index];
  
    nameInput.value = tarea.name
    phoneInput.value = tarea.phone
    rifasInput.value = tarea.rifas
  
    editBtn = true
    idEditBtn = id
  }
  

  function edit(event) {
    event.preventDefault()

    const tarea = readForm()
    const index = tareas.findIndex((taread) => taread.id == tarea.id);
    tareas[index] = tarea;
    console.log(index)

    const row = document.getElementById(tarea.id)
    row.innerHTML = `
            <tr>
            <td class="centrar">${tarea.name}</td>
            <td class="centrar">${tarea.phone}</td>
            <td class="centrar">${tarea.rifas}</td>
            <td class="centrar">
            <button onclick = "editRow('${tarea.id}')"<i class="fa fa-pencil-square-o btn btn-success"></i></button>
            <button onclick = "deleteRow('${tarea.id}')"<i class="fa fa-times-circle-o btn btn-danger"></i></button>
        </td>
        </tr>
        `

    saveDataLS()
    clearForm()

    addButton.classList.remove("hide")
    editButton.classList.add("hide")

    idEditBtn = null
    editBtn = false

    readFromLS()
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