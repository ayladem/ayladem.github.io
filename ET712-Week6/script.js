console.log(2 + 10 - 1);
console.log(2 + 10);
console.log(2 + 1);
console.log(2 + 1);
console.log("Hello", 1);


// values
// data types: 3 most important ones: string, number, boolean
// null undefined
// symbol bigint 






// variables,  a-z, A-Z, NUMBERS, $, _
// camelCase, snake_case
// case sensitive

const yearNew = '1996';

let firstName = "John";


firstName = "Mark";

const PI = 3.14;

const age = 1996;


let ageJohn = "";

console.log(typeof ageJohn)


let ageMark
console.log(typeof ageMark)
let checkValue = true;
console.log(typeof {})
console.log(typeof 'John')

console.log(age);
console.log(firstName);
console.log(firstName, yearNew, PI);


console.log(document.querySelector("h1"));
document.querySelector("h1").textContent = "Assignment3";

// operator
// +  -  / * 
const resultA = 2 + 10 - 2
console.log(resultA);

const resultB = 2 + 10 + 'John'
console.log(resultB);

console.log(typeof resultB);


const resultC = 2 - 10 - 'John'
console.log(resultC);
console.log(typeof resultC);

const resultD = 2 * 10 + 'Mark' + 100 / 2;


console.log(resultD);


let x = 10;

x = x + 11;
// same as
x += 11;

x -= 10;
x /= 2;

x++;


console.log(x);

// always assign the value to const varialbe right away when you delare it.
const bestFriendName = 'John';
const secondFriendName = 'Mark';

const birthYearJohn = 1996;
const birthYearMark = 1998;

// console.log(2021 - birthYearJohn > 2021 - birthYearMark);

const currentYear = 2021

const johnOlder = currentYear - birthYearJohn > currentYear - birthYearMark

console.log(johnOlder)
let markOlder;

let y, z;
y = z = 200;

console.log(typeof y, typeof z, johnOlder, currentYear, 100 + 1);
console.log(typeof y + typeof z + johnOlder + currentYear + 100 + 1);
console.log("Checking datatypeof\n\ y: " + " " + typeof y,


    typeof z, johnOlder, currentYear, 100 + 1);

// TEMPLATE LITERALS
let result = `value of y: ${y} , and z is ${z} 
Checking value of markOlder: ${markOlder}, the current year is: ${currentYear} , the sum of 100 and 1 is ${100 + 1}`

console.log(result)

// BMI

x++;
console.log(x);
x++;
console.log(x);


const retireAge = 65
let resultNew = `value of y: ${y} , and z is ${z} Checking value of markOlder: ${markOlder}, the current year is: ${currentYear} , the sum of 100 and 1 isit takes another ${retireAge - (currentYear - birthYearJohn)} years till John retired`

console.log(resultNew);

const newVariable = 100;

//loose mode
console.log(newVariable === '100');
//strict mode
console.log(newVariable === 100);

//comparison operatiors
// >=
// <=
// >
// <
const ageNew = 0;

console.log(ageNew >= 16);


if (ageNew > 16) {
    console.log(`Congrats!You are old enough to drive!`);
}
else if (ageNew === 16) {
    console.log(`Congrats!You can strating NOW!`);
}

else {
    console.log(`You can not drive!`);
}



const ageDrink = prompt(`Enter your age to check if you can drink wine!`);

if (Number(ageDrink) >= 21) {
    console.log(`You can drink wine!`)
}

else {
    // console.log(`YOu can not drink wrine, wait another ${21 - ageDrink} years try water! `);
    //?
    // let pageText = document.querySelector('h1').textContent;

    // pageText = `YOu can not drink wrine, wait another ${21 - ageDrink} years try water! `
    console.log(`YOu can not drink wrine, wait another ${21 - ageDrink} years try water! `)
}


console.log(typeof ageDrink)
console.log(String(2021), 2021)


const curreYear = '2021';
console.log(curreYear - 1996);
console.log(32 + Number(curreYear));


console.log("I'm 12 years old")
console.log('I\'m 12 years old')
console.log('I\'m' + " " + 12 + 'years old')

console.log(111 * '2');
console.log('111' * '2');
console.log('111' / '2');
console.log('111' > '2');
console.log('101' > '2');
// x++
// x--


// Truthy Value vs Falsy Value
if (ageNew > 0) {
    console.log('got your age')
}
else if (ageNew === 0) {
    console.log('got your age, and you are a newborn')
}
else {
    console.log(' we didn\'t get your age')
};

//falsy value: 0 ,'' ,undefined, null, NaN 


//Boolean Logic
console.log(ageNew && 2);

const ageMark2 = true;
const visionMark2 = false;
const tiredOrNot = true;
console.log(ageMark2 || visionMark2 && tiredOrNot);
console.log(!visionMark2);

// Oct 4th class
// Practice: Design a Game
//     *if user put value between 100 and 110, display below message:
// "Congrats! You got the correct number!"
//     *if user put value between 180 - 190 display below message:
// "Good job, the number looks good!"
//     * otherwise, display "You loose the game = ( "

const userInput = Number(prompt("Enter a number here to start the game!"))


// console.log(typeof userInput)
// console.log(NaN > 2);
// console.log(Number('SOMETEXT'));

// if (userInput > 100 && userInput < 110) {
//     console.log("Congrats! You got the correct number!")
// }
// else if (userInput > 180 && userInput < 190) {
//     console.log("Good job, the number looks good!")
// }

// else {
//     console.log("You loose the game = (")
// }

if (!userInput) {
    console.log("Please enter a Number!")
}

else if (userInput > 100 && userInput < 110 || userInput > 180 && userInput < 190) {
    console.log("Congrats! You got the correct number!")
}

else {
    console.log("You loose the game = (")
}

//switch 

const cup = "Icecream";



switch (cup) {
    case "coffee":
        console.log("I like coffee");
        console.log("Drinking coffee is healthy");
    case 'Tea':
        console.log("Teas is great");
    case 'Bagle':
        console.log("Balge is good for breakfast");
        break;
    default:
        console.log("no food!");
}


// tenary operator

userInput > 100 ? console.log('good') : console.log('wrong number')


// or write this way:
const resultN = userInput > 100 ? 'good' : 'wrong number';
console.log(resultN);


function show() {
    console.log("Amazing Day!.......");
}

show();
show();
show();
show();
show();
show();
show();
show();
show();
