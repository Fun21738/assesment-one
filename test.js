// 'use strict'
// // alert('hello ,there')

// // .VARIABLES
// // let messages = "hey there am learning js";
// // alert(messages);   //=hey there am learning js

// // let user= 'josh' ,age = '19' ,message = 'rada msee';
// // alert(user);   //=josh
// // alert(message);  //=rada msee


// // CONSTATNTS   =declares a constant use   //const\\
// // const myBirthday = '18.04.1999';
// // alert(myBirthday);


//     // DATATYPES

//     // Strings   ='must be surrounded by qoutes'  single ,double  or blacklist qoutes
//     // let name = "josh";
//     // alert(`hello,${name}!`);
//     // strngs conversion   happens when we need a string from a value.
//     // let value = true;
//     // alert(typeof value); // boolean
//     // value = String(value); // now value is a string "true"
//     // alert(typeof value);

//     // Boolean(logical type)= has two values true or false
//     // let isGreater = 4>1;
//     // alert(isGreater);    = true

//     // null value  = referenced as none existing thing    (undefined)
//     // let age = 100;
//     // age = undefined;
//     // alert(age);  = undefined



//         // PROMPT  ACCEPTS TWO FUNCTIONS   button  ok/cancel
//         // let age = prompt('how old are you?');
//         // console.log(age);
//         // alert(`you are ${age}years old`);

//         // let test = prompt("Test", ''); // <-- for IE
//         // console.log(test)

//         // CONFIRM shows a modal widow with a question and two buttons ok/cancel
//         // let isBoss = confirm("are you the boss?");
//         // alert(isBoss);




// // increment/decrement   ==++  / --    same as counter+1 /counter-1

// // bitwise operaators
// // AND ( & )
// // OR ( | )
// // XOR ( ^ )
// // NOT ( ~ )
// // LEFT SHIFT ( << )
// // RIGHT SHIFT ( >> )
// // ZERO-FILL RIGHT SHIFT ( >>> )



// // if statement 
// // let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// // if (year == 2015) alert( 'You are right!' );
// // else(alert('incorrect'))

// // let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// // if (year < 2015) {
// //   alert( 'Too early...' );
// // } else if (year > 2015) {
// //   alert( 'Too late' );
// // } else {
// //   alert( 'Exactly!' );
// // }




// // CONDITIONAL OPERATOR 
// // let accessAllowed;
// // let age = prompt('How old are you?', '');
// // if (age > 18) {
// //   accessAllowed = "freshi barida";
// // } else {
// //   accessAllowed = "uachange ufala";
// // }
// // alert(accessAllowed);



//         // LOGICAL OPERATORS 
//         OR rep by ||  eg   a||b
//         alert( true || true );   // true
//         alert( false || true );  // true
//         alert( true || false );  // true
//         alert( false || false ); // false



// and "&&" 
// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }



                                                                    // let userName = prompt("Who's there?", '');

                                                                    // if (userName === 'Admin') {

                                                                    //   let pass = prompt('Password?', '');

                                                                    //   if (pass === 'TheMaster') {
                                                                    //     alert( 'Welcome!' );
                                                                    //   } else if (pass === '' || pass === null) {
                                                                    //     alert( 'Canceled' );
                                                                    //   } else {
                                                                    //     alert( 'Wrong password' );
                                                                    //   }

                                                                    // } else if (userName === '' || userName === null) {
                                                                    //   alert( 'Canceled' );
                                                                    // } else {
                                                                    //   alert( "I don't know you" );
                                                                    // }



// LOOPS REPEAT ACTIONS
// WHILE LOOP 

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;                                   i++ or i--
// }

// DO WHILE LOOP 
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// FOR LOOP         commonly used
// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     alert(i);
//   }

// CONTINUE TO THE NEXT ALITERATION 
// for (let i = 0; i < 20; i++) {
//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;
//     alert(i); // 1, then 3, 5, 7, 9




            // SWITCH STATEMENT 
            // let a = 2 + 2;
            // switch (a) {
            //   case 3:
            //     alert( 'Too small' );
            //   case 4:
            //     alert( 'Exactly!' );
            //   case 5:
            //     alert( 'Too big' );
            //   default:
            //     alert( "I don't know such values" );
            // }

            // TYPE MATTERS      Let’s emphasize that the equality check is always strict
                // let arg = prompt("Enter a value?");
                // switch (arg) {
                // case '0':
                // case '1':
                //     alert( 'One or zero' );
                //     break;

                // case '2':
                //     alert( 'Two' );
                //     break;

                // case 3:
                //     alert( 'Never executes!' );
                //     break;
                // default:
                //     alert( 'An unknown value' );
                // }



   // FUNCTIONS 
//    OUTER VARIABLES IN FUNCTIONS 
// let userName = 'John';
// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// showMessage(); // Hello, John

// parameters   pases arbitiary data to functions
// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }
//     showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// default values 
// function showCount(count) {
//     // if count is undefined or null, show "unknown"
//     alert(count ?? "unknown");
//   }
//     showCount(0); // 0
//   showCount(null); // unknown
//   showCount(); // unknown

//  return value    =There may be many occurrences of return in a single function. For instance:
// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
//     let age = prompt('How old are you?', 18);
  //   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

// recursion and stack 
// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   alert( pow(2, 3) ); // 8
// // using a loop

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//     alert( sumTo(100) );

// //   The solution using recursion:
//     function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
//   }
//     alert( sumTo(100) );

// //   The solution using the formula: sumTo(n) = n*(n+1)/2:
//     function sumTo(n) {
//     return n * (n + 1) / 2;
//   }
//     alert( sumTo(100) );







                                                                                                    // OBJECTS 

                                                                                                    // Square brackets 
                                                                                                    // let user = {
                                                                                                    //     name: "John",
                                                                                                    //     age: 30
                                                                                                    //   };
                                                                                                    //   let key = prompt("What do you want to know about the user?", "name");
                                                                                                    //     // access by variable
                                                                                                    //   alert( user[key] ); // John (if enter "name")





// ARRAYS used to store elements of any type

// mix of values
// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// // get the object at index 1 and then show its name
// alert( arr[1].name ); // John
// // get the function at index 3 and run it
// arr[3](); // hello


// to get the last Element in an array 
// let fruits = ["Apple", "Orange", "Plum"];
// // same as fruits[fruits.length-1]
// alert( fruits.at(-1) ); // Plum


// Methods pop/push, shift/unshift
// push = appends Elements to the end    = push  adds an element to the end
// shift = get an element at the begining ,so that the second element bcomes the first  , pop  = takes an element from the end

// // pop    =Extracts the last element of the array and returns it:
// let fruits = ["Apple", "Orange", "Pear"];
// alert( fruits.pop() ); // remove "Pear" and alert it
// alert( fruits ); // Apple, Orange


// push    =Append the element to the end of the array:
// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// alert( fruits ); // Apple, Orange, Pear


// // shift = Add the element to the beginning of the array:
// let fruits = ["Apple", "Orange", "Pear"];
// alert( fruits.shift() ); // remove Apple and alert it
// alert( fruits ); // Orange, Pear


// // unshift   = Add the element to the beginning of the array:
// let fruits = ["Orange", "Pear"];
// fruits.unshift('Apple');
// alert( fruits ); // Apple, Orange, Pear

// Methods push and unshift can add multiple elements at once:
// let fruits = ["Apple"];
// fruits.push("Orange", "Peach");
// fruits.unshift("Pineapple", "Lemon");
// // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
// alert( fruits );


        // Array methods
                // splice  delete an element from the array?
                // let arr = ["I", "study", "JavaScript"];
                // arr.splice(1, 1); // from index 1 remove 1 element
                // alert( arr ); // ["I", "JavaScript"]
              
                // concat
                // let arr = [1, 2];
                // // create an array from: arr and [3,4]
                // alert( arr.concat([3, 4]) ); // 1,2,3,4
                // // create an array from: arr and [3,4] and [5,6]
                // alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
                // // create an array from: arr and [3,4], then add values 5 and 6
                // alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,


                // filter 
                // let users = [
                //     {id: 1, name: "John"},
                //     {id: 2, name: "Pete"},
                //     {id: 3, name: "Mary"}
                //   ];
                //                     // returns array of the first two users
                //   let someUsers = users.filter(item => item.id < 3);
                //   alert(someUsers.length); // 2

                // map
                // let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
                // alert(lengths); // 5,7,6

                // sort(fn)
                // function compareNumeric(a, b) {
                //     if (a > b) return 1;
                //     if (a == b) return 0;
                //     if (a < b) return -1;
                //   }
                //   let arr = [ 1, 2, 15 ];
                //   arr.sort(compareNumeric);
                //   alert(arr);  // 1, 2, 15 



// promise 
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });
// // resolve runs the first function in .then
// promise.then(
//   result => alert(result), // shows "done!" after 1 second
//   error => alert(error) // doesn't run
// );

// // incase of rejection 
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
// // reject runs the second function in .then
// promise.then(
//   result => alert(result), // doesn't run
//   error => alert(error) // shows "Error: Whoops!" after 1 second
// );





                





