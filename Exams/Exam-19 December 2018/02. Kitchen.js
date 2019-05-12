class Kitchen {
    constructor(budget) {
        this.budget = +budget
        this.menu = {}
        this.productsInStock = {}
        this.actionsHistory = []
    }

    loadProducts(products) {
        for (let line of products) {
            let tokens = line.split(' ');
            let productName = tokens[0];
            let productQuantity = +tokens[1];
            let productPrice = +tokens[2];
            if (this.budget >= productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = productQuantity;
                } else {
                    this.productsInStock[productName] += productQuantity;
                }
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                this.budget -= productPrice;
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }

        return this.actionsHistory.join('\n')
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        } else {
            for (let line of neededProducts) {
                let tokens = line.split(' ');
                let productQuantity = +tokens.pop();
                let productName = tokens.join(' ');
                if (!this.menu.hasOwnProperty(meal)) {
                    this.menu[meal] = {};
                    this.menu[meal].products = {};
                    this.menu[meal].products[productName] = productQuantity
                    this.menu[meal].price = price;
                } else {
                    if (!this.menu[meal].products.hasOwnProperty(productName)) {
                        this.menu[meal].products[productName] = productQuantity;
                    } else {
                        this.menu[meal].products[productName] += productQuantity;
                    }
                }
            }

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        let output = '';
        for (let key of Object.keys(this.menu)) {
            output += `${key} - $ ${this.menu[key].price}\n`
        }
        return output.trim();
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        for (let key in this.menu[meal].products) {
            if (!this.productsInStock.hasOwnProperty(key) || this.productsInStock[key] < this.menu[meal].products[key]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (let key in this.menu[meal].products) {
            this.productsInStock[key] -= this.menu[meal].products[key];
        }
        this.budget += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

// Great idea! Now with the frozenYogurt we have 1 meals on the menu, other ideas ?
//     Great idea! Now with the Pizza we have 2 meals on the menu, other ideas ?