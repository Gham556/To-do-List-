const deleteList = document.querySelector('#deleteList');
const projectName = document.querySelector('#projectName');

export const deleteProject = function () {
    localStorage.removeItem(projectName.value);
    
    const allProjectsString = localStorage.getItem('allProjects');
    const allProjectsArray = allProjectsString.split(',');
    const x = allProjectsArray.indexOf(projectName.value);
    const y =  x > 0 && allProjectsArray.splice(x, 1);
    
    localStorage.setItem('allProjects', allProjectsArray);
    localStorage.setItem('loading', 'Project');
    localStorage.setItem('project', '');
    location.reload();
}