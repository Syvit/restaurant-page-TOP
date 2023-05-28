import { page } from "./modules/page-load"
import { createNav } from "./modules/nav";
import './style.css';

const content = document.querySelector('#content');

createNav();
content.className = 'home'
page.home();
        
(function pageSwitch(){
    const homeBtn = document.querySelector('#homeBtn');
    const menuBtn = document.querySelector('#menuBtn');
    const aboutBtn = document.querySelector('#aboutBtn');
    
    homeBtn.addEventListener('click', (e) => {
        content.innerHTML = '';
        content.className = 'home'
        page.home();
    });
    menuBtn.addEventListener('click', (e) => {
        content.innerHTML = '';
        content.className = 'menu'
        page.menu();
    });
    aboutBtn.addEventListener('click', (e) => {
        content.innerHTML = '';
        content.className = 'about'
        page.about();
    });
})();
