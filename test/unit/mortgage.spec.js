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

    it('should have a monthly interest rate variable', () => {
        expect(mortgage.monthlyInterestRate).to.exist;
        });

    it('should use to fixed notation to round number', () => {
        expect(mortgage.monthlyPayment(2.222222)).to.equal(2.22);
        });

});