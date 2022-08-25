
const addItemButton = document.querySelector('#fillRow');
const variables = document.querySelectorAll('.input');
const allTasks = [];
const listGrid = document.querySelector('.listGrid');
const gridItems = document.querySelector('.gridItems');
let counter = 0
const tempArray = [];

 export const addRowFromStorage = () => {
    const lastSave = localStorage.getItem('project');

    const loadArray = lastSave !== null ? lastSave.split(',') : [];

   
    
    while (loadArray.length > 0) {
    
    counter += 1; 
    const row = document.createElement('div');
   
    const title = document.createElement('div');
    const description = document.createElement('div');
    const dueDate = document.createElement('div');
    const priority = document.createElement('div');
    const notes = document.createElement('div');

    listGrid.insertBefore(row, gridItems);

    row.classList.add(`${counter}`);


    row.appendChild(title);
    row.appendChild(description);
    row.appendChild(dueDate);
    row.appendChild(priority);
    row.appendChild(notes);

 title.textContent = loadArray.splice(0, 1);
 description.textContent = loadArray.splice(0, 1);
 dueDate.textContent = loadArray.splice(0, 1);
 priority.textContent = loadArray.splice(0, 1);
 notes.textContent = loadArray.splice(0, 1);

    
    };

    }