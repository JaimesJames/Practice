//push, pop, shift, unshift

const data = [10, 20, 30]

data.push(500)
data.push(...[800,1000])

console.log('push '+data)

data.pop()
console.log('pop '+data)

data.unshift(1)
data.unshift(...[2,3])

console.log('unshift '+data)

data.shift()
console.log('shift '+data)