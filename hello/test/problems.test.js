const Mocha = require('mocha');
  const mocha = new Mocha();
  const assert = require('assert');

  const p = require('../problems/interview');

  describe('tests', () => {
    it('should reverseArrayInPlace(): empty array', () => {
      let startingArray = [];
      const reversedArray = [];
      p.reverseArrayInPlace(startingArray);
      assert.deepEqual(startingArray, reversedArray, 'returns expected output');
    });

    
});

mocha.run();