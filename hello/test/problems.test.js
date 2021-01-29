const _ = require('lodash');
const TEST_MODE = true;

/**
 *
 * UNIT TESTS - DO NOT TOUCH
 *
 */
if (TEST_MODE) {
  const Mocha = require('mocha');
  const mocha = new Mocha();
  const assert = require('assert');
  mocha.suite.emit('pre-require', this, 'solution', mocha);

  const p = require('../problems/interview')

  describe('tests', () => {
    it('should reverseArrayInPlace(): empty array', () => {
      let startingArray = [];
      const reversedArray = [];
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });

    it('should reverseArrayInPlace(): array with one item', () => {
      let startingArray = _.range(1);
      const reversedArray = startingArray.slice().reverse();
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });

    it('should reverseArrayInPlace(): array with two items', () => {
      let startingArray = _.range(2);
      const reversedArray = startingArray.slice().reverse();
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });

    it('should reverseArrayInPlace(): large array (even length)', () => {
      let startingArray = _.range(100);
      const reversedArray = startingArray.slice().reverse();
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });

    it('should reverseArrayInPlace(): large array (odd length)', () => {
      let startingArray = _.range(101);
      const reversedArray = startingArray.slice().reverse();
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });

    it('should reverseArrayInPlace(): array with multiple types', () => {
      let startingArray = [10, 5, 'Danny', null, undefined, 4.5, true, new Number(5)];
      const reversedArray = startingArray.slice().reverse();
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });

    it('should reverseArrayInPlace(): palindrome', () => {
      let startingArray = [1, 2, 3, 3, 2, 1];
      const reversedArray = startingArray.slice().reverse();
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });
  });

  mocha.run();
}