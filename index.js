document.write("Welcome to JS learning");
// alert("Fathima Nezrin, you are a stupid...hahahaha..");
console.log("Same to you brother");
document.write("<h2>Fathima Nezrin</h2>")

// Variables & Datatypes
// *********************
// String

var fName = "Fathima";
let lName = "Nezrin";
document.write(fName + "<br>") ;
fName = "FATHIMA";
document.write(fName + "<br>") ;


document.write("<br>");
document.write(typeof fName);

document.write("<br>");

// Number

var num1 = 5;
let num2 = 10;
document.write(num1);
document.write("<br>");
document.write(typeof num1);
document.write("<br>");
document.write(num1 + num2);

document.write("<br>");

// Boolean

var success = true;
let error = false;
document.write(success);
document.write("<br>");
document.write(typeof success);

document.write("<br>");

// Undefined

var test1;
document.write(test1);
document.write("<br>");
document.write(typeof test1);

document.write("<br>");

// Null

var test2 = null;
document.write(test2);
document.write("<br>");
document.write(typeof test2);

document.write("<br>");

const pi = 3.14;
document.write(pi);
// pi= 3;
// document.write(pi);

document.write("<br>");

// Arithmetic Operators
// *********************

// Addition

var a = 10;
var b = 20;

document.write(a + b)

document.write("<br>");

// Subtraction

var a = 10;
var b = 20;

document.write(a - b)

document.write("<br>");

// Multiplication

var a = 10;
var b = 20;

document.write(a * b)

document.write("<br>");

// Division

var a = 10;
var b = 20;

document.write(a / b)

document.write("<br>");

// Modulus

var a = 10;
var b = 3;
// ans = 1 =10-9
document.write(a % b)

document.write("<br>");

// Increment

var a = 20;
a++;
document.write(a)
// a++ = a = a+1;

document.write("<br>");

// Decrement

var a = 20;
a--;
// a-- = a = a-1;
document.write(a)

document.write("<br>");

// Exponentiation(Power of a number)

var a = 2;
document.write(a**2);
// ans =4
document.write("<br>");
var a=10
document.write(a**3);
// ans = 1000
document.write("<br>");

// Assignment Operators
// *********************


// Add and assign (+=)
var a=10
a+=4;
// ans a= a+4 = 10+4 = 14
document.write(a);

document.write("<br>");

// Subtract and assign (-=)
var a=10
a-=4;
// ans a= a-4 = 10-4 = 6
document.write(a);

document.write("<br>");

// Multiply and assign (*=)
var a=10
a*=4;
// ans a= a*4 = 10*4 = 40
document.write(a);

document.write("<br>");

// Divide and assign (/=)
var a=10
a/=4;
// ans a= a/4 = 10/4 = 2.5
document.write(a);

document.write("<br>");

// Modulus and assign (+=)
var a=10
a%=4;
// ans a= a%4 = 10%4 = 2
document.write(a);

document.write("<br>");

// Comparison Operatoors
// *********************

// Equal to(==):it compares the values only

var a = 10;                   var a = 20;
var b = 20;                   var b = 20;
document.write(a == b);       document.write(a == b);
// ans = false                ans = true

document.write("<br>");

// Identical (===):it compares the value and datatype

var a = "20";                 var a = "20";
var b = 20 ;                  var b = "20";
document.write(a === b);      document.write(a === b);
// ans= false                 ans = true

document.write("<br>");

// Not Equal (!=):

var a = 20;                 var a = 10;
var b = 20 ;                var b = 20;
document.write(a != b);     document.write(a != b);
// ans= false                ans = true

document.write("<br>");

// Greater than (>)

var a = 10;                 var a = 20;
var b = 20 ;                var b = 10;
document.write(a > b);      document.write(a > b);
// ans= false                ans = true

document.write("<br>");

// Less than (<)

var a = 20;                 var a = 10;
var b = 10 ;                var b = 20;
document.write(a < b);      document.write(a < b);
// ans= false                ans = true

document.write("<br>");

// Greater than or equal to (>=)

var a = 10;                 var a = 20;                     var a = 25;
var b = 20 ;                var b = 20;                     var b = 20;
document.write(a >= b);     document.write(a >= b);         document.write(a >= b);
// ans= false               ans=true                        ans=true

document.write("<br>");

// Less than or equal to (<=)

var a = 20;                 var a = 20;                     var a = 15;
var b = 10;                 var b = 20;                     var b = 20;
document.write(a <= b);     document.write(a <= b);         document.write(a <= b);
// ans=false                ans=true                        ans=true

document.write("<br>");

// Logical Operators
// *********************

// Logical AND (&&)                       
var a = 10;                                var a = 10;
var b = 20;                                var b = 20;
document.write(a==10 && b==10);            document.write(a==10 && b==20); 
// ans=false                               ans=true

document.write("<br>");

// Logical OR (||)
var a = 10;                                var a = 10;
var b = 20;                                var b = 20;
document.write(a==20 || b==10);            document.write(a==10 || b==10);
// ans=false                               ans=true

document.write("<br>");

// Logical NOT (!) : opposite result
var b = 20;                                 var b = 20;
document.write(!(b == 20));                 document.write(!(b == 200));
// ans=false                                ans = true

document.write("<br>");

// If-Else statement
// *********************
var a = 10;
if(a>0){
    document.write("Positive Number");
}else if(a<0){
    document.write("Negative Number");   
}else{
    document.write("Equal to Zero");
}

document.write("<br>");

// Swuitch statement
// *********************
var a = "A";
switch(a){
    case "A" :
        document.write("Apple");
        break;
    case "B" :
        document.write("Bat");
        break;    
    case "C" :
        document.write("Cat");
        break;
    default :
        document.write("Invalid charecter");
        break; 
    }

    document.write("<br>");

// Loops
// *********************
// For loop
for(var i=0; i<=5; i++){
    document.write(i + "<br>");
}

document.write("<br>");
for(var i=10; i>=5; i--){
    document.write(i + "<br>");
}

document.write("<br>");

// While loop ; first check the condition then execute the code
var i=10;
while(i>=1){
    document.write("Hello" + "<br>");
    i--;
} 

document.write("<br>");

// Do while loop  ; first execute the code then checkes the condition
var i=1;
do{
    document.write(i + "<br>");
    i++
}while(i<=5);

document.write("<br>");

// Functions
// *********************

function greetings(value) {
    document.write("Good Morning " + value + "<br>");
}

function showMessage() {
    const name = document.getElementById("nameInput").value || "Guest";
    greetings(name);
}

function sum(num1, num2){
    document.write(num1 + num2);
}

sum(10, 20);

document.write("<br>");

function add(num1, num2){
    return num1 + num2;
}

var result = add(1, 2);
document.write(result);

document.write("<br>");
document.write("<br>");

// Arrays
// *********************

var animal = ["Lion", "Cat", "Dog","Tiger", "Fox"];
document.write(animal);
document.write("<br>");
document.write(animal[0]);
document.write("<br>");
document.write(animal[1]);
document.write("<br>");
document.write(animal[2]);
document.write("<br>");
document.write(animal[3]);
document.write("<br>");

animal[0] = "Elephant";
document.write(animal)
document.write("<br>");
document.write(animal[0]);
document.write("<br>");

var animal = ["Lion", "Cat", "Dog", "Tiger", "Fox"];
var x = animal.length;
document.write(x + "<br>"); // Display the length of the array

for (var i = 0; i < x; i++) {
    document.write(animal[i] + "<br>");
}

 animal[6] = "Cheetah";
 document.write(animal)
 document.write("<br>");

 animal.push("Dinosar", "Monkey", "Donkey","Squirrel");
 document.write(animal)
 document.write("<br>");

//  shift  : to delete the first element of an array
animal.shift();
document.write(animal)

document.write("<br>");

//  pop  : to delete the last element of an array
animal.pop();
document.write(animal)

document.write("<br>");
//  splice  : to delete the element/s of an array,2 arguments(1st one index of array, 2nd one how many elements to be deleted from the specified index)
animal.splice(2, 1);
document.write(animal)

document.write("<br>");
animal.splice(2, 3);
document.write(animal)
document.write("<br>");

// sort : te get the elements in alphabetic order
var animal = ["Lion", "Cat", "Dog", "Tiger", "Fox"];
animal.sort();
document.write(animal);
document.write("<br>");

var number = [30, 70, 80, 90, 10, 50];

number.sort();
document.write(number);
document.write("<br>");

// to get the elements in reverse order
number.reverse();
document.write(number);
document.write("<br>");

document.write(number[0] + number[3]);
// ans = 90+ 50 = 140
document.write("<br>");

// Strings  : Sequence of charecters, Each charecter is specified as array index
// *****************************************************************************
var text = "Java Script";
document.write(text);
document.write("<br>");

document.write(text[0]);
document.write("<br>");

document.write(text[5]);
document.write("<br>");

// charAt : to get a specific charecter on a speciic index
document.write(text.charAt(2) + "<br>");
document.write(text.charAt(8) + "<br>");

// concat : to add two strings
var text1 = " Learn ";
var text2 = " Java Script ";
document.write(text1.concat(text2) + "<br>");

// toLowerCase & toUpperCase

var msg = "Fathima Nezrin";
document.write(msg.toLowerCase() + "<br>");
document.write(msg.toUpperCase() + "<br>");

// slice  : to cut a part of text from the given text,2 arguments(1st one index of string charecter, 2nd one how many elements to be cut from the specified index)
 
var text = "Nice to meet you";
// cut meet from the text, add 1 to the index to get the full part
document.write(text.slice(7, 12));