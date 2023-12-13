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

// Polya Problem Solving Methodology
// 1: Understand the Problem
// 2: Write a Plan
// 3: Carry out the Plan
// 4: Refactor and Revise

// input: string
// output: object
// The object will have words and keys, and the number of times they appear in the string as their values


// Using a for-of loop to iterate over the array of words
const findWordFrequency = (str) => {
    // Initialize an empty object (our accumulator)
    const obj = {}
    // Split the string into an array, and omit the spaces
    const strArr = str.split(' ')
    // Iterate over the array
    for(let i = 0; i < strArr.length; i++){
        // if its the first time we're seeing the word, add it to the object and set the value to be 1
        // console.log(strArr[i])
        if(!obj[strArr[i]]){
            obj[strArr[i]] = 1
        } else{
            // else the word is already in the object, so we increment that key's value by 1
            obj[strArr[i]] += 1
        }
    }
    // Return our object(accumulator)
    return obj
}

// console.log(findWordFrequency("Buffalo buffalo Buffalo buffalo buffalo"))



const findWordFrequency2 = (str) => {
    // Initialize an empty object (our accumulator)
    const obj = {}
    // Split the string into an array, and omit the spaces
    const strArr = str.split(' ')
    // Iterate over the array using a for-of loop
    for(let word of strArr){
        // if its the first time we're seeing the word, add it to the object and set the value to be 1
        // console.log(word)
        if(!obj[word]){
           obj[word] = 1
        } else{
            // else the word is already in the object, so we increment that key's value by 1
            obj[word] += 1
        }
    }
    // Return our object(accumulator)
    return obj
}

console.log(findWordFrequency2("Rose rose to look at her rose"))