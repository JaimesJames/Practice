//Non-Blocking
const fs=require('fs')

//read
fs.readFile('myFile/input.txt','utf-8',(err,data)=>{
    if (err)return console.log('file suck')
    console.log(data)
    const output = `<3 ${data}<${new Date()}>`
    fs.writeFile('myFile/output.txt',output,err=>{
        if(err)return console.log('mistake')
        console.log('finnish')
    })
})

