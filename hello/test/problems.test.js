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



    //string operations
    it('should check if string is  palindrome', () => {
        let str = 'racecar'
        let result = p.isPalindrome(str);
        assert(result, 'returns expected output');
      });



      it('reverse word in string', () => {
        let str = 'this is a test'
        let result = p.reverseEachWord(str, " ");
        let expected = "test a is this";
        assert.deepEqual(result, expected, 'returns expected output');
      });


      it('should enqueue an item to a stack', () => {
        let input = [];
        let expected = ["hello"];
        let result = p.enqueue(input, "hello")
        assert.deepEqual(result, expected, 'returns expected output');
      });

      it('should dequeue an item from the stack', () => {
        let input = ["hello"];
        let output = [];
        let expected = "hello";
        let result = p.dequeue(input, output)
        assert.deepEqual(result, expected, 'returns expected output');
      });

  });

  mocha.run();
}


/*Asset options*/

/*

assert() -- checks if value is true

assert.deepEqual() -- checks if two values are equal

assert.deepStrictEqual() -- checks if two values are equal, using the strict operator (====)

assert.doesNotThrow

assert.equal() -- checks if two values are equal using equal operator (==)

assert.fail() -- throws an assertion error

assert.ifError() -- throws a specified error if the specified error evalutates to true

assert.notDeepEqual() -- checks if two values are not equal

assert.notDeepStrictEqual() --  checks if two values are not equal, using the strict not equal operator (!==)

assert.notEqual() -- checks if two values are not equal, using the not equal operator (!=)

assert.notStrictEqual() --checks if two values are not equal, using the strict not equal (!==)

assert.ok() = checks if value is true

assert.strictEqual() -- checks if two varlues are equal, using the strict equal operator

asser.throws()



*/