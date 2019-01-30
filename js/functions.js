//Riley Snook
//1-29-19

//takes in two numbers and returns the sum of them.
function addition(num1, num2) {
  return Number(num1)+ Number(num2);
}

//This line I looked up to figure out what I had to do and I still don't fully understand
//this is the link where I got the line from
//https://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it
module.exports = addition;