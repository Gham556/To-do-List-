export const switchTabs = function () {
    const listItems = localStorage.getItem('project');
    const temp = this.textContent;

    const toLoad = localStorage.getItem(temp);
    console.log(temp);
    localStorage.setItem('project', toLoad);
    location.reload();  
}
