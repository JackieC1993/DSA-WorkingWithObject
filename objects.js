const computer = {
  brand: "Tandy",
  weight: 22,
  working: false,
  condition: "mint",
  price: 2894,
  powerUp() {
    return "the computer now is on";
  },
  powerDown() {
    return "the computer is now off";
  },
  fixComputer: () => {
      computer.working = true
  },
  inStock: 10,
  buy(){
      computer.inStock -= 1
      return "Thank you for buying w/ Temu"
  },
  buyMultiple(amount){
      // Adding a guard clause
      if(amount > computer.inStock){
          return `We don't have that many in stock, the max you can buy is ${computer.inStock}`
      }

      computer.inStock -= amount
      return `You have purchased ${amount} ${computer.brand} computers.\nThere are now ${computer.inStock} computers in stock`
  },
  restock(amount){
      computer.inStock += amount
      return `Thanks! There are now ${computer.inStock} ${computer.brand} computers in stock!`
  }
};

// Dot Notation
// console.log(computer.brand)
// console.log(computer.price)

// Bracket Notation
// console.log(computer["weight"])

// The variable weight has the value of the string "weight" assigned to it
// We can pass in a variable as the key to our object using bracket notation and it work just fine!
let weight = "weight"
// console.log(computer[weight])

let key = "brand"
key = "condition"
// console.log(computer[key])

// for-in loops iterate over objects (not arrays)
// for(const key in computer){
//     // console.log(key)
//     console.log(computer[key])
// }

// "new" keyword creates a new instance of a class
// Example below creates instance of a Set
// const arr = [1,2,3,4,5,2]
// const set = new Set(arr)

// Object methods - Object is a class in JS, each class has built-in methods
const computerKeys = Object.getOwnPropertyNames(computer)
// console.log(computerKeys)


// Object.entries(obj)
// Returns an array of subarrays, where the first index in each subarray is the key, and the second index is the value
// console.log(Object.entries(computer))

// Object.keys(obj)
// Returns an array of all the keys in the object
// console.log(Object.keys(computer))

// Object.values(obj)
// Return an array of all of the values in the object
// console.log(Object.values(computer))


// Iterating over the computerKeys array(array has all of the computer object's keys)
for(let i = 0; i < computerKeys.length; i++){
  // Line below prints out all the keys, one for each iteration
  // console.log(computerKeys[i])
  
  // Line below prints out each value for each key inside the computer object
  // console.log(computer[ computerKeys[i] ] )
}


// Using object methods: difference between a method and a function, is that a method belongs to an object/class

// Powering Up the computer
// console.log(computer.powerUp())

// Powering Down the computer
// console.log(computer.powerDown())

// Can use bracket notation to invoke our methods as well
// console.log(computer["powerUp"]())


// Updating/overwriting a property
// console.log(computer.price)

const bfDeal = 1000
computer.price = bfDeal

// console.log(computer.price)


// Using a function that will update one of computer's properties
// console.log(computer)

// Update's computer.working to be true
// computer.fixComputer()


// console.log(computer.buy())
// console.log(computer)



// Using a method that takes in a parameter, called buyMultiple(amount)

// console.log(computer)
// console.log(computer.buyMultiple(5))




// console.log(computer.buyMultiple(10))

// Restocking our computer inventory
// console.log(computer.restock(5))
// console.log(computer)



// Nested Objects
const backpack = {
  color: "green",
  contents: [
    "laptop",
    "paper",
    "phone",
    { wallet: ["money", "id", ["mastercard", "visa card", "discover card"]] },
    {
      pockets: {
        outer: ["metrocard", "tissues"],
        inner: {
          outer: "ruler",
          inner: ["dental floss", { mintFlavor: "peppermint", number: 33 }],
        },
      },
    },
  ],
  zipIt() {
    return "it is zipped";
  },
  unZipIt() {
    console.log("some items fell out");
    return {
      pickUpItems() {
        return ["lip balm", "comb", "38 cents"];
      },
    };
  },
};

// Prints out an object containing wallet key
// console.log(backpack.contents[3])


// Prints out the value for the wallet key
// console.log(backpack.contents[3].wallet)


// Prints out just 'money'
// console.log(backpack.contents[3].wallet[0])


// Prints out the subarray inside of the wallet
// console.log(backpack.contents[3].wallet[2])

// Prints out 'visa card' from the wallet subarray
// console.log(backpack.contents[3].wallet[2][1])


// Get the object w pockets as a key
// console.log(backpack.contents[4])


// Get the value for the key of pockets
// console.log(backpack.contents[4].pockets)
// Bracket notation
// console.log(backpack.contents[4]['pockets'])

// Get the object that has the keys 'outer' and 'inner'
// console.log(backpack.contents[4].pockets.inner.inner)


// Get the object that has mintFlavor, and number as keys inside of the array
// console.log(backpack.contents[4].pockets.inner.inner[1])

// Gets peppermint
// console.log(backpack.contents[4].pockets.inner.inner[1].mintFlavor)

// Great idea to save nested values to a variable(for your own sanity)
// const contentsArr = backpack.contents
// console.log(contentsArr[4])
// const pocketsObj = contentsArr[4]


// Destructuring an object
const { contents } = backpack

// console.log(contents)

// Destructuring the contents array
// We use commas bc the value we want to get is the fourth value in the array. We use commas to represent each index that we are not grabbing
const [,,, wally] = contents

// console.log(wally.wallet)

const { wallet } = wally

console.log(wallet)