//----------------------------------------------------

// Arithmatic Operator {+ , - , * , / , %}
// let x = 10
// let y = 20
// console.log("Addition:", x+y);
// console.log("Subtraction:", x-y)
// console.log("Division:", x/y)
// console.log("Multiplication:", x*y)
// console.log("Modulous:", x%y)

//---------------------------------------------------

// Assignment Operator {+= , -= , *= , /= , %= , **=}
// let p = 10
// let q = 20
// console.log("Adding to", p+=q);
// console.log("Subtract to", p-=q);
// console.log("Multiply to", p*=q);
// console.log("Divide to", p/=q);
// console.log("Modulo to", p%=q);
// console.log("Square to", p**=q);

//----------------------------------------------------

// Comparision Operator {> , < , >= , <= , == , ===}
// let a = 10
// const b = 20

// console.log("Greater than:", a>b)
// console.log("less than:", a<b)
// console.log("Greater than equals:", a>=b)
// console.log("less than equals:", a<=b)
// console.log("Equals to:", a==b)
// console.log("Type:", a===b) // check same type and then comparision

//---------------------------------------------------

// Logical Operator {&& , || , !}
let c = 20
let d = 30
let e=Boolean(c && d);
console.log("AND: ", e)
/* Since the first operand is truthy, && returns the second operand (d).

So e = 30. */
e=Boolean(c || d);
console.log("OR: ", e)
/* For ||, if the first operand is truthy, it returns that operand without checking the second.

So e = 20. */

//---------------------------------------------------

// null is loosly equal to undefine only
// console.log(null==undefined)
// console.log(null===undefined)
// console.log(null==0)
// console.log(null=="")
// console.log(null==false)
// console.log(null==NaN)
// console.log(null>="")
// console.log(NaN == NaN)