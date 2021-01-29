/*option 1 to export functions*/

/*function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

const num = 33;

module.exports = {add, subtract, num};*/

/*option 2 to export functions */

/*
module.exports = {
    add: function(x, y){
        return x + y;
    },
    subtract: function(x, y){
        return x - y;
    },
    num: 33,
};
*/

/*option 3 to export functions*/
module.exports.add = function(x, y){
    return x + y;
}

module.exports.subtract = function(x, y){
    return x - y;
}

module.exports.num = 33;

