
// ================= CHAPTER 03 =================

// =============================== JAVASCRIPT MULTIPLE VALUES ===========================


// ========== Accessing Element ============

// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);


// =============== Built-in length property ==============

// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);


// ============================== ARRAYS METHOD ===============================

// =============== Adding And Replacing Element ==================

// ======= .push =======

// fruits = ["apple", "mango", "banana"];
// fruits.push("orange", "pineapple");

// console.log(fruits);

// ======= .splice ======

// fruits = ["apple", "mango", "banana", "kiwi"];
// fruits.splice(2,0,"orange", "pineapple");

// console.log(fruits);

// ====== .concat ======

// arr1 = [1, 2, 3];
// arr2 = [4, 5, 6];

// arr3 = arr1.concat(arr2);

// console.log(arr3);


// ======================== DELETING ELEMENT ============================


// ------ .pop ------

// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr1.pop()
// console.log(arr1);


// ------ .shift ------

// arr1.shift();
// console.log(arr1);


// ------ .splice ------

// arr1.splice(1,3);
// console.log(arr1);


// ------ indexOf ------

// ??????????


//  ------ .sort ------

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();

// console.log(names);


//  ------.reverse ------

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.reverse();

// console.log(names);


// ================= practice exercsie 3.2 ====================

// let shoppinglist = ["milk", "bread", "apples"];

// shoppinglist.splice(1,1,"bananas","eggs");

// shoppinglist.pop();
// console.log(shoppinglist);

// shoppinglist.sort();

// let findindex = shoppinglist.indexOf("milk");
// console.log(findindex);

// shoppinglist.splice(1,0,"carrots","lettuce");
// console.log(shoppinglist);

// let i = ["juice","pop"];

// shoppinglist = shoppinglist.concat(i);
// console.log(shoppinglist);

// shoppinglist.pop();
// console.log(shoppinglist);


// ================================ MULTIDIMENSIONAL ARRAY ============================


// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let value1 = arrOfArrays2[0][1];

// console.log(value1);



//  Array = [
//     [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
//     [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
//     [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
//    ]
//    let value = Array[1][2][1];
//    console.log(value);
   


// ============== practice exercise 3.3 ==============

// Array = [
//     [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ,
//     [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ,
//     [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]
//      ];

//      let value = Array[0][1];
//      console.log(value);


// ================================ OBJECT IN JAVASCRIPT ======================================

// let dog = { dogName: "JavaScript",
//  weight: 2.4,
//  color: "brown",
//  breed: "chihuahua",
//  age: 3,
//  burglarBiter: true
//  };

//  console.log(dog.breed);
//  console.log(dog);


// --------------- object in object --------------

// let company = { companyName: "Healthy Candy",
//  activity: "food manufacturing",
//  address: {
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  yearOfEstablishment: 2021
//  };

//  console.log(company.address.city);


// --------------- Arrays in object --------------

// company = { companyName: "Healthy Candy",
//  activities: ["food manufacturing",
// "improving kids' health", "manufacturing toys"],
//  address: {
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  yearOfEstablishment: 2021
//  };

//  console.log(company.activities[2]);


// --------------- object in Arrays --------------

// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//     }];

// let streetname = addresses[0].street;

// console.log(streetname);


// --------------- object in Arrays in object --------------

// company = { companyName: "Healthy Candy",
// activities: [ "food manufacturing",
// "improving kids' health",
// "manufacturing toys"],
// address: [{
// street: "2nd street",
// number: "123",
// zipcode: "33116",
// city: "Miami",
// state: "Florida"
// },
// {
// street: "1st West avenue",
// number: "5",
// zipcode: "75001",
// city: "Addison",
// state: "Texas"
// }],
// yearOfEstablishment: 2021
// };

// console.log(company.address[1].street);



// =========================================== CHAPTER 03 PROJECT =======================================

// ----------------- manupulating array --------------------

// const theList = ['Laurence', 'Svekis', true, undefined];

// theList.shift(); 
// theList.pop();

// theList.unshift("FIRST");

// theList.splice(2,1,"MIDDLE","hello world");

// theList.push("LAST");
// console.log(theList);


// ----------------- Company product catalog --------------------

// HammadStore = [];

// let object = {

//     item1: {
//         name: "honda",
//         model: 2023,
//         cost: 12,
//         quantity: 123
//     },
//     item2: {
//         name: "Mercedis",
//         model: 2023,
//         cost: 34,
//         quantity: 456
//     },
//     item3: {
//         name: "Ferrari",
//         model: 2023,
//         cost: 56,
//         quantity: 789
//     }
// }


// console.log(object.item3.name);



// ======================================= CHAPTER 04 =============================================

// ================ IF and IF ELSE statement ======================




// ================ ELSE IF statement ======================

// let percentage = prompt("Enter your percentage")

// if(percentage < 33){
//     console.log("you are failed")
// }
// else if(percentage < 50){
//     console.log("your grade is D")
// }
// else if(percentage < 65){
//     console.log("your grade is C")
// }
// else if(percentage < 70){
//     console.log("your grade is B")
// }
// else if(percentage < 80){
//     console.log("your grade is A")
// }
// else if(percentage < 90){
//     console.log("your grade is A+")
// }
// else{
//     console.log("You achieved highest marks Welldone!")
// }


// ================ CONDITIONAL TERNARY OPERATER ======================

// let age = +prompt("Enter your age")
// console.log(age < 12 ? "you are not available " : age < 18 ? "you are availaible" : "you are great");


// ================ SWITCH STATEMENT ======================

// let activity = "Breakfast";

// switch(activity) {
//     case "Get up":
//     console.log("It is 6:30AM");
//     break;
//     case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//     case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//     case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//     case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//     case "Dinner":
//     console.log("It is 6:30PM");
//     break;

//       // jab upper kuch bi ni ho tho default me jo value hogi wo lika aayega.

//     default:
//     console.log("I cannot determine the current time.");
//  }


// =========================== COMBINING CASES ==============================

// let grade = prompt("Enter your Grade")

// switch(grade){
//     case "F":
//     case "D":
//     console.log("You've failed!");
//     break;
//     case "C":
//     case "B":
//     console.log("You've passed!");
//     break;
//     case "A":
//     console.log("Nice!");
//     break;
//     default:
//     console.log("I don't know this grade.");
//    }
   

// =========================== PROJECT ==============================

// let randomNumber = Math.random();

// randomNumber = randomNumber * 10;

// RandomNumber = Math.floor(randomNumber); 


// switch(RandomNumber) {
//     case 7:
//     console.log("Congratulation! you win corolla")
//     break;

//     case 2:
//     console.log("Congratulation! you win iphone")
//     break;

//     default : 
//     console.log("better luck next time");
// }



// ======================================= CHAPTER 05 ============================================

// ==================== LOOPS ======================

// ------------------ FOR LOOP ---------------------

// let i = 0;
// for ( i; i < 10; i++) {
//     console.log(i);
//    }


//    let arr = [];
// for (let i = 0; i < 10; i = i + 2) {   
//  arr.push(i);
//  console.log(i);
// }


// ------------------ NESTED LOOP ------------------

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//  arrOfArrays.push([]);

//  for (let j = 0; j < 7; j++) {
//  arrOfArrays[i].push(j);

//  }
// }
// console.log(arrOfArrays);