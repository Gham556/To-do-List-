const addItemButton = document.querySelector('#fillRow');
const variables = document.querySelectorAll('.input');
const allTasks = [];
const listGrid = document.querySelector('.listGrid');
const gridItems = document.querySelector('.gridItems');

export const currentItem = function (title, description, dueDate, priority, notes) {
    this.title = title
    this.description = description; 
    this.dueDate = dueDate;
    this.priority = priority; 
    this.notes = notes; 
}


export function addItem () {
    const currentTask = [];
    for (let item of variables) {
        allTasks.push(item.value);
        currentTask.push(item.value);
    } 

    const currentRow = new currentItem(currentTask[0], currentTask[1], currentTask[2], currentTask[3], currentTask[4]);
    return {currentRow}
}
