const expect = require('chai').expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal =
        (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


describe("isSymmetric(arr) ", function () {
    it("should return true for [1,2,3,3,2,1]", function () {
        //Arrange
        let arr = [1, 2, 3, 3, 2, 1];
        //Act
        let actual = isSymmetric(arr);
        //Assert
        expect(actual).to.be.equal(true);
    });
    it("should return false for [1,2,3,4,2,1]", function () {
         //Arrange
         let arr = [1, 2, 3, 4, 2, 1];
         //Act
         let actual = isSymmetric(arr);
         //Assert
         expect(actual).to.be.equal(false);
    });
    it("should return true for [-1,2,-1]", function () {
             //Arrange
             let arr = [-1, 2, -1];
             //Act
             let actual = isSymmetric(arr);
             //Assert
             expect(actual).to.be.equal(true);
    });
    it("should return false for [-1,2,1]", function () {
         //Arrange
         let arr = [-1, 2, 1];
         //Act
         let actual = isSymmetric(arr);
         //Assert
         expect(actual).to.be.equal(false);
    });
     it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ", function () {
         //Arrange
         let arr = [5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5];
         //Act
         let actual = isSymmetric(arr);
         //Assert
         expect(actual).to.be.equal(true);
     });
      it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5] ", function () {
          //Arrange
          let arr = [5, 'hi', {a: 5}, new Date(), {X: 5}, 'hi', 5];
          //Act
          let actual = isSymmetric(arr);
          //Assert
          expect(actual).to.be.equal(false);
      });
       it("should return false for 1 ", function () {
           //Arrange
           let arr = 1;
           //Act
           let actual = isSymmetric(arr);
           //Assert
           expect(actual).to.be.equal(false);
       });
});
