(() => {
    String.prototype.ensureStart = function(str){
        let currStr = this.valueOf();
        if (currStr.indexOf(str) === 0){
            return currStr;
        }
        return str + currStr;
    }
    String.prototype.ensureEnd = function (str) {
        let currStr = this.valueOf();
       if (currStr.lastIndexOf(str) > 0) {
           return currStr;
       }
       return currStr + str;
        
    }
    String.prototype.isEmpty = function () {
        let currStr = this.valueOf();
        if (currStr.length === 0) {
            return true;
        }
        return false;
    }
     String.prototype.truncate = function (n) {
         let currStr = this.valueOf();
         if (currStr.length <= n) {
             return currStr;
         }

         let substrOfThis = currStr.substring(0, n).trim();
         let indexOfSpace = substrOfThis.lastIndexOf(' ');
         if (indexOfSpace !== -1) {
             return substrOfThis.substring(0, indexOfSpace) + '...';
         }

         return '.'.repeat(n);        
     }
      String.format = function (string) {
          let placeholderIndex = 0;
          for (let i = 1; i < arguments.length; i++) {
              string = string
                  .replace(`{${placeholderIndex}}`, arguments[i]);
                  placeholderIndex++;
          }

          return string;
      };
})()

let str = 'the quick brown fox jumps over the lazy dog';
str = str.ensureEnd(' dog');
console.log(str);
str = str.ensureStart('hello ')
console.log(str);
str = str.truncate(16)
console.log(str);
str = str.truncate(14)
console.log(str);
str = str.truncate(8)
console.log(str);
str = str.truncate(4)
console.log(str);
str = str.truncate(2)
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
