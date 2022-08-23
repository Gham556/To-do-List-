const addItemButton = document.querySelector('#fillRow');
const variables = document.querySelectorAll('.input');
const allTasks = [];
const currentTask = [];
const listGrid = document.querySelector('.listGrid');
const gridItems = document.querySelector('.gridItems');
let counter = 0;

export const currentItem = function (title, description, dueDate, priority, notes) {
    this.title = title
    this.description = description; 
    this.dueDate = dueDate;
    this.priority = priority; 
    this.notes = notes; 
}


export function addItem () {
   
    for (let item of variables) {
        allTasks.push(item.value);
        currentTask.push(item.value);
    }    
    
}



export const addRow = () => {
    
    const currentRow = new currentItem(currentTask[0], currentTask[1], currentTask[2], currentTask[3], currentTask[4])

    counter += 1; 
    const row = document.createElement('div');
    row.classList.add(`${counter}`);
    listGrid.appendChild(row);
    const title = document.createElement('div');
    const description = document.createElement('div');
    const dueDate = document.createElement('div');
    const priority = document.createElement('div');
    const notes = document.createElement('div');

    listGrid.insertBefore(row, gridItems);

    row.appendChild(title);
    row.appendChild(description);
    row.appendChild(dueDate);
    row.appendChild(priority);
    row.appendChild(notes);

    title.textContent = currentRow.title;
    description.textContent = currentRow.description;
    dueDate.textContent = currentRow.dueDate;
    priority.textContent = currentRow.priority;

    console.log(currentRow);

}
