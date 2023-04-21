// SELECTORES


// nameInput.addEventListener("input", handleInput)
// phoneInput.addEventListener("input", handleInput)
// rifasInput.addEventListener("input", handleInput)





// 1.Se agrego un listener en el boton para que al momento de hacer click ejecute la tarea "create"
const addButton = document.getElementById("add")
addButton.addEventListener("click", create)
let tareas = []

// 2. Create: con preventDefault se evita que por defecto recargue la página.
// 
function create(event) {
    event.preventDefault()
    const tarea = readForm()
    createRow(tarea)
    clearForm()
    saveDataLS()

}

// 3. readForm: obtiene todos los imputs del formulario
    //armamos un objeto donde se asigna un valor a las propiedads
    //push al array de Tareas 
    // retorna el objeto 
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


// 4. Agrega una fila al html 
function createRow(tarea) {
    const tbody = document.getElementById ('tbody')

    tbody.innerHTML += `
        <tr>
            <td class="centrar">${tarea.name}</td>
            <td class="centrar">${tarea.phone}</td>
            <td class="centrar">${tarea.rifas}</td>
            <td class="centrar">
            <button type="button" class="btn btn-success"><i class="fa fa-pencil-square-o"(${tarea.id})></i></button>
            <button type="button" class="btn btn-danger"><i class="fa fa-times-circle-o"(${tarea.id})></i></button>
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
    function readFromLS() {
    tareas = JSON.parse(localStorage.getItem(tareas)) || []
    tareas.forEach((el) => createRow(el))

  }

  function deleteRow(id) {
    const index = tareas.findIndex((tarea) => tarea.id == id);
    tareas.splice(index, 1);
    saveDataLS();
    readFromLS();
    tbody.innerHTML = "";
    tareas.forEach((tarea) => createRow(tarea));
}
  

  function editRow(id) {
    addButton.classList.add("hide")
    editButton.classList.remove("hide")
    const index = tareas.findIndex((tarea) => tarea.id == id);
    const tarea = tareas[index]

    productsInput.value = tarea.name;
    unitsInput.value = tarea.phone;
    categoryInput.value = tarea.rifas;

    editBtn = true;
    idEditBtn = id;

}

function edit(e) {
    e.preventDefault()
    const respuesta = formulario()
    const index = tareas.findIndex((tarea) => tarea.id == respuesta.id);
    tareas[index] = respuesta;
    console.log(index)
    saveDataLS();
    clearForm();

    addButton.classList.remove("hide");
    editButton.classList.add("hide");

    idEditBtn = null;
    editBtn = false;
    

    tbody.innerHTML = "";
    readFromLS();
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