const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

	beforeEach(() => {
	mortgage = new Mortgage();
	});

	it('should have an monthly payment function', () => {
	expect(mortgage.monthlyPayment).to.exist;
	});

    it('should return a number', () => {
        expect(mortgage.monthlyPayment(1, 2, 3, 4)).to.be.a('number');
    });

    it('should calculate mortgage Payment correctly', () => {
        expect(mortgage.monthlyPayment(500000, 5, 20, 10)).to.equal(3960.69);
    });

    it('function should have four parameters', () => {
        expect(mortgage.monthlyPayment).to.have.lengthOf(4);
    });

    it('should return a positive number', () => {
        expect(mortgage.monthlyPayment(1, 2, 3, 4)).to.be.within(0, Infinity);
    });

    
    
    


});