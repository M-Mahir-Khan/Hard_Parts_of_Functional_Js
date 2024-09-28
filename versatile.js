const multiplyBy2 = x => x*2
const add3 = x => x+3
const divideBy5 = x => x/5

const reduce = (array,howToCombine,buildingUP)=>{
    for (let i = 0; i < array.length; i++) {
        buildingUP = howToCombine(buildingUP,array[i])
    }
    return buildingUP
}

const runFunctionOnInput = (input,fn)=>{
    return fn(input)
}

const output = reduce([multiplyBy2,add3,divideBy5],runFunctionOnInput,11)