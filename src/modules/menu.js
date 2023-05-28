export { menuPage };
import Image1 from '/home/collin/repositories/restaurant-page-TOP/src/menu-image-1.png'
import Image2 from '/home/collin/repositories/restaurant-page-TOP/src/menu-image-2.png'
import Image3 from '/home/collin/repositories/restaurant-page-TOP/src/menu-image-3.png'

const container = document.querySelector('#content');

const menuSection = document.createElement('section');

function menuPage(){
    menuSection.innerHTML = '';
    
    const headline = document.createElement('h1');
    headline.classList.add('headline');
    headline.innerHTML = 'MENU';
    container.appendChild(headline);
    
    const subtext = document.createElement('p');
    subtext.classList.add('subtext');
    subtext.innerHTML = 'Hand crafted by the best mouse chef in town';
    container.appendChild(subtext);

    menuSection.classList.add('menu-section');
    container.appendChild(menuSection);

    const item1 = new MenuItem('Chicken Basquaise', 'This is a classic French Basque dish and a tasty midweek meal. The chicken is slowly pot roasted in a pepper sauce called piperade, made from melted red and green peppers, shallots, garlic and tomatoes', Image1, 1);
    item1.stick();

    const item2 = new MenuItem('Cinnamon Apple Bostock','A sweet and crunchy breakfast pastry with roots in Normandy. Our version honors Calvados country with a schmear of apple butter and a splash of apple brandy added to the traditional frangipane cream. A generous layer of toasty almonds balances the soft and squishy filling below.', Image2, 2)
    item2.stick();

    const item3 = new MenuItem('Steak Diane','A lean cut like filet mignon takes well to sautéeing in a little fat, as in this classic preparation with a simple pan sauce that is laced with brandy and set aflame—a spectacular feat that cooks off the alcohol and contributes rich caramel notes to the dish.', Image3, 3)
    item3.stick();
}

class MenuItem {
    constructor(title, desc, image, index){
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.index = index;
    }

    stick(){
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item')
        menuItem.id = this.index;
        menuSection.appendChild(menuItem);

        const itemTitle = document.createElement('h2');
        const itemDesc = document.createElement('p');
        const itemImage = document.createElement('img');

        itemTitle.innerHTML = this.title;
        itemDesc.innerHTML = this.desc;
        itemImage.src = this.image;

        menuItem.appendChild(itemTitle);
        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemImage);
    }
}
