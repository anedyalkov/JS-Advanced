function FunHuman(){
    this.name = 'Pesho';
    this.address = 'Mladost';
}

FunHuman.prototype.sleep = function() {};
FunHuman.eat = function() {};

let pesho = new FunHuman();

let human = {
    name: "Pesho",
    eyeColor: 'blue',
    walk: function() {
        console.log('walking');
    }
}

let ico = Object.create(human);
ico.name = 'Ico';