const lib = require('./maths/lib');
const result = lib.add(4,4);
console.log(`The result is: ${result}`);

const { add, subtract, num } = require("./maths/lib");
console.log(add(4, 4)); // 8
console.log(subtract(8,4));//4
console.log(num);