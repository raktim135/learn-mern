// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// console.log(typeof "a")
// console.log(typeof 1)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof Symbol)

// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof new Date())

// console.log(+true)// = 1
// console.log(-true)// = -1
// console.log(+"")// = 0
// console.log(-"")// = -0
// console.log(" ")// = 0
// console.log(-"5")// = -5

// console.log("2" > 1)// = true
// console.log("02" > 0)// = true
// console.log("-02" > 0)// = false

// console.log(null > 0)// = false
// console.log(null == 0)// = false
// console.log(null >= 0)// = true

// //eauility(==) check && comparision(>, <, >=, <=) is diff. in comparision, null converted to 0

// console.log(undefined > 0)// = false
// console.log(undefined == 0)// = false
// console.log(undefined < 0)// = false

const str = new String("0123456789")
console.log(str.slice(-3,-2))