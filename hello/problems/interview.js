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

module.exports = { reverseArrayInPlace, isPalindrome } 
