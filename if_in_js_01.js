// Check if Property Exists:

// Create an object car = { make: "Tesla", model: "Model S", year: 2022 }. 
// Write a code that checks if the property color exists in the car object. If not, print "Property not found".

let car = {
    make : "Tesla",
    model : "Model S",
    year : 2022
};
if(car["color"] != true){
    console.log("Property not found!")
}