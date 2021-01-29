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

function duplicate(arr){
    return arr.concat(arr);
}

function isAnagram(first, second){
    //for case sensitivity, change both to lowercase
    var a = first.toLowerCase();
    var b = second.toLowerCase();

    //sort the strings
    
    a = a.split("").sort();//split turns it into an array
    b = b.split("").sort();//split turns it into an array
    //join the resulting array to a string.
    
    a = a.join("");//join back into a single word
    b = b.join("")//join back into a single word
    
    //compare the results
    return a === b;


}

function fizzBuzz(num){

    for(let i = 1; i <= num; i++){
        //check if the number is a multiple of 3 and 5
        if(i %3 === 0 && i % 5 ===0){
            console.log('fizzbuzz');
        }else if (i % 3 === 0){//check if the number is a multiple of 3
            console.log('fizz');
        }else if (i % 5 === 0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }

}

function findVowels(str){
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }

    return count;
}


function fib(num){
    /*
    store the fibonacci sequence you're going to generate inside an aray 
    and initialize it with the first two numbers of the sequence

    */

    const result = [0,1];
    for(let i = 2; i <= num; i++){
        //push the sum of the two numbers
        //precedijng the position of i in the result array
        //at the end of the result array
        const prevNum1 = result[i -1];
        const prevNum2 = result[i -2];
        result.push(prevNum1 + prevNum2);
    }

    //return the lastvalue in the array. this is the final value
    return result[num];
}

function fibRecursive(num){

    //if num is either 0 or 1 return num
    if(num <2){
        return num;
    }
    return fibRecursive(num - 1) + fibRecursive(num - 2);
}


module.exports = { 
    reverseArrayInPlace, 
    isPalindrome, 
    reverseEachWord, 
    enqueue, 
    dequeue,
    duplicate,
    isAnagram,
    fizzBuzz,
    findVowels,
    fib,
    fibRecursive
 } 
