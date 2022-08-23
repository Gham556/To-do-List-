import { currentItem } from './addItemButton';

const addItemButton = document.querySelector('#fillRow');
const variables = document.querySelectorAll('.input');
const allTasks = [];
const listGrid = document.querySelector('.listGrid');
const gridItems = document.querySelector('.gridItems');
let counter = 0;

// export const addRow = () => {
    
//     counter += 1; 
//     const row = document.createElement('div');
//     row.classList.add(`${counter}`);
//     listGrid.appendChild(row);
//     const title = document.createElement('div');
//     const description = document.createElement('div');
//     const dueDate = document.createElement('div');
//     const priotirty = document.createElement('div');
//     const notes = document.createElement('div');

//     row.appendChild(title);
//     row.appendChild(description);
//     row.appendChild(dueDate);
//     row.appendChild(priotirty);
//     row.appendChild(notes);

//     console.log(currentRow)
// }