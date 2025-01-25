// Loop Through Object Properties:
//     Given an object person = { name: "Bob", age: 30, city: "Los Angeles" },
//     use a for...in loop to print all the keys and their values.

let personDetail = {
    name : "Bob",
    age : 30,
    city : "Los Angeles"
};
for(let i in personDetail){
    console.log(i +":"+ personDetail[i]);
}