const multiply = (a, b) => a * b;

function prefillFunction(fn, prefillValue) {
    const inner = (liveInput)=>{
        const output = fn(liveInput,prefillValue)
        return output
    }
    return inner
}

const multiplyBy2 = prefillFunction(multiply,2)
const result = multiplyBy2(10) // 20





{
    function partialApplyMultiply(a){
        return function inner(b){
            return multiply(a,b)
        }
    }
    
    const multiplyBy2 = partialApplyMultiply(2);
    const multiplyBy3 = partialApplyMultiply(3);
    
    
    console.log(multiplyBy2(5)) // 10
    console.log(multiplyBy2(3)) // 6
    
    console.log(multiplyBy3(5)) // 15
    console.log(multiplyBy3(3)) // 9
}