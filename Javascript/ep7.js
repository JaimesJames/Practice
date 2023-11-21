//Destructuring

const colors = ['Green', 'red', 'yellow']
const green = colors[0]
const red = colors[1]
const yellow = colors[2]

console.log(green, red, yellow)
////

const [newGreen, newRed, newYellow] = colors

console.log(newGreen, newRed, newYellow)
////

const [newNewGreen,, newNewYellow] = colors

console.log(newNewGreen, newNewYellow)
////-------------------------
const customer = {
    cname : 'JaimesJames',
    age : '20',
}
////
const {cname, age} = customer

console.log(cname)
console.log(age)