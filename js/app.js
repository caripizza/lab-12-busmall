import productsApi from './products-api.js';
// import ImageItem from './products-display.js';
// import surveyApi from './survey-api.js';


// get initial data, all products from products.js
const products = productsApi.getAll();
// console.log(products);


// this code displays one random name/image product pair
var randomProduct = products[Math.floor(Math.random() * products.length)];
console.log(randomProduct);


// this code displays entire products array including name, image, views, clicks
const survey = products.map(product => {
    return {
        name: product.name,
        image: product.image,
        views: 0,
        clicks: 0
    };
});
console.log(survey);
