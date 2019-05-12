const expect = require('chai').expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('Sum array tests', function(){
    it('should return 6 for [1,2,3]',function() {
        //Arrange
        let arr = [1,2,3];
        //Act
        let actual = sum(arr);
        let expected = 6;
        //Assert
        expect(actual).to.be.equal(expected);
    })

    it('should return 1 for [1]', function () {
        //Arrange
        let arr = [1];
        //Act
        let actual = sum(arr);
        let expected = 1;
        //Assert
        expect(actual).to.be.equal(expected);
    })

    it('should return 0 for []', function () {
        //Arrange
        let arr = [];
        //Act
        let actual = sum(arr);
        let expected = 0;
        //Assert
        expect(actual).to.be.equal(expected);
    })

     it('should return 3 for [1.5,2.5,-1]', function () {
         //Arrange
         let arr = [1.5,2.5,-1];
         //Act
         let actual = sum(arr);
         let expected = 3;
         //Assert
         expect(actual).to.be.equal(expected);
     })

      it('should return NAN for wrong input', function () {
          //Arrange
          let arr = 'wrong';
          //Act
          let actual = sum(arr);
          //Assert
          expect(actual).to.be.NaN;
      })
})