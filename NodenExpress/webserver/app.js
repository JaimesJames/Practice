//express.js
const router = require('./routes/myRouter')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
// const router = express.Router()
const app = express()
//to call dynamic file for dynamic web page
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//for get authority to read info in POST
app.use(express.urlencoded({extended:false}))

//to generally use for static file management
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser())
app.use(session({secret:'mysession',resave:false, saveUninitialized:false}))
// const indexpage = path.join(__dirname,'webpages/index.html')

// router.get('/',(req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(indexpage)
//     // res.send("Hello Express.js")
// })

// router.get('/product',(req,res)=>{
//     res.sendFile(path.join(__dirname,'webpages/product.html'))
// })

//for calling module myRouter
app.use(router)



app.listen(8080, ()=>{
    console.log('running server at port: 8080')
})









//Node.js pure

// const fs = require("fs");
// const http = require("http");
// const url = require('url')

// const indexpage = fs.readFileSync(`${__dirname}/webpages/index.html`,'utf-8')
// const productpage = fs.readFileSync(`${__dirname}/webpages/product.html`,'utf-8')
 
// const server = http
//   .createServer((req, res) => {
//     // const pathname = req.url;
//     console.log(url.parse(req.url,true));
//     const {pathname, query} = url.parse(req.url,true)
//     if (pathname === "/" || pathname === "/home") {
//         const myhtml = `
//         <h1>hello welcome</h1>
//         <p>come with me ka eiei</p>
//         `;
//         // res.write(myhtml)
//         res.end(indexpage);
//     }
//     else if (pathname === '/product'){
//         console.log(query)
//         if (query.id == 1){
//             res.end('<h1>see 1</h1>')
//         }
//         else{
//             res.end(productpage)
//         }
        
        
//     }
//     else{
//         res.writeHead(404)
//         res.end('<h1>not found</h1>')
//     }
//   })
//   .listen(3000, () => {
//     console.log("start server in port 3000");
//   });
