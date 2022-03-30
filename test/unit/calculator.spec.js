const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
	let calculator = null;

	beforeEach(() => {
	calculator = new Calculator();
	});

	it('should have an add function', () => {
	expect(calculator.add).to.exist;
	});

	it('should add 2 + 2 together correctly', () => {
	expect(calculator.add(2, 2)).to.equal(4);
	});

    it('should have an subtract function', () => {
        expect(calculator.subtract).to.exist;
        });
    
    it('should subtract 2 - 2 together correctly', () => {
    expect(calculator.subtract(2, 2)).to.equal(0);
    });

	it('should return a number', () => {
        expect(calculator.subtract(3, 2)).to.be.a('number');
    });

	it('subtract function should have two parameters', () => {
        expect(calculator.subtract).to.have.lengthOf(2);
    });

	it('add function should have two parameters', () => {
        expect(calculator.add).to.have.lengthOf(2);
    });
});

