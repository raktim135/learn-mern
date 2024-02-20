// In JavaScript, the Number object doesn't have a long list of functions attached to it like some other built-in objects. However, it does have a few methods that you can use. Here's a list of them:

// toExponential(fractionDigits): Converts a number into exponential notation.

// toFixed(digits): Formats a number using fixed-point notation.

// toPrecision(precision): Formats a number to a specified precision.

// toString(radix): Converts a number to a string, optionally using the specified radix (base).

// valueOf(): Returns the primitive value of a Number object.

// let a = 1234567890.59854121;

// console.log(a.toLocaleString('en-IN'))

// console.log(Number.MIN_VALUE)



// The Math object in JavaScript provides a range of mathematical functions and constants. Here are the commonly used methods and properties available in the Math object:

// Methods:
// Math.abs(x): Returns the absolute value of a number.

// Math.ceil(x): Returns the smallest integer greater than or equal to a given number.

// Math.floor(x): Returns the largest integer less than or equal to a given number.

// Math.round(x): Returns the value of a number rounded to the nearest integer.

// Math.max(x1, x2, ..., xn): Returns the largest of zero or more numbers.

// Math.min(x1, x2, ..., xn): Returns the smallest of zero or more numbers.

// Math.pow(x, y): Returns the base to the exponent power.

// Math.sqrt(x): Returns the square root of a number.

// Math.exp(x): Returns the value of E raised to the power of x.

// Math.log(x): Returns the natural logarithm (base E) of a number.

// Math.sin(x): Returns the sine of a number.

// Math.cos(x): Returns the cosine of a number.

// Math.tan(x): Returns the tangent of a number.

// Math.asin(x): Returns the arcsine of a number.

// Math.acos(x): Returns the arccosine of a number.

// Math.atan(x): Returns the arctangent of a number.

// Math.atan2(y, x): Returns the arctangent of the quotient of its arguments.

// Math.random(): Returns a pseudo-random number between 0 and 1.

// Math.round(): Returns the value of a number rounded to the nearest integer.

// Math.sign(x): Returns the sign of a number, indicating whether the number is positive, negative, or zero.


// Math.E: The base of natural logarithms, approximately equal to 2.718.

// Math.PI: The ratio of the circumference of a circle to its diameter, approximately equal to 3.14159.

// console.log(Math.random()*10+1)

const min = 10;
const max = 20;

let random = Math.floor(Math.random() * (max-min+1)) + min
console.log(random)


random = Math.floor(Math.random() * (max-min+1)) + min
console.log(random)
