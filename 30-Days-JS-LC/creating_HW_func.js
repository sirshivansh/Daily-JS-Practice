// 2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function returnVal() {
    return ("Hello World");
}

var createHelloWorld = function() {
    return returnVal; //function instance is created, this returns a function
}

const f = createHelloWorld();
console.log(f());