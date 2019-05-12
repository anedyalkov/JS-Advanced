const expect = require('chai').expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('RgbToHex(red, green, blue)', function () {
    it('red smaller than zero->should return undefined', function () {
        expect(rgbToHexColor(-1, 123, 54)).to.be.undefined
    });
    it('green smaller than zero->should return undefined', function () {
        expect(rgbToHexColor(22, -123, 54)).to.be.undefined
    });
    it('blue smaller than zero->should return undefined', function () {
        expect(rgbToHexColor(22, 123, -54)).to.be.undefined
    });
    it('red larger than 255->should return undefined', function () {
        expect(rgbToHexColor(555, 123, 54)).to.be.undefined
    });
    it('green larger than 255->should return undefined', function () {
        expect(rgbToHexColor(23, 444, 54)).to.be.undefined
    });
    it('blue larger than 255->should return undefined', function () {
        expect(rgbToHexColor(1, 123, 543)).to.be.undefined
    });
    it('Red, Green, Blue with value 255 should return #FFFFFF', function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it('red as a floating point num->should return undefined', function () {
        expect(rgbToHexColor(2.3, 444, 54)).to.be.undefined
    });
    it('green as a floating point num->should return undefined', function () {
        expect(rgbToHexColor(23, 44.4, 54)).to.be.undefined
    });
    it('blue as a floating point num->should return undefined', function () {
        expect(rgbToHexColor(23, 444, 5.4)).to.be.undefined
    });
    it('all rgb values as objects->should return undefined', function () {
        expect(rgbToHexColor({}, [], new Map)).to.be.undefined
    });
    it('should return #FFFFFF for (0, 0, 0)', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
    });
});