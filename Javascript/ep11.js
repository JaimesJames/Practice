//splice & slice

const data = [10, 20, 30, 40, 50]

console.log(data);
console.log(data.splice(1,3,99)) //(splice(startindex, many, insertinstead)) to cut'em
console.log(data)// change structure
console.log('------')
const data2 = [10, 20, 30, 40, 50]
console.log(data2)
data2.slice(1,3)
console.log(data2) // nothing happen
console.log(data2.slice(1,3))//slice(startindex, lastindex) to select only