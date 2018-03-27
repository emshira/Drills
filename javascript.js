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
/*Q 1 - Which of the following is correct about JavaScript?

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
Answer-->tD. oString() − Returns a string representing the array and its elements.*/


JS Quiz
1.
function() {
    var a = 10;
    if(a > 5) {
        a = 7;
    }
    alert(a);
}
When executed, what value will be alerted to the screen?

7
10
null
undefined

Answer:7
What happens here is exactly as you might expect. You declare a local variable and set its value to 10. Its value is indeed greater than 5, so you set its value to 7. You then alert this new value, 7.

2.
function() {
    if(true) {
        var a = 5;
    }
    alert(a);
}
Ok, so what would be the value alerted by this function?

0
5
null
undefined
Answer: 5
Based on knowledge of several other languages (such as Java or C), this would certainly be true. However, Javascript doesn't change scope when entering if statements, loops, or anything like that, really. The only common thing that will change the scope is entering a function.

So, what does that mean here? Essentially, if you do indeed enter that if statement (which you must, because true is always truthy), a new variable, a, will be allocated at the scope of that function. Anything else in that function, even if it's not in the if statement, has access to the variable a. However, nothing outside of that function has access to a.

This is what many people mean when they claim that Javascript has "Function Scope," as opposed to "Block Scope."


3.
function() {
    a = 3;
    alert(a);
}
it's a global variable. Why? Because it was never specifically declared (using var), so it was assumed to be global. Effectively, it's the same as:
var a;
function() {
    a = 3;
    alert(a);
}
Now, what exactly is a global variable? Where does it actually reside?

When Javascript comes across a global variable, it needs somewhere to put it. It needs somewhere that everywhere else on the page can access. So, it uses the window object. This object is around for the entire lifetime of the page, and everything can access it

4.

var a = 5;
function first() {
    a = 6;
}


function second() {
    alert(a);
}
Assuming I call these functions in order, what value gets alerted?

0
5
6
null
undefined
Answer:6
Here, we allocate a global variable a and set its value to 5. By calling first(), we change its value to 6. This value, 6, then gets alerted.

5.
function first() {
    window.a = 3;
}


function second() {
    alert(a);
}
Assuming I call these functions in order, whats alerted?

0
3
null
undefined
Answer:3
Recall that global variables are really stored in the window object. So, when I call first(), I set the global variable a to 3. Next, second() looks for a variable a to alert to the screen. In this case, the only a it can find is the global variable, so it alerts 3 to the screen.
