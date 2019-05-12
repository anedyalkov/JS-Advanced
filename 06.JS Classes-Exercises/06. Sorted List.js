class SortedList{
    constructor(){
        this.data = [];
        this.size = 0;
    }

    add(element){
        this.data.push(element);
        this.size++;
        this.data.sort((a, b) => {
            return a - b;
        })
      
    }
    remove(index) {
        if(index >= 0 && index < this.data.length){
            this.data.splice(index, 1);
            this.size--; 
        }       
    }

    get(index){
        if (index >= 0 && index < this.data.length) {          
            return this.data[index];
        }
    }
}

let list = new SortedList();
list.add(3)
list.add(2)
list.add(1)
list.add(7)
list.add(5)
list.remove(5)
let el = list.get(2);
let length = list.size;
console.log(el);
console.log(length);
console.log(list.data)