//! Assignment 1
console.log("Hello World")


//! Assignment 2
let myString = "hello";
console.log(myString);


//! Assignment 3
const constantSrting = "World";
console.log(constantSrting);


//! Assignment 4
console.log(myString + " " + constantSrting);


//! Assignment 5
console.log(`${myString} ${constantSrting}`);



//! Assignment 6
let changeableInteger = "99"
const constantNumber = "69"



//! Assignment 7 - Gjort rett??? 
console.log(changeableInteger);
console.log(constantNumber); 
console.log(changeableInteger , " " , constantNumber);



//! Assignment 8
let sum = changeableInteger + constantNumber;
console.log(sum);



//! Assignment 9
changeableInteger = 19
console.log("Updated changeable integer:", changeableInteger);



//! Assignment 10 - Gjort rett??? 
console.log(sum);



//! Assignment 11 - Trur eg har gjort nokka feil når summen ikke adderes. 
sum = changeableInteger + constantNumber;
console.log(sum); 



//! Assignment 12 
let number = 13;
// console.log(number)


//! Assignment 13 
number++;
// console.log(number)



//! Assignment 14
number--;
// console.log(number)



//! Assignment 15
number *= number; 
// console.log(number)



//! Assignment 16 
number /= number;
// console.log(number)



//! Assignment 17
const myArray = ["chest", "sholder", "back", "legs"]



//! Assignment 18
console.log(myArray);


//! Assignment 19
console.log(myArray[2]);


//! Assignment 20
console.log(myArray[1]);


//! Assignment 21
myArray.push("calves");
console.log(myArray);



//! Assignment 22
myArray.unshift("Triceps");
console.log(myArray);



//! Assignment 23
myArray.pop();
console.log(myArray);



//! Assignment 24
console.log(myArray.length);



//! Assignment 25
myArray.splice(1,1);
console.log(myArray);


//! Assignment 26 - Ane ikke ka eg jor. - få ei forklaring på koffør detta funka.
function getLastElement() {
    return myArray[myArray.length - 1];
}
console.log(getLastElement());


//! Assignment 27
const person = {
    firstName: "Stian",
    lastName: "karlsen",
    hobbies: ["exercie", "gaming", "sleep"]
};


//! Assignment 28 
function gettFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(gettFullName(person));


//! Assignment 29 
console.log(person.hobbies[0]);


//! Assignment 30
const person1 = {
    firstName: "Zack",
    lastName: "Hoyt",
    age: 31,
    hobbies: ["games", "stream", "share his opinion"]
};

const person2 = {
    firstName: "Donald",
    lastName: "Trump",
    age: 78,
    hobbies: ["gender rights", "politics", "buiseness"]
};

const arrayOfPeople = [person1, person2];


//! Assignment 31
console.log(arrayOfPeople[0].firstName)



//! Assignment 32
console.log(arrayOfPeople[1].lastName)


//! Assignment 33
console.log(arrayOfPeople[1].hobbies[1]);



//! assignment 34
const firstPerosn = arrayOfPeople[0];
console.log(firstPerosn.hobbies[1]);
