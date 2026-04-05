     /* STRING */
  //Syntax  :-
  // const Name = new String("Prateek")

// const Name = "Prateek Ahlawat"
// const Age = 22;

// console.log(`Hello! my name is ${Name} and i am ${Age} years old.`)

// Use Methods and functions:-
// const UserName = new String('Anubhav Ahlawat')
// console.log(UserName.length)    // String ki length => 15
// console.log(Name.toUpperCase())  // String in uppercase => ANUBHAV AHLAWAT

//Substring
// const user1 = UserName.substring(0, 5)
// console.log(user1)          // Sub-String from (0, 5)=> Anubh

//Slicing
// const user2 = UserName.slice(-13, 5)
// console.log(user2)         // slice-String from (-13, 5)=> ubh

//Trim & Replace
const str = "   Hello world! Hello   "
// console.log(str.trim())   // Trim is use to remove extra whitespace
// console.log(str.replace('world', 'Prateek'))

//Indexof & Includes
// console.log(str.indexOf('Hel'))
// console.log(str.lastIndexOf('Hel'))
// console.log(str.includes('Hel'))

// Substring
// console.log(str.substring(4,7))

// Split
const names = "Prateek,Mohit,Yarsh,Priya,Aditi"
console.log(names.split(","))