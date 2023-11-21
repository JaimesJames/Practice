//join, concat
const data = [100, 200, 300]

console.log(data)

const result = data.join()
console.log(result)
console.log(data)


const newResult = data.join('*')
console.log(newResult)


const data2 = [1002, 2002, 3002]
const alldata = data.concat(data2)
console.log(alldata)
console.log(alldata.join())
