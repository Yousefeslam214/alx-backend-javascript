const assert = require('chai').assert;
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1.4 and 3.6', () => {
        assert.strictEqual(calculateNumber(1.4, 3.6), 5);
    });

    it('should return 6 when inputs are 2.5 and 3.5', () => {
        assert.strictEqual(calculateNumber(2.5, 3.5), 6);
    });

    it('should return 0 when inputs are -0.4 and 0.4', () => {
        assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
    });

    it('should return -5 when inputs are -2.5 and -2.5', () => {
        assert.strictEqual(calculateNumber(-2.5, -2.5), -5);
    });

    it('should return 1 when inputs are 0.7 and 0.3', () => {
        assert.strictEqual(calculateNumber(0.7, 0.3), 1);
    });

    it('should return 0 when inputs are 0.1 and -0.1', () => {
        assert.strictEqual(calculateNumber(0.1, -0.1), 0);
    });

    it('should return 2 when inputs are 1.6 and 0.4', () => {
        assert.strictEqual(calculateNumber(1.6, 0.4), 2);
    });
});
