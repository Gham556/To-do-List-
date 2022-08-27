
const saveButton = document.querySelector('#saveList');
const projectName = document.querySelector('.projectName');
const newProject = document.querySelector('#newProject');
const deleteButton = document.querySelector('#deleteButton');


const projectController = localStorage.getItem('allProjects');

const allProjectsArray = projectController !== null ? projectController.split(',') : [];


const newProjectName = () => {
    alert ('nameExists');
}

export const saveList = function commitWholeListToLocalStorageUnderProjectName () {
    const projectTitle = projectName.value;
    const savedProject = localStorage.getItem('project');
    localStorage.setItem(projectTitle, savedProject);
};

export const addProject = function clearDOMContentAndSaveList () {
    const projectTitle = projectName.value;
    const savedProject = structuredClone(localStorage.getItem('project'));
    localStorage.setItem(projectTitle, savedProject);
    console.log(projectTitle);
    allProjectsArray.includes(projectName.value) === true ?  newProjectName() : allProjectsArray.push(projectName.value);
    localStorage.setItem('allProjects', allProjectsArray);
    localStorage.removeItem('project');
   
    location.reload();  

   

};





