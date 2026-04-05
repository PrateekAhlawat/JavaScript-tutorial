// Create a user object with some arguments
const user = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  isActive: true,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
};

// console.log(user);
// console.log(user.address)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// user.greet();

//Using for loop:
// for(let keys in user){
//     console.log(keys, user[keys])
// }