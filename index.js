let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let str = 0
let nums = 0
let others = 0


let filtered = arr.filter(item => typeof(item) === 'string');

str = filtered.length

console.log(str);



let filtered2 = arr.filter(item => typeof(item) === 'number');

nums = filtered2.length

console.log(nums);



let filtered3 = arr.filter(item => typeof(item) === 'boolean');

others += filtered3.length

filtered3 = arr.filter(item => typeof(item) === 'undefined');

others += filtered3.length

filtered3 = arr.filter(item => typeof(item) === 'object');

others += filtered3.length

console.log(others);