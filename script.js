/*let i = 0;
while (i < 5) {
    console.log("The number is " + i);
    i++;
}*/
/*
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}*/
/*
let i = 0;
do {
    console.log("The number is " + i);
    i++;
} while (i < 5);*/
 /*
const person = {
     fname: "John",
     lname: "Doe",
     age: 25};

for (let key in person) {
    console.log(key + ": " + person[key]);
} 

    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    let sumofelements = (input) => {
        for ( i = 0; i <= input.length; i++) {
            sum += i; 
                                     
                }
                return sum; 
            }
        
    console.log(sumofelements(arr));*/

    /*
    function SquareRoots(arr) {
        return arr.map(Math.sqrt);
    }
    let Array = [1, 4, 9, 16, 25];
    let NewArray = SquareRoots(Array);
    
    console.log(NewArray); 
    */

/*
    function filterArray() {
        let arr = ['mango', 'orange', 'apple', 'grape','date','lime','pear'];
        let filteredArr = arr.filter(item => item.length <= 4);
        
        return filteredArr; 
    }
    
    console.log(filterArray()); */
/*
let allStudents = ["Alice", "Bob", "Charlie", "David", "Eva"];
function findStudent(allStudents, studentName) {
    for (i = 0; i < allStudents.length; i++) {
        if (allStudents[i]=== studentName) {
            return true;
        }
    }
    return  false;
}
let result = findStudent(allStudents, "john");
console.log(result);*/


function fizzBuzz() {
    let i = 1; 
    while (i <= 100) { 
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
        i++;
    }
}
fizzBuzz();



    






   
    

    