import html from './html.js';

let template = function() {
    return html`
        <li class="image">
            <img class="product">
        </li>
    `;
};

export default class Product {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.product.name);
        this.listItem = dom.querySelector('img');
        this.listItem.src = this.product.image;
        
        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
            console.log(this.product);
        });
        
        return dom;
    }
}