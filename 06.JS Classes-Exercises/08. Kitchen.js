class Kitchen {
    constructor(budget) {
        this.budget = +budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (let product of products) {
            let [productName, productQuantity, productPrice] = product.split(' ');
            if (this.budget >= +productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = +productQuantity;
                    this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.productsInStock[productName] += +productQuantity;
                    this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                }

                this.budget -= +productPrice;
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.actionsHistory.join('\n');
    }
    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = [{}, +price];
            for (let product of neededProducts) {
                let tokens = product.split(' ');
                let productQuantity = +tokens.pop();
                let productName = tokens.join(' ');
                if (!this.menu[meal][0].hasOwnProperty(productName)) {
                    this.menu[meal][0][productName] = +productQuantity;
                } else {
                    this.menu[meal][0][productName] += +productQuantity;
                }
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            let output = '';

            for (let currentMeal of Object.entries(this.menu)) {
                output += `${currentMeal[0]} - $ ${currentMeal[1][1]}\n`
            }

            return output;
        }
    }

    makeTheOrder(meal) {
        if (this.menu.hasOwnProperty(meal)) {
            for (let key in this.menu[meal][0]) {
                if (!this.productsInStock.hasOwnProperty(key) || this.productsInStock[key] < this.menu[meal][0][key]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }
            for (let key in this.menu[meal][0]) {
                this.productsInStock[key] -= this.menu[meal][0][key];
            }
            this.budget += this.menu[meal][1];
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal][1]}.`
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }
}






let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('Pizza'));