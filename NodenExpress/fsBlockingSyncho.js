//Blocking
const fs = require('fs')

//read input.txt file

const data = fs.readFileSync('./myfile/input.txt','utf-8')

console.log(data)

//write
const output = `I Like this Lines : \n${data}`
fs.writeFileSync('myFile/output.txt',output)
console.log('create new message')
console.log('finish')
