import image1 from './assets/maison.webp';
import image2 from './assets/maison2.webp';
import image3 from './assets/maison3.webp';
import image4 from './assets/chambre1.webp';
import image5 from './assets/salon1.webp';


const data = [
    {
        slides: [image1, image2, image3, image4, image5],
        location: "France, Paris",
        owner: "Pierre",
        price: 823,
        id: 1
    }, 
    {
        slides: [image4, image2, image5, image1, image3],
        location: "Rwanda, Huye",
        owner: "Pierre",
        price: 123,
        id: 2
    }, 
    {
        slides: [image5, image2, image4, image1, image3],
        location: "South Africa, Cape Town",
        owner: "Pierre",
        price: 23,
        id: 3
    }, 
    {
        slides: [image2, image1, image3, image4, image5],
        location: "France, Marseille",
        owner: "Pierre",
        price: 143,
        id: 4
    }, 
]

export default data;