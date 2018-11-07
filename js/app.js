/* Start a survey by creating a survey array by mapping the products array:
const survey = products.map(product => {
    return {
        name: product.name,
        image: product.image,
        views: 0,
        clicks: 0
    };
});
*/

import productsApi from './products-api.js';

// get initial data
const products = productsApi.getAll();

console.log(products);