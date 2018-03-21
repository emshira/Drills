//1.Let’s put OOP to use. Create a Human constructor function that accepts and sets full_name and age attributes.

// function human (full_name, age){
//   this.full_name = full_name;
//   this.age = age;
// }
// //this. refers to the objects


//2.Give Humans the ability to sayName and sayAge

// function human(sayName, sayAge){
//     this.full_name = full_name;
//     this.age = age;
// }
//
// Human.prototype.sayName = function(){
//   console.log("Hi, my name is " + this.full_name);
// }
//
// Human.prototype.sayAge = function(){
//     console.log("I'm" + this.age);
// }
//
// var john = new Human ("John", 93)
// john.sayName();
// john.sayAge();
// //Note in JS you can declare your varible later)

//3.Create a subclass of Human called Developer.
// 1) Define a Developer class.
// 2) Have it inherit from the Human class.

// Human.prototype.sayName = function(){
//

// ES6 OOP
// 1.Create a class named Book. Its constructor should accept and set attributes for title and author.
// class Book {
//   constructor (title, author){
//     this.title = title;
//     this.author = author;
//   }
// }

// 2.Give your Book:
// - a method named getTitle that outputs the title attribute.
// - a method named getAuthor that outputs the author attribute.
// - a method named amISpecial that outputs "I'm Wynning!" if the title starts with the letter "w" (or "W"). Otherwise it should ouput "never judge a book by its cover ;)".


// class Book {
//   constructor (title, author){
//     this.title = title;
//     this.author = author;
//   }
//   getTitle(){
//     console.log (this.title);
//   }
//   getAuthor(){
//     console.log (this.author);
//   }
//   amIspecial(){
//     if (this.title.charAt(0) === "w" || this.title.charAt(0) === "W") {
//       console.log ("I'm Wynning!");
//     } else {
//       console.log ("never judge a book by its cover!");
//     }
//   }
// }


// JS Basic Quiz:
Q 1 - Which of the following is correct about JavaScript?

A - JavaScript is a lightweight, interpreted programming language.
B - JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.
C - The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.
Answer-->D. All of the above.

Q 2 - Which of the following is a valid type of function javascript supports?

A - named function
B - anonymous function
C - Both of the above.
D - None of the above.
Answer-->C.  A function in JavaScript can be either named or anonymous.

Q 3 - Which built-in method returns the length of the string?

A - length()
B - size()
C - index()
D - None of the above.
Answer-->A. length() method returns the length of the string.


Q 4 - Which of the following function of Number object forces a number to display in exponential notation?

A - toExponential()
B - toFixed()
C - toPrecision()
D - toLocaleString()
Answer-->A.toExponential(): Forces a number to display in exponential notation, even if the number

Q 5 - Which of the following function of Number object defines how many total digits to display of a number?

A - toExponential()
B - toFixed()
C - toLocaleString()
D - toPrecision()
Answer--> D.toPrecision() − Defines how many total digits (including digits to the left and right of the decimal) to display of a number.


Q 6 - Which of the following function of String object extracts a section of a string and returns a new string?

A - slice()
B - split()
C - replace()
D - search()
Answer-->A. slice() − Extracts a section of a string and returns a new string.


Q 7 - Which of the following function of String object returns the calling string value converted to lower case?

A - toLocaleLowerCase()
B - toLowerCase()
C - toString()
D - substring()
Answer-->B. toLowerCase() − Returns the calling string value converted to lower case.


Q 8 - Which of the following function of String object creates an HTML hypertext link that requests another URL?

A - link()
B - sub()
C - sup()
D - small()
Answer-->A. ink() − Creates an HTML hypertext link that requests another URL.


Q 9 - Which of the following function of Array object joins all elements of an array into a string?

A - concat()
B - join()
C - pop()
D - map()
Answer-->B. join() − Joins all elements of an array into a string.


Q 10 - Which of the following function of Array object returns a string representing the array and its elements?

A - toSource()
B - sort()
C - splice()
D - toString()
Answer-->tD. oString() − Returns a string representing the array and its elements.
