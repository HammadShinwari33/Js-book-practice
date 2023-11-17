// =================================================== CHAPTER 01 =======================================================

// ============= PROMPT ==============

// prompt("Hi! How are you?");

// ============= ALERT ==============

// alert("Hello World");

// ============= RANDOM NUMBER ==============

// Math.random();
// console.log(Math.random() * 10);

// console.log(Math.floor(Math.random() * 100));


// =================================================== CHAPTER 02 =======================================================

// ============== TYPE OF ===============


// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);


// ====================== OPERATERS ========================

// ====== ARITHMETIC OPERATOR ======


// ------- ADDITION -------


// -- for number --

// let nr1 = 12;
// let nr2 = 14;
// let result1 = nr1 + nr2;
// console.log(result1);


// -- for string --

// let str1 = "Hello ";
// let str2 = "addition";
// let result2 = str1 + str2;
// console.log(result2);


// ------- SUBSTRACTION --------

// let nr1 = 15;
// let nr2 = 12;
// let result1 = nr1 - nr2;
// console.log(result1);


// ------- MULTIPLICATION --------

// let nr1 = 15;
// let nr2 = 10;
// let result1 = nr1 * nr2;
// console.log(result1);


// ------- DIVISION --------

// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);


// ------- EXPONENTION --------

// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);


// ------- MODULUS --------

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(result1);

// ================= PREFIX AND POSTFIX OPERATERS ===============

// --------- POSTFIX OPERATERS --------

// let nr = 2;
// console.log(nr++);
// console.log(nr);


// --------- PREFIX OPERATERS --------

// let nr = 2;
// console.log(++nr);


// ==================== ASSIGNMENT OPERATERS ======================

// let x = 2;

// x += 2;
// console.log(x);              + KE LIYE HE

// x -=2;
// console.log(x);              - KE LIYE HE

// x *= 6;
// console.log(x);              * KE LIYE HE

// x /= 3;
// console.log(x);               / KE LIYE HE

// x **= 2;
// console.log(x);                POWER NIKALNE KE LIYE HE

// x %= 3;
// console.log(x);                REMINDER NIKALNE KE LIYE HE



// ===================== COMPARISON OPERATOR =====================

// ====== EQUAL =======

// -------- (==) ---------- DOUBLE EQUAL TO

// let a = 5;
// let b = "5";
// console.log(a == b);


// ---------- (===) --------- TRIPLE EQUAL TO

// let x = 5;
// let y = "5";
// console.log(x === y);


// ======= NOT EQUAL =======

// ---------- (!=) ---------- SINGLE NOT EQUAL

// let a = 5;
// let b = "5";
// console.log(a != b);

// ---------- (!==) ---------- DOUBLE NOT EQUAL

// let x = 5;
// let y = "5";
// console.log(x !== y);


// ===== GREATER THAN AND SMALLER THAN =====

// -------- GREATER THAN --------

// let a = 5;
// let b = 6;
// console.log(b > a); 

// -------- SMALLER THAN -------

// let c = 5;
// let d = 6;
// console.log(d < c); 

// ------- GREATER THAN AND EQUAL TO --------

// let e = 5;
// let f = 5;
// console.log(f >= e); 

// ------- SMALLER THAN AND EQUAL TO --------

// let g = 5;
// let h = 5;
// console.log(h <= g); 


// ========================= LOGICAL OPERATER ===========================

// ----------- AND ----------

// let x = 1;
// let y = 2;
// let z = 3;

// console.log(x < y && y < z);

// console.log(x < y && y > z);


// ---------- OR ------------

// let x = 1;
// let y = 2;
// let z = 3;

// console.log(x > y || y < z);


// ---------- NOT ------------

// let x = false;
// console.log(!x);

// let x = 1;
// let y = 2;
// console.log(!(x < y));