"use strict" //Treat all JS code as newer version

//alert(3 + 3) //we are using node.js not browser

let name = "Prateek"  // String
let age = 22          // Int
let isBoy = true      // Boolean
let marks = null;
let rollno;

    /* PRIMITIVE DATATYPES */
// number=> 2^53
// bigint
// String => ""
// boolean => true/false
// null => standalone value   e.g:-// int marks = null;
// undefine =>               e.g:-//  int rollno;
// symbol => unique

 console.log(typeof age)  //type => "number"
   console.log(typeof "Prateek")  //type => "string"
   console.log(typeof true)  //type => "boolean"
   console.log(typeof undefine)  //type => "undefine"

console.table([name,age,isBoy,marks,rollno])


    /* NON PRIMTIVE DATATYPES */
   /* Objects
      Array
      Function
   */

//object
 console.log(typeof null)  //type => "object"

let myobj = {
  MyName: "Prateek_Ahlawat",
  Age: 22
}
console.log(myobj);


//array
let arr = ["Prateek", 16, "hello", true, "", null]
 console.log(arr);

//function
const myFunction = function(){
  console.log("Hello world")
}





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive)  and  Heap(Non-Primitive)

let myName = "PRATEEK_AHLAWAT"
let anotherName = myName    // Stack
anotherName = "Yarsh_Kadiyan"

console.log(myName); console.log(anotherName);   //value change only that variable which is to be change

let user1 = {
  email: "prateekahlawat@gmail.com",
  password: "*********"
}

let user2 = user1             // Heap
user2.email = "ahlawat@google.com" 

console.log(user1);               // value change in both variable
console.log(user2);




 
  



   
   
   

