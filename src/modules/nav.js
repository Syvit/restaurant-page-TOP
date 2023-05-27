export { createNav };
const container = document.querySelector('#nav-container')

function createNav(){

    const navBar = document.createElement('nav');
    navBar.classList.add('nav');
    container.appendChild(navBar);
    
    const mainBtn = document.createElement('button');
    mainBtn.classList.add('nav-btn');
    mainBtn.id = 'homeBtn';
    mainBtn.innerHTML = 'HOME';
    navBar.appendChild(mainBtn);
    
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.id = 'menuBtn';
    menuBtn.innerHTML = 'MENU';
    navBar.appendChild(menuBtn);
    
    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('nav-btn');
    aboutBtn.id = 'aboutBtn';
    aboutBtn.innerHTML = 'ABOUT';
    navBar.appendChild(aboutBtn);

}

function createBtn(){
    
}