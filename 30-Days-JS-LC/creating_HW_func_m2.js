// 2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//METHOD - 2

var createHelloWorld = function(){
    return function(){
        return ("Hello World");
    }
}

const f = createHelloWorld();
console.log(f());