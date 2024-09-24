const reduce = (array , howToCombine,buildingUp)=>{
    for(let i = 0; i < array.length; i++){
        buildingUp = howToCombine(buildingUp, array[i])
    }
    return buildingUp;
}

const add = (a,b) => a + b;
const summed = reduce([1,2,3],add, 0) // 6


// Interlude - arrays, objects and functions have access to
// ‘methods’
// — ‘methods’ are functions that they can use on themselves

const array = [1,2,3]
array.push(10) // Where’s this push method come from?

// — The ‘methods’ that arrays get are stored in an object that
// every array has access to when you refer to the array, followed
// by a ‘dot’ and the method name (See OOP JS Hard Parts)
// — The link to this object full of shared methods is on the
// __proto__ property