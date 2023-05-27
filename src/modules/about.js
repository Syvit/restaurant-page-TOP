export { aboutPage }

const container = document.querySelector('#content');


function aboutPage(){
    const headline = document.createElement('h1');
        headline.classList.add('headline');
        headline.innerHTML = 'About';
        container.appendChild(headline);
    
        const subtext = document.createElement('p');
        subtext.classList.add('subtext');
        subtext.innerHTML = 'About txt';
        container.appendChild(subtext);

}