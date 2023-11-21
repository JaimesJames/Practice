//rest Parameter

summation=(a,b)=>{
    return a+b
}

summation=(a,b,c)=>{
    return a+b+c
}

console.log(summation(50,100))
console.log(summation(500,100,10))

newSummation=(...numberArr)=>{
    let total =0
    for(number of numberArr)total += number
    return total
}

console.log(newSummation(500,100,10))