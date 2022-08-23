
const lockIn = function changeInputDomStateToStaticText (e) {
    console.log(`${this.id}`);
    if (e.code === 'Enter') {
        thisRow[`${this.id}`] = this.value;
        console.log(thisRow)

    }
}

//const title = document.querySelectorAll('input');





//for (let item of title) {
//item.addEventListener('keydown', lockIn)};


