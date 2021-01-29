const assert = require('assert')

describe('Simple Math Test', () => {
    it('should return 2', ()=>{
        assert.equal(1 + 1, 2);
    });
    if('should return 9', () =>{
        assert.equal(3 * 3, 9);
    });
})


const thisApp = require('../app')

describe('Simple App Test', () => {
    it('should say hello', ()=>{
        assert.equal(thisApp.helloWord(), 'hello');
    });
})