// In JavaScript, strings are primitive data types, but they also have access to a range of built-in methods through the String object. Here's a list of some common methods available for strings:

// charAt(): Returns the character at the specified index.
// charCodeAt(): Returns the Unicode value of the character at the specified index.
// concat(): Combines the text of two or more strings and returns a new string.
// indexOf(): Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
// lastIndexOf(): Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
// slice(): Extracts a section of a string and returns it as a new string.
// substring(): Returns the part of the string between the start and end indexes, or to the end of the string.
// startsWith(): Determines whether a string begins with the characters of a specified string, returning true or false.
// endsWith(): Determines whether a string ends with the characters of a specified string, returning true or false.
// includes(): Determines whether one string may be found within another string, returning true or false.
// toLowerCase(): Returns the calling string value converted to lowercase.
// toUpperCase(): Returns the calling string value converted to uppercase.
// trim(): Removes whitespace from both ends of a string.
// replace(): Searches a string for a specified value or a regular expression, and returns a new string where the specified values are replaced.
// split(separator, limit-optional): Splits a string into an array of substrings.
// match(): Retrieves the matches when matching a string against a regular expression.
// repeat(): Returns a new string with a specified number of copies of the string it was called on.
// padStart(): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
// padEnd(): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.

const str = new String("012,345,67,89")
console.log(str.split(",", 2))
