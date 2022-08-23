import './style.css';
import { addItem } from './addItemButton.js';
import { addRow } from './DOMManipulator.js';


const TEXT = document.createElement('p');
const variables = document.querySelectorAll('.input');
const addItemButton = document.querySelector('#fillRow');
const dropwDown = document.querySelector('select');
let test;




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