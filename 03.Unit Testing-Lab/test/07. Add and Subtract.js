let expect = require('chai').expect

function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

describe('createCalculator', function () {
    //Arrange
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    describe('Test return value', function () {
        it('Expect calc to be an object', function () {
            expect(typeof calc).to.be.equal('object');
        });
        it('Expect add to be a function', function () {
            expect(typeof calc.add).to.be.equal("function")
        });
        it('Expect subtract to be a function', function () {
            expect(typeof calc.subtract).to.be.equal("function")
        });
        it('Expect get to be a function', function () {
            expect(typeof calc.get).to.be.equal("function")
        });
    });
    describe('createCalculator functionality', function(){
         it('should return 0 after initialization', function () {
             //Act
             let actual = calc.get();
             let expected = 0;
             //Assert
             expect(actual).to.be.equal(expected);
         });
         it('should return 10 after add(5), add(5)', function () {
             //Act
             calc.add(5);
             calc.add(5);
             let actual = calc.get();
             let expected = 10;
             //Assert
             expect(actual).to.be.equal(expected);
         });
         it('should return -5 after subtract(3), subtract(2)', function () {
             //Act
             calc.subtract(3);
             calc.subtract(2);
             let actual = calc.get();
             let expected = -5;
             //Assert
             expect(actual).to.be.equal(expected);
         });
         it('should return 4 after add(5), subtract(-1)', function () {
             //Act
             calc.add(5);
             calc.subtract(-1);
             let actual = calc.get();
             let expected = 6;
             //Assert
             expect(actual).to.be.equal(expected);
         });
          it('should return -4 after subtract(5), add(1)', function () {
              //Act
              calc.subtract(5);
              calc.add(1);
              let actual = calc.get();
              let expected = -4;
              //Assert
              expect(actual).to.be.equal(expected);
          });
            it('should return 5 after add("4"), subtract("1")', function () {
                //Act
                calc.add('4');
                calc.add(1);
                let actual = calc.get();
                let expected = 5;
                //Assert
                expect(actual).to.be.equal(expected);
            });
             it('should return Nan after add("hello")', function () {
                 //Act
                 calc.add('hello');
                 let actual = calc.get();
                 //Assert
                 expect(actual).to.be.NaN;
             });
    });
});