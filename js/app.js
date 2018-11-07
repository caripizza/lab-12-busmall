import productsApi from './products-api.js';
// import surveyApi from './survey-api.js';

// get initial data
const products = productsApi.getAll();
console.log(products);

var product1 = products[Math.floor(Math.random() * products.length)]; // get a random word from products array
console.log(product1);

// const survey = products.map(product => {
//     return {
//         name: product.name,
//         image: product.image,
//         views: 0,
//         clicks: 0
//     };
// });