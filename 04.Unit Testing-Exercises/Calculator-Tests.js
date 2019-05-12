let expect = require("chai").expect;
let Calculator = require('./Calculator').Calculator;

describe('Calculator', function () {
    let calc = {};
    beforeEach(function () {
        calc = new Calculator();
    });

    it('constructor initiate empty array',function(){
        expect(calc.toString()).to.be.equal('empty array');
    })
})