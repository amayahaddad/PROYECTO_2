
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


function create(event) {
    event.preventDefault()
    const tarea = readForm()
    tareas.push(tarea)
    createRow(tarea)
    clearForm()
    saveDataLS()
    console.log(tareas)

}

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


function saveDataLS() {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }


        function readFromLS() {
            const tareasLS = JSON.parse(localStorage.getItem('tareas'));
    if (tareasLS) {
        tareas = tareasLS
        tareas.forEach((tarea) => createRow(tarea));
    } else {
        tareas = []
    }
}
          

  function deleteRow(id) {
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas.splice(index, 1)
    saveDataLS()
    readFromLS()
    const tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    tareas.forEach((tarea) => createRow(tarea))
  }
  
function editRow(id) {
    addButton.classList.add("hide");
    editButton.classList.remove("hide");
  
    const index = tareas.findIndex((tarea) => tarea.id == id);
    const tarea = tareas[index];
  
    nameInput.value = tarea.name;
    phoneInput.value = tarea.phone;
    rifasInput.value = tarea.rifas;
  
    editBtn = true;
    idEditBtn = id;
  }
  

  function edit(event) {
    event.preventDefault();
  
    const tarea = readForm();
    const index = tareas.findIndex((t) => t.id == idEditBtn);
    tareas[index] = tarea;
  
    const row = document.getElementById(tarea.id);
    row.innerHTML = `
      <tr>
        <td class="centrar">${tarea.name}</td>
        <td class="centrar">${tarea.phone}</td>
        <td class="centrar">${tarea.rifas}</td>
        <td class="centrar">
          <button onclick="editRow('${tarea.id}')"><i class="fa fa-pencil-square-o btn btn-success"></i></button>
          <button onclick="deleteRow('${tarea.id}')"><i class="fa fa-times-circle-o btn btn-danger"></i></button>
        </td>
      </tr>
    `;
  
    saveDataLS();
    clearForm();
  
    addButton.classList.remove("hide");
    editButton.classList.add("hide");
  
    idEditBtn = null;
    editBtn = false;
  }
  


readFromLS()