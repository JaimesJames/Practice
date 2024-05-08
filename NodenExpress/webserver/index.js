const http = require('http')

const server = http.createServer((req, res)=>{
    const myhtml = `
    <h1>hello welcome</h1>
    <p>come with me ka eiei</p>
    `
    res.write(myhtml)
    res.end()
}).listen(3000,()=>{
    console.log('start server in port 3000')
})