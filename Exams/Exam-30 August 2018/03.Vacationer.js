class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;

        this.idNumber = this.generateIDNumber();

        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        }
        if (creditCard) {
            this.addCreditCardInfo(creditCard);
        }

        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }
    set fullName(val) {
        if (val.length !== 3) {
            throw new Error(`Name must include first name, middle name and last name`);
        }
 
        let pattern = /\b[A-Z][a-z]+\b/gm;

        val.forEach(element => {
            if (!(/\b[A-Z][a-z]+\b/gm).test(element)) {
                throw new Error("Invalid full name");
            }
        });
        this._fullName = {
            firstName: val[0],
            middleName: val[1],
            lastName: val[2]
        };
    }

    generateIDNumber() {
        let vowels = ['a', 'e', 'o', 'i', 'u'];
        let firstNumber = 231 * this.fullName.firstName.charCodeAt(0);
        let secondNumber = 139 * this.fullName.middleName.length;
        let thirdNumber = vowels.includes(this.fullName.lastName[this.fullName.lastName.length - 1]) ? 8 : 7;

        return (firstNumber + secondNumber).toString() + thirdNumber;
    }

    addCreditCardInfo(info){
        if(info.length !== 3){
            throw new Error(`Missing credit card information`);
        }
        if (typeof (info[0]) === 'string' || typeof (info[2]) === 'string'){
            throw new Error(`Invalid credit card details`);
        }

        this.creditCard.cardNumber = info[0]; 
        this.creditCard.expirationDate = info[1]; 
        this.creditCard.securityNumber = info[2]; 
    }
    addDestinationToWishList(destination) {
        if(this.wishList.includes(destination)){
            throw new Error(`Destination already exists in wishlist`);
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => {
            return a.length - b.length;
        });
    }
    getVacationerInfo(){
        let output = '';
        output += `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`
        output += `ID Number: ${this.idNumber}\n`;
        output+= `Wishlist:\n`;
        this.wishList.length === 0 ? output += `empty\n` : output += `${this.wishList.join(', ')}\n`;
        output += `Credit Card:\n`;
        output += `Card Number: ${this.creditCard.cardNumber}\n`;
        output += `Expiration Date: ${this.creditCard.expirationDate}\n`;
        output += `Security Number: ${this.creditCard.securityNumber}\n`;
        return output;           ;
    }
}



let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
console.log(vacationer1.generateIDNumber())
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}
// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}
vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());


