export { menuPage }

const container = document.querySelector('#content');


function menuPage(){
    const headline = document.createElement('h1');
        headline.classList.add('headline');
        headline.innerHTML = 'menu';
        container.appendChild(headline);
    
        const subtext = document.createElement('p');
        subtext.classList.add('subtext');
        subtext.innerHTML = 'menu txt';
        container.appendChild(subtext);
}