// Polya Problem Solving Methodology
//1. Understand the problem
//2. Write a plan
//3. Carry out the plan
//4. Refactor and Revise

// input: string
// output: object
// The object will have words and keys , and the number of times they appear in the string as their values.

const findWordFrequency = (str) => {
// Initialize an empty object (our accumulator)
const obj = {}
// Split the string intoan array, and omit the spaces
const strArr = str.split('')
//Iterate over the array 
for (let i = 0; i < strArr.length; i++)
//if its the first time we're seeing the word, and it to the object and set the value to be 1.
// console.log(strArr[i])
if (!obj[strArr[i]]) {
    obj[strArr[i]] = 1
}else{
//else the word is already in the object, so we increment that key's value by 1
obj[strArr[i]] += 1
}

//return our object(accumulator)
return obj
}
console.log (findWordFrequency("Buffalo buffalo Buffalo buffalo buffalo"))
