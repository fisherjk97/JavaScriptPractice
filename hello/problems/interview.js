const { sep } = require("path");
const { stringify } = require("querystring");

function reverseArrayInPlace(array){

    for(var i = 0; i < array.length / 2; i++){

        var begin = array[i];
        var end = array[array.length - i - 1];

        array[i] = end;
        array[array.length - i - 1] = begin;
    }

}

function isPalindrome(str){

    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

/*given a string, reverse each word in the sentence*/

function reverseEachWord(str, separator){

    return str.split(separator).reverse().join(separator);

}

//just push the item into the first stack
function enqueue(stackInput, item){
     stackInput.push(item);
     return stackInput;
}

function dequeue(stackInput, stackOutput){
    /*reverse the stack such that the first element of the output stack
    is the last element of the input stack. After tha, pop the top of the output to 
    get the first element that was ever pushed into the input stack
    */
   if(stackOutput.length <= 0){
       while(stackInput.length > 0){
           var elementToOutput = stackInput.pop();
           stackOutput.push(elementToOutput);
       }
   }

   return stackOutput.pop();

}


module.exports = { reverseArrayInPlace, isPalindrome, reverseEachWord, enqueue, dequeue } 
