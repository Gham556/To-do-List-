
const saveButton = document.querySelector('#saveList');
const projectName = document.querySelector('.projectName');
const newProject = document.querySelector('#newProject');
const deleteButton = document.querySelector('#deleteButton');
const projectTabs = document.querySelector('.projectTabs');
const projectTitle = projectName.value;
const projectController = localStorage.getItem('allProjects');

const allProjectsArray = projectController !== null ? projectController.split(',') : [];

const nameListPair = function (name, list) {
    this.name = name; 
    this.list = list; 

    localStorage.setItem(name, list);
}

const newProjectName = () => {
    alert ('nameExists');
}

export const saveList = function commitWholeListToLocalStorageUnderProjectName () {
   const savedProject = structuredClone(localStorage.getItem('project'));

    
    const savePair = new nameListPair(projectTitle, savedProject);

    console.log(localStorage.getItem(projectTitle));

   localStorage.clear('allprojects')
}

export const addProject = function clearDOMContentAndSaveList () {
    saveList();
    allProjectsArray.includes(projectName.value) === true ?  newProjectName() : allProjectsArray.push(projectName.value);
    localStorage.setItem('allProjects', allProjectsArray);
    localStorage.removeItem('project');
    console.log(localStorage.getItem('allProjects'));
    location.reload();  

   

};


export const loadTabs = function loadSavedLists () {
    
    console.log(allProjectsArray)

    for (let x of allProjectsArray) {
        const projectTab = document.createElement ('h2');

        projectTab.textContent = x;

        projectTabs.appendChild(projectTab);

    }
}
