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
  console.log("Hi, my name is " + this.full_name);
 }


  Human.prototype.sayAge = function(){
  console.log("I'm " + this.age);
 }

var jon = new Human("Jon", 93)
jon.sayName();
jon.sayAge();


function Developer(full_name, age){
    this.constructor.call(this, "Sam", 21)
  }

Developer.prototype = new Human();


var x = new Developer()
x.sayName()
x.sayAge()
