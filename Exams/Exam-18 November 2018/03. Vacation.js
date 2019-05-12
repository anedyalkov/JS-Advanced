// class Vacation {
//     constructor(organizer, destination, budget) {
//         this.organizer = organizer;
//         this.destination = destination;
//         this.budget = budget,
//         this.kids = {};
//     }
//     get numberOfChildren(){
//         let kidsCount = Object.values(this.kids).reduce((acc, currArr) => {
//             return acc + currArr.length;
//         }, 0);
//         return kidsCount;
//     }

//     registerChild(name, grade, budget) {

//         if (this.budget > budget) {
//             return `${name}'s money is not enough to go on vacation to ${this.destination}.`
//         }

//         if (!this.kids.hasOwnProperty(grade)) {
//             this.kids[grade] = [];
//         }
//         if (this.kids[grade].indexOf(`${name}-${budget}`) === -1) {
//             this.kids[grade].push(`${name}-${budget}`);
//             return this.kids[grade];
//         } else {
//             return `${name} is already in the list for this ${this.destination} vacation.`;
//         }
//     }
//     removeChild(name, grade) {

//         if (this.kids.hasOwnProperty(grade) && this.kids[grade].some(kid => kid.startsWith(name))) {
//             this.kids[grade] = this.kids[grade].filter(kid => !kid.startsWith(name));
//             return this.kids[grade];
//         }

//         return `We couldn't find ${name} in ${grade} grade.`;
//     }
//     toString() {
//         let result = '';
//         if(this.numberOfChildren === 0){
//             return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
//         } else {
//             Object.entries(this.kids).sort((a, b) => {
//                 return a[0] - b[0];
//             });

//             result += `${this.organizer} will take ${this.numberOfChildren} children on trip to Dubai\n`;

//             for (let [grade, kids] of Object.entries(this.kids)) {
//                 result += `Grade: ${grade}\n`;
//                 let count = 1;
//                 for (let kid of kids) {
//                      result += `${count}. ${kid}\n`;
//                      count++;
//                 }
//             }

//             return result;
//         }
//     }
// }

class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = +budget;
        this.kids = {};
    }

    get numberOfChildren(){
        let count = 0;
        for (let key of Object.keys(this.kids)){
            count += this.kids[key].length;
        }
        return count;
    }

    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
            return this.kids[grade];
        } else {
            for (let kid of this.kids[grade]) {
                if (kid.startsWith(name)) {
                    return `${name} is already in the list for this ${this.destination} vacation.`;
                }
            }
            this.kids[grade].push(`${name}-${budget}`);
            return this.kids[grade];
        }
    }

    removeChild(name, grade) {
        // if (this.kids.hasOwnProperty(grade)) {
        //     for (let i = 0; i < this.kids[grade].length; i++) {
        //         if (this.kids[grade][i].startsWith(name)) {
        //             this.kids[grade].splice(i, 1);
        //             return this.kids[grade];
        //         }
        //     }
        //     return this.kids[grade];
        // }

        // return `We couldn't find ${name} in ${grade} grade.`;

        if (this.kids.hasOwnProperty(grade) && this.kids[grade].some(kid => kid.startsWith(name))) {
            this.kids[grade] = this.kids[grade].filter(kid => !kid.startsWith(name));
            return this.kids[grade];
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        if(Object.keys(this.kids).length === 0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }
        let output = '';
        let sortedKids = Object.entries(this.kids).sort((a,b) =>{
            return a[0] - b[0];
        })

        output += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        for(let [grade, kidsArr] of sortedKids){
            output += `Grade: ${grade}\n`;
            let count = 1
            for(let kid of kidsArr){
                output += `${count++}. ${kid}\n`;
            }
        }

        return output;
    }
}


let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);

console.log(vacation.toString());
console.log(vacation.numberOfChildren);

// Miss Elizabeth will take 4 children on trip to Dubai
// Grade: 5
// 1. Gosho - 3000
// 2. Tanya - 5000

// Grade: 7
// 1. Pesho - 4000

// Grade: 10
// 1. Mitko - 5500
