     /* STRING */
  //Syntax  :-
  // const Name = new String("Prateek")

const Name = "Prateek Ahlawat"
const Age = 22;

console.log(`Hello! my name is ${Name} and i am ${Age} years old.`)

// Use Methods and functions:-
const UserName = new String('Anubhav Ahlawat')
console.log(UserName.length)    // String ki length => 15
console.log(Name.toUpperCase())  // String in uppercase => ANUBHAV AHLAWAT


const user1 = UserName.substring(0, 5)
console.log(user1)          // Sub-String from (0, 5)=> Anubh

const user2 = UserName.slice(-13, 5)
console.log(user2)         // slice-String from (-13, 5)=> ubh

const str = "   Hello world    "
console.log(str.trim())   // Trim is use to remove extra whitespace
console.log(str.replace('world', 'Prateek'))