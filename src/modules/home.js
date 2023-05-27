export { homePage };
import Stock from '/home/collin/repositories/restaurant-page-TOP/src/stock.png';

const container = document.querySelector('#content');

function homePage(){
    const headline = document.createElement('h1');
        headline.classList.add('headline');
        headline.innerHTML = 'Ordinary Restaurant';
        container.appendChild(headline);
    
        const subtext = document.createElement('p');
        subtext.classList.add('subtext');
        subtext.innerHTML = 'This truly is an ordinary restaurant!';
        container.appendChild(subtext);

        const image = document.createElement('img');
        image.classList.add('stock-image');
        image.src = Stock;
        container.appendChild(image)
}