let expect = require("chai").expect;
let HolidayPackage = require('./Holiday Package').HolidayPackage;

describe.only('HolidayPackage', function () {
    let holidayPackage = {};
    beforeEach(function () {
        holidayPackage = new HolidayPackage('Italy', 'Summer');
    });

    describe('constructor tests', function () {
        it('is initialized with params', function () {
            expect(holidayPackage.destination).to.be.equal('Italy')
            expect(holidayPackage.season).to.be.equal('Summer')
            expect(holidayPackage.insuranceIncluded).to.equal(false)
        })
    })

    describe('methods throw errors', function () {
        it('should show message if no vacationers added', function () {
            expect(holidayPackage.showVacationers()).to.be.equal('No vacationers are added yet')

        })

        it('generateHolidayPackage should throw error if no vacationers added ', function () {

            let errorFunc = () => {
                holidayPackage.generateHolidayPackage()
            }
            expect(errorFunc).to.throw(Error)
        })
        it('addVacationer should throw error if passed empty string', function () {

            let errorFunc = () => {
                holidayPackage.addVacationer(' ')
            }
            expect(errorFunc).to.throw(Error)
        })
        it('addVacationer should throw error if passed non string', function () {

            let errorFunc = () => {
                holidayPackage.addVacationer(1)
            }
            expect(errorFunc).to.throw(Error)
        })
        it('addVacationer should throw error if passed one name', function () {

            let errorFunc = () => {
                holidayPackage.addVacationer("Ivan")
            }
            expect(errorFunc).to.throw(Error)
        })

        it('insuranceIncluded property should throw error if passed non boolean type', function () {

            let errorFunc = () => {
                holidayPackage.insuranceIncluded = 'true';
            }
            expect(errorFunc).to.throw(Error)
        })
    })

    describe('methods works', function () {
        it('showVacationers should show vacationers', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');

            expect(holidayPackage.showVacationers()).to.be.equal(`Vacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev`)
        })

        it('addVacationer should add vacationers', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');

            expect(holidayPackage.vacationers.length).to.be.equal(3)
        })
        it('generateHolidayPackage if season is Summer or Winter', function () {
            holidayPackage = new HolidayPackage('Italy', 'Summer');
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.insuranceIncluded = true;
            expect(holidayPackage.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev\nPrice: 1500`)

            holidayPackage = new HolidayPackage('Italy', 'Winter');
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            expect(holidayPackage.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev\nPrice: 1400`)
        })

        it('generateHolidayPackage if season is different from Summer or Winter', function () {

            holidayPackage = new HolidayPackage('Italy', 'Spring');
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.insuranceIncluded = true;
            expect(holidayPackage.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev\nPrice: 1300`)

            holidayPackage = new HolidayPackage('Italy', 'Autumn');
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            expect(holidayPackage.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev\nPrice: 1200`)
        })
    })
})