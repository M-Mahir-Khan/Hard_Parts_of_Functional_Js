const oncify = (convertMe)=>{
    let counter = 0;
    const inner = (input)=>{
        if(counter === 0){
           let output = convertMe(input)
           counter++;
           return output
        }else{
            return "you've already called it one time"
        }
    }
    return inner
}

const multiplyBy2 = num => num * 2;
const onceMultiplyBy2 = oncify(multiplyBy2)

console.log(oncifiedMultiplyBy2(10)) // 20
console.log(oncifiedMultiplyBy2(7))  // you've already called it one time