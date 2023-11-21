//Array Reduce to one return value

const data = [10, 20, 30, 40]

const result = data.reduce((value,e)=>{
    const total = e+value
    return total
},0) //value = 0 <--- if no change what

console.log(result) //value += e loop