//Spread Operator ...

const newArr = [100, 200, 300]
const newJean = [100, 200, 300]
const data1 = [10, 20, newArr]
const data2 = [10, 20, ...newArr] //...เพื่อนับค่าในอาเรซ้อนด้วย

data1.push(newJean)
data2.push(...newJean)//...เพื่อนับค่าในอาเรซ้อนด้วย

console.log(data1)
console.log(data1.length)

console.log(data2)
console.log(data2.length)