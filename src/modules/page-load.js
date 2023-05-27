export { page };
import { homePage } from './home';
import { menuPage } from './menu';
import { aboutPage } from './about';
class PageLoad {
    

    home(){
        homePage();
    };
    menu(){
        menuPage();
    };
    about(){
        aboutPage();
    }
}

const page = new PageLoad();

