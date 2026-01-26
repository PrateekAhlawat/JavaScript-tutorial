         /*  ARRAY  */

// let arr = [1,2,3,4,5,6]
// console.log(arr)


// arr.push(10)

// arr.pop()

// arr.unshift(9)  // add value at begging of array index
// arr.shift()   // remove the begging index value

// const newArr = arr.join()   //convert array into string
// console.log(arr);

// console.log(newArr);

   /* Slice & Splice */

//    console.log("A1:- ",arr);
   
// let arr1 = arr.slice(0,3)
// console.log("Slice:- ",arr1)      // [ 1, 2, 3 ]
// console.log("A2:- ",arr);         // [ 1, 2, 3, 4, 5, 6 ]  isme array koi change nahi hota hai
// console.log("\n");

// console.log("A1:- ",arr)
// let arr2 = arr.splice(0, 3)
// console.log("Splice:- ", arr2)    // [1, 2, 3]
// console.log("A2:- ",arr)          // [4, 5, 6]   isme array mai change ho jata hai 

    /* OPERATIONS  */
 // Concatinate Two Arrays:-

//  let superHero = ['Spiderman','Iron man','Dr.Strange']
//  let Dc = ['Flash','Batman']

//  let AllHeros = superHero.push(Dc)
//  console.log(AllHeros)

 // Spread two or more arrays:-

//  let allheros = [...superHero, ...Dc]
//  console.log(allheros) 

  //something new:-
const UnsolvedArr = [1,2,3,[4,5,[6,7,[8],9],[10]]]
console.log(UnsolvedArr.flat(Infinity))
 