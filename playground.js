// var name = 'JD';

// var age = 39;

var str = 'Some string' + ' some other text' + ' some more';

str += ' and on and on';

// console.log(str);



// Boolean

var person = {
  name: 'JD',
  age: 39,
  eye_color: 'grey',
  hobbies: ['music', 'pickleball'],
  getAge: function () { } // function on an object is called a "method"
}; // Organizing data by useful names


// Functions -- Most students hit a wall here
// Just runs some code for you
// -- Save some code to run over and over if needed
// Can be dynamic
// Can create Objects Dynamically
// Always work the same way!!!!!!!!!!!

var doSomething = function () { };
// var name = 'Bob';
// console.log(name);
// Step #1 -- Create the function
// Parameter -- reference to the values you passed in, in the order you passed them in
// function myFunc(name, age, mySpecialFunc) {
//   // scope -- private to this function
//   // console.log('My name is ' + name + ' and I am ' + age + ' years old.'); // Concat
//   // Whole bunch of stuff

//   // Then call a function
//   setTimeout(function () {
//     console.log('yay, timed out!');
//   }, 5000);


//   someFunction(function() {

//   })


//   // mySpecialFunc();
// }

// function setTimeout(func, time) {
//   // After the time has passed
//   func();
// }


// not defined means you didn't create a variable or a function with that name
// console.log(name, age);

// Step #2 -- Call it!
// Argument
// myFunc('Sarah', 50);
// myFunc('JD', 39, function () { console.log('my special func') });





// var isOld = false;
// var age = 15;

// if (isOld === true) {
//   console.log('yep!');
// } else {
//   console.log('nope');
// }

// function someFunc() {
// if (isOld === true) {
//   console.log('yep!');
// } else if (isOld === false) {
//   console.log('not a teen');
// } else if (age < 30) {
//   console.log('less than 30');
// }
// else {
//   console.log('nope');
// }
// }

// someFunc();

// console.log('test');
// Over and over -- iterate
// counter -- keep track of how many times it runs
// condition -- tell the for loop when to stop <---- IMPORTANT
// var fruits = ['orange', 'grape', 'apple'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// for (var counter = 65; counter < 91; counter++) {
//   var letter = String.fromCharCode(counter);
//   console.log(letter);
// }

// function someFunc(name, age, obj, arr) {
//   console.log(age);

//   age++;

//   console.log(age);
//   // console.log(arr);
// }

// someFunc('JD', 30, { name: 'JD' }, ['banana', 'grape'])


// if/else statements and conditionals
// loops
// function scope
// objects in functions
// booleans
// truthy's
// text in the browser

// var falsey = {};


// if (falsey) {
//   console.log('is a truthy');
// }

function myFunc() {
  // Local Scope
  // private world inside the function
  // var test = 'test';

  // console.log(test);
  // function another() {
  //   var someVar = 'var';
  //   console.log(test);
  // }

  // someVar
}

// myFunc();

// Global Scope

// $('body').text('Some text I just added!');

// var body = document.body;
// var h1 = document.querySelector('h1');

// h1.innerText = 'Yay, here we go!!';


$('h1').text('Easy jQuery');
$('body').css('background', 'orange');