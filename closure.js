// When a function is defined, it gets a bond to the surrounding Local
// Memory (“Variable Environment”) in which it has been defined

const outer = ()=>{
    let counter = 0;
    const incrementCounter = ()=>{
        counter++
    }
    return incrementCounter;
}

const newFn = outer();
newFn();
newFn();

// The Closed over Variable Environment (COVE) or ‘Closure’
// This ‘backpack’ of live data that gets returned out with
// incrementCounter is known as the ‘closure’
// The ‘backpack’ (or ‘closure’) of live data is attached
// incrementCounter (then to myNewFunction)
// through a hidden property known as [[scope]] which
// persists when the inner function is returned out