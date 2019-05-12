class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId(){
        return this._clientId;
    }
    set clientId(val){
        if (!(/\b[0-9]{6}\b/g).test(+val)) {
            throw new TypeError(`Client ID must be a 6-digit number`);
        }
        this._clientId = val;
    }

      get email() {
          return this._email;
      }
      set email(val) {
          if (!(/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/g).test(val)) {
              throw new TypeError(`Invalid e-mail`);
          }
          this._email = val;
      }

      get firstName() {
          return this._firstName;
      }
      set firstName(val) {
          if (!(val.length >= 3 && val.length <= 20)) {
              throw new TypeError(`First name must be between 3 and 20 characters long`);
          }
          else if (!(/^[A-Z]+[a-z]+$/g).test(val)){
              throw new TypeError(`First name must contain only Latin characters`)
          }
          this._firstName = val;
      }

      get lastName() {
          return this._lastName;
      }
      set lastName(val) {
          if (!(val.length >= 3 && val.length <= 20)) {
              throw new TypeError(`Last name must be between 3 and 20 characters long`);
          } else if (!(/^[A-Z]+[a-z]+$/g).test(val)) {
              throw new TypeError(`Last name must contain only Latin characters`)
          }
          this._lastName = val;
      }
}

// let acc = new CheckingAccount('131456', 'ivan@', 'Ivan', 'Petrov')
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
let acc = new CheckingAccount('423416', 'petkan@another.co.uk', 'Ivan', 'P4trov')
