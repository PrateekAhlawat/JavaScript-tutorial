const arr = [10,56,4,99,20,15,4]
//----------------------------------------------

// Foreach:
// arr.forEach((num,index,arr)=>{
//     console.log(num,index,arr)
// })
// let sum = 0;
//  arr.forEach((num)=>{
//     sum+=num
// })
// console.log("Sum of element:",sum)

//-----------------------------------------------

// Filter:
// const newarr = arr.filter((num)=> num>20);
// console.log(newarr)

//-----------------------------------------------

//Mapping:
// const newArr = arr.map((num)=> num*2);
// console.log(newArr)

//------------------------------------------------

// Product Array Example:
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, inStock: true },
    { id: 2, name: "Book", category: "Education", price: 19.99, inStock: false },
    { id: 3, name: "Headphones", category: "Electronics", price: 149.99, inStock: true },
    { id: 4, name: "Coffee Mug", category: "Kitchen", price: 12.99, inStock: true },
    { id: 5, name: "Running Shoes", category: "Sports", price: 89.99, inStock: false }
];

// console.log("Products:", products);

//-----------------------------------------------

//Reduce:
// const total = arr.reduce((acc, num) => acc + num, 0);
// console.log("Total:", total);

// const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
// console.log("Total Price:", totalPrice);

//------------------------------------------------

// Set:
const mySet = new Set([1, 2, 3, 4, 5, 5, 6]);
// console.log("Set:", mySet);

// // Add elements to the set
// mySet.add(7);
// mySet.add(8);
// console.log("After adding elements:", mySet);

// // Check if an element exists in the set
// console.log("Does the set contain 3?", mySet.has(3));
// console.log("Does the set contain 10?", mySet.has(10));

// // Remove an element from the set
// mySet.delete(4);
// console.log("After deleting an element:", mySet);

// // Get the size of the set
// console.log("Size of the set:", mySet.size);

// Clear all elements from the set
// mySet.clear();
// console.log("After clearing the set:", mySet);

// Set using Array:
const s1 = new Set(arr);
s1.add(11);
console.log(s1)