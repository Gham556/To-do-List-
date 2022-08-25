import './style.css';
import { addItem, addRow } from './addItemButton.js';
import { addRowFromStorage } from './localStorageController.js';
import { saveList, addProject } from './saveButton.js';
import { switchTabs } from './switchProjectTab.js'

const TEXT = document.createElement('p');
const variables = document.querySelectorAll('.input');
const addItemButton = document.querySelector('#fillRow');
const dropwDown = document.querySelector('select');
const form = document.querySelector('form');
const saveButton = document.querySelector('#saveList');
const newProject = document.querySelector('#newProject');
const projectController = localStorage.getItem('allProjects');
const allProjectsArray = projectController !== null ? projectController.split(',') : [];
const header = document.querySelector('.header');
const projectTabs = document.querySelector('.projectTabs');
const projectName = document.querySelector('.projectName');

const currentItem = function (title, description, dueDate, priority, notes) {
    this.title = title
    this.description = description; 
    this.dueDate = dueDate;
    this.priority = priority; 
    this.notes = notes; 
}

const loadTabs = function loadSavedLists () {
    
    projectName.value = localStorage.getItem('loading');   
   

    for (let x of allProjectsArray) {
        const projectTab = document.createElement ('h2');
        projectTab.textContent = x === projectName.value ? '' : x;
        projectTabs.appendChild(projectTab);

        projectTab.addEventListener('click', switchTabs)
    }
}



addItemButton.addEventListener('click', addItem);
addItemButton.addEventListener('click', addRow);
const clearFormField = addItemButton.addEventListener('click', () => {
    form.reset();
})



window.addEventListener('DOMContentLoaded', addRowFromStorage);
window.addEventListener('DOMContentLoaded', loadTabs);

saveButton.addEventListener('click', saveList);
newProject.addEventListener('click', addProject);

