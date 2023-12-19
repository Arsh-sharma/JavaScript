let score = "33";

console.log(typeof score)
console.log(typeof(score))

let valInNum = Number(score)

console.log(typeof valInNum)

// if orignally the score was not a number like "33abc" then also this conversion would work but the value of valInNum will be Nan
//Not A Number
//if score was initially null on type conversion it will become 0.
//true => 1, false => 0
//undefined => Nan
//string => Nan
//typeof Nan is a number

let isLoggedIn = 1
let test = Boolean(isLoggedIn)
console.log(test)

let isLoggedOut = 0
let testOut = Boolean(isLoggedOut)
console.log(testOut)

let name = ""
let test2 = Boolean(name)
console.log(test2)

let name2 = "arshiee"
let test3 = Boolean(name2)
console.log(test3)

