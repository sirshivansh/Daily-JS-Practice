let student = {
    name: "Rahul",
    age: 20,
    grade: "A"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}