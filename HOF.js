// Suppose we have a function copyArrayAndMultiplyBy2. Let's diagram it out

const copyArrayAndMultiplyBy2 = (array) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }
    return output;
}
const myArray = [1, 2, 3]
const result = copyArrayAndMultiplyBy2(myArray)


// What if want to copy array and divide by 2?

const copyArrayAndDivideBy2 = (array) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }
    return output;
}
const myArray2 = [1, 2, 3]
const result2 = copyArrayAndDivideBy2(myArray);


// Or add 3?
const copyArrayAndAdd3 = (array) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] + 3);
    }
    return output;
}
const myArray3 = [1, 2, 3]
const result3 = copyArrayAndAdd3(myArray);


// What principle are we breaking ?
// We're breaking DRY

// We could generalize our function so that we pass in ourspecific instruction only when we run thecopyArrayAndManipulate function!
const copyArrayAndManipulate = (array, instructions) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}
const multiplyBy2 = (input) => {
    return input * 2;
}
const result4 = copyArrayAndManipulate([1, 2, 3], multiplyBy2);


{
const multiplyBy2 = (input) => { return input * 2 }
}
// So where the function is a single expression to evaluate and then return, ES2015
// lets us remove the { } and return keyword
{
const multiplyBy2 = (input) => input * 2
const output = multiplyBy2(3) //6

}
// We can even remove the parenthesis if there’s only 1 parameter(expected input)
{
const multiplyBy2 = input => input * 2
const output = multiplyBy2(3) //6
}