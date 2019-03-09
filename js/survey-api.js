const products = [];

function saveLocalStorageItems() {
    localStorage.setItem('products', JSON.stringify(products));
}

const surveyApi = {
    getAll() {
        return JSON.parse(localStorage.getItem('products'));
    },

    add(product) {
        products.push(product);
        saveLocalStorageItems();
    }
};

export default surveyApi;