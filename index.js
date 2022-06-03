//What are promises and why do we need them?
//Promises - Promises are used to handle asynchronous operations in javascript . They are easy to manage when delaying with multiple asynchronous operations where multiple call backs
//can create callback hells leading to unmanagable code.
//This doesn't means that Promises are only used for avoiding callback hells,
//insted are ofetn used for handling asynchronous operations.

//Promises takes two executor functions, namely resolve and reject. If the data is feteched correctly then the control is pased
//to resolve another method which in turn calls.then() method , but if the data
// isn't fectched for some reasons i.e., there is an error, then the reject method is called
//which further calls the .correct() method.


//There are three stages in promises 
//1. Pending - When the Promises is still executing i.e., not yet Resolved or rejected are called in pendingstages.
//2. Resolved/fullfill - When the promises is resolved or have fetched the data correctly, it ends up being into resolved state.
//3. Rejected - When the promises falls in fetching the result, it ends up being into rejected state.

const getEmployeeId = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let id = [1,2,3,4,5];
        resolve(id);
        reject("then data isn't found");
    }, 2000);
})
getEmployeeId
         .then((id)=>{
            console.log(id);
})
          .catch((err)=>{
            console.log("Error message :",err);
})

         .finally(()=>{
             console.log("End of Program");
})
//What is the purpose of async/await keywords?
////Async/Await - They are used to handle the promises more efficitiently. The word async is
//used before a function that make sure that it returns a promise. so, we therefore use async
//before the function to return a promise insted of some values/functions.

//Await is used to wait for the result that is supposed to be returned from the promise.
//so, we can use the keyword await the function which perform a promise.

//Awit is used with Async only . it will not use alone.

//Async/Await is also used for making the API calls

const fn1 = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am function two");
    }, 3000);
   })
}
const callFns = async () => {

    let res2=  await fn2();
    console.log(res2);
}

callFns();
//What is hoisting?
//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
//  variables or classes to the top of their scope
// Function hoisting :One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
// Variable hoisting:

// However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until
//  the associated line of code is executed, even if the variable was originally initialized then declared, or declared 
// and initialized in the same line.
//  let and const doesn't support hoisting only var
fn1();

function fn1(){
    console.log("Hi");
}
console.log(a);//Undefined
let a=20;
//What is the DOM?
// HTML is used to structure the web pages and Javascript is used to add behavior 
// to our web pages. When an HTML file is loaded into the browser, the javascript 
// can not understand the HTML document directly. So, a corresponding document is 
// created(DOM)(Documentary Object Model) DOM is basically the representation of the 
// same HTML document but in a different format with the use of objects. 
// Javascript interprets DOM easily i.e javascript can not understand the tags(<h1>H</h1>)
//  in HTML document but can understand object h1 in DOM. Now, Javascript can access 
// each of the objects (h1, p, etc) by using different functions.

//Difference between undefined vs not defined vs NaN?
//undefined:If the variable declered but not intilized at that situation javascript will returns result as undefined.
//Not defined:If the variable is not declered even someone try to use that variable javascript will returns result as Not defined.varibale which is not present in either global or local scope
//NaN:it defines Not a Number

let A;
console.log(A);//undefined
console.log(t);//not defined

//How many operators do we have in JS ?
//Arithmetic Operators
// 2.Comparison Operators
// 3.Logical Operators
// 4.Assignment Operators
// 5.Conditional Operators
// 6.Ternary Operator

//What are pure functions?
//when we pass same input to the function. The function will return same output.
   let val1 = 6;
   let val2 = 4;
   function pure() {
      return val1 * val2;
   }
   console.log(pure());

//What is callback hell?
///Callback Hell - They are just a name or convention for using Javascript functions.It
//insted of returning results immediately like other functions, takes time to produce the
//result. These are more of like an I/O operations.

function print(){
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("0");
            setTimeout(() => {
                console.log("2");
                setTimeout(() => {
                    console.log("3");
                    setTimeout(() => {
                        console.log("4");
                    }, 4000);
                }, 3000);  
            }, 2000);   
        }, 0000);
    }, 1000);
}
print();

//What is promise chaining?
//promise having multiple .then methods 
// Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the 
// result from the previous step this can be done using promise chaining.

let promise = new Promise((resolve, rejecte)=> {
    resolve();
})

promise.then(()=>{
   setTimeout(() => {
       console.log("First call");
   }, 1000);
}).then(()=>{
   return new Promise((resolve, reject)=>{
       setTimeout(() => {
           console.log("second call");
       }, 3000);
   })
}).then(()=>{
   return new Promise((resolve, reject)=>{
       setTimeout(() => {
           console.log("third call");
       }, 2000);
   })
})

//What are arrow functions?
//arrow functions are function defined using arrow symbole
//arrow function having no function keyword before function name
//arrow functions are not hoisted.
let arrowfn = () =>{
    console.log("Hi");
}

//
