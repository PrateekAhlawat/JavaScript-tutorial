
   /* TYPE CONVERSION */
// if there is any type of data that can be conversed in any other type of data for example:-
// string <-> number
// number <-> string
// boolean <-> number
// string <-> boolean....,so on


   /* Number to String Conversion */

// before conversion

 let num = 23

 console.log(num);         // 23
 console.log(typeof num)   // Number

 //After conversion

 let valueInString = String(num)

 console.log(typeof valueInString)  //String
 console.log(valueInString)         //"23"

   /* String to Number Conversion */

// before conversion

 let str = "hello"

 console.log(str);         // "hello"
 console.log(typeof str)   // String

 //After conversion

 let valueInNumber = Number(str)

 console.log(typeof valueInNumber)  //Number
 console.log(valueInNumber)         // NaN

    /* boolean to Number Conversion */

// before conversion

 let bool = true

 console.log(bool);         // true
 console.log(typeof bool)   // boolean

 //After conversion

 let valueInNumbers = Number(bool)

 console.log(typeof valueInNumbers)  // Number
 console.log(valueInNumbers)         // 1


 /* Notes :-
   1 => true , 0 => false 
   "hello" => true , "hel001" => true
   "" => false
   "prateek" => NaN
 */