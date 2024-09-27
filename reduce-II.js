const multiplyBy2 = num => num * 2;
const add3 = num => num + 3;
const divideBy5 = num => num / 5;

let arr = [multiplyBy2,add3,divideBy5];
let res = arr.reduce((acc,item)=>{
    return item(acc)
},11);
console.log(res)