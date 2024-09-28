const multiplyBy2 = num => num * 2;
const add3 = num => num + 3;
const divideBy5 = num => num / 5;


// track with variable

let initialValue = multiplyBy2(11);
let nextStep = add3(initialValue);
let finalStep = divideBy5(nextStep);

console.log(finalStep) // 5

let result = divideBy5(add3(multiplyBy2(11)))

console.log(result);