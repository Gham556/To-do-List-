
const saveButton = document.querySelector('#saveList');
const projectName = document.querySelector('#projectName');
const newProject = document.querySelector('#newProject');
const deleteButton = document.querySelector('#deleteButton');
const projectTabs = document.querySelector('.projectTabs');
const projectTitle = projectName.textContent;
const projectController = localStorage.getItem('allProjects');

const allProjects = projectController !== null ? [projectController] : [];

const nameListPair = function (name, list) {
    this.name = name; 
    this.list = list; 

    localStorage.setItem(name, list);
}


export const saveList = function commitWholeListToLocalStorageUnderProjectName () {
   const savedProject = structuredClone(localStorage.getItem('project'));

    
    const savePair = new nameListPair(projectTitle, savedProject);

    console.log(localStorage.getItem(projectTitle));
}

export const addProject = function clearDOMContentAndSaveList () {
    saveList();
    allProjects.push(projectTitle);
    localStorage.setItem('allProjects', allProjects);
    localStorage.removeItem('project');
    location.reload();  

   

};


export const loadTabs = function loadSavedLists () {
    
   
    const projectsArray = projectController.split(',');

    for (let x of projectsArray) {
        const projectTab = document.createElement ('h2');

        projectTab.textContent = x;

        projectTabs.appendChild(projectTab);

    }
}
