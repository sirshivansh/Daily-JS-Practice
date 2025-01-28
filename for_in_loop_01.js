// for_in_loop_practise
//Print Each marks and total marks

let Marks = {
    Maths: 10,
    Science: 20,
    English: 30
};

let totalMarks = 0;
for (let x in Marks){
    console.log(`${x} : ${Marks[x]}`);
    totalMarks += Marks[x];
}

console.log(`The total marks is: ${totalMarks}`)