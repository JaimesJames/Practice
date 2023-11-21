//all Loop

const data = [10, 20, 30, 40, 50]

for(let i = 0 ; i < data.length; i++){
    console.log(`loop No. ${i} = ${data[i]}`)
}

///////
data.forEach(e => {console.log('Each '+e)})

///////
for (const element of data){
    console.log(`of ${element}`)
}