//----------------------------------------------------------
// Function:
// function greeting(){
//   console.log("Hello! Greeting sir..")
// }
// greeting()

//----------------------------------------------------------

// function in variable:
// const myFun = function(a,b){
// let sum = a+b
// return sum
// }
// console.log(myFun(10,25))

//---------------------------------------------------------

// Arrow function:
// const addition = (num1,num2)=> num1+num2;
// console.log(addition(10,30))

// const findSquare = num => num*num
// console.log(findSquare(5))

// const info = ()=> ({Name:"Prateek", age:22});
// console.log(info())

//-----------------------------------------------------------

//IIFE (Immedeatly Invoke Function)  function:- () and call funtion:- ()
// (function greeting(){
//     console.log("Hello prateek!")
// })();

//-----------------------------------------------------------

//Call back function:
function Question(callback){
    console.log("How are you Mr. Prateek Ahlawat")
    callback();
}
function Answer(){
    console.log("I am good today and you say!")
    
}
// Answer(Question())
Question(Answer)

//------------------------------------------------------------

// Rest operator (for passing multiple arrguments in function)
// function addNumber(...num){
//     let sum=0
//     for(let n of num){
//         sum+=n
//     }
//     console.log("Sum is: ",sum)
//     console.log("Array is: ",num)
// }
// addNumber(2,5,6,8)

//--------------------------------------------------------

//Spread operator:
// const arr1 = [10,20,30,40,50,60]
// const arr2 = [70,80,90,100]
// const ans = [...arr1,...arr2]
// console.log(ans)

//---------------------------------------------------------

