export { aboutPage }

const container = document.querySelector('#content');
import ChefImage from '/home/collin/repositories/restaurant-page-TOP/src/chef-image.png'

function aboutPage(){
    const headline = document.createElement('h1');
        headline.classList.add('headline');
        headline.innerHTML = 'ABOUT US';
        container.appendChild(headline);
    
        const subtext = document.createElement('p');
        subtext.classList.add('subtext');
        subtext.innerHTML = 'We are a small team of rats, striving to make this world a more inclusive place for our kind. Our ancestors came from Italy and settled down in New York City, which is exactly why we are a French Bistro. We hope you can delay judgment of our food until you taste it. The rat in the image is our head chef Gary, he is a very cool guy. Just look at his hat.';
        container.appendChild(subtext);

        const chefImage = document.createElement('img');
        chefImage.classList.add('chef-image')
        chefImage.src = ChefImage;
        container.appendChild(chefImage);
}