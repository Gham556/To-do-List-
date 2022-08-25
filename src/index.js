import './style.css';
import { addItem, addRow } from './addItemButton.js';
import { addRowFromStorage } from './localStorageController.js';
import { saveList, addProject, loadTabs } from './saveButton.js';


const TEXT = document.createElement('p');
const variables = document.querySelectorAll('.input');
const addItemButton = document.querySelector('#fillRow');
const dropwDown = document.querySelector('select');
const form = document.querySelector('form');
const saveButton = document.querySelector('#saveList');
const newProject = document.querySelector('#newProject');



const header = document.querySelector('.header');


const currentItem = function (title, description, dueDate, priority, notes) {
    this.title = title
    this.description = description; 
    this.dueDate = dueDate;
    this.priority = priority; 
    this.notes = notes; 
}

addItemButton.addEventListener('click', addItem);
addItemButton.addEventListener('click', addRow);
const clearFormField = addItemButton.addEventListener('click', () => {
    form.reset();
    console.log('test')
})



window.addEventListener('DOMContentLoaded', addRowFromStorage);
window.addEventListener('DOMContentLoaded', loadTabs);

saveButton.addEventListener('click', saveList);
newProject.addEventListener('click', addProject);