const express = require('express')
const router = express.Router()
const path = require('path')
const User = require('../models/user')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'.jpg')
    }
})
 
const upload = multer({
    storage:storage
})

// const indexpage = path.join(__dirname,'../public/index.html')

router.get('/',async (req,res)=>{
    const name = 'JaimesJames'
    const test = '<h3>eiei</h3>'
    const product = ['สวัสดี', 'พัดลม']
    // const obj = [
    //     {name:'Jane', follower:100000, following:2 ,image:'images/jane.jpg'},
    //     {name:'Dan', follower:110000, following:3 ,image:'images/dan.jpg'}
    // ]
    
    try{
        let obj = await User.find().exec() 
        res.render('index',{name:name, test:test, product:product, obj:obj})
        // res.render('index',{obj:obj}) 
    }
    catch(err){
        console.log(err)
    }
    
     
    // res.status(200)
    // res.type('text/html')
    // res.sendFile(indexpage)
    // res.send("Hello Express.js")
})

router.get('/manage',async (req,res)=>{
    if(req.session.login){
        
        try{
            let obj = await User.find()
            res.render('manage',{obj:obj})
        // res.render('index',{obj:obj}) 
        } 
        catch(err){
            console.log(err)
        
    }
    }
    else{
       res.render('admin') 
    }
    // try{
    //     let obj = await User.find()
    //     res.render('manage',{obj:obj})
    // // res.render('index',{obj:obj}) 
    // } 
    // catch(err){
    //     console.log(err)
    // }
     
}) 
router.get('/logout',(req,res)=>{
    // res.clearCookie('username')
    // res.clearCookie('password')
    // res.clearCookie('login')
    req.session.destroy((err)=>{
        res.redirect('/manage')
        
    })
    
})
router.get('/delete/:id',async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id,{useFindAndModify:false})
        res.redirect('/manage')
        // res.render('index',{obj:obj}) 
    } 
    catch(err){
        console.log(err)
    }
})

router.get('/product',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../public/product.html'))
    if(req.session.login){
        res.render('product')
    }
    else{
       res.render('admin') 
    }
    

})


router.get('/product/:id',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../webpages/product.html'))

    const myparam = req.params.id
    console.log(myparam)
    if(myparam === '1'){
        const myhtml = `<h1>Productmainjaa ${myparam}</h1>`
        res.send(myhtml)
    }
    else{
        // const myhtml = `<h1>404</h1>`
        // res.send(myhtml)
        res.redirect('/')
    }
    
     
})

router.get('/insert',(req,res)=>{
    console.log(req.query)
    res.redirect('/product')
})

router.post('/insert',upload.single('profile'),async(req,res)=>{
    try{
        console.log(req.file)
        let data = new User({
            name:req.body.name,
            image:req.file.filename
        })
        User.saveUser(data) 
        res.redirect('/product')
    }
    catch(err){
        console.log(err)
    } 
    
})
router.get('/:id', async(req,res)=>{
    try{
        const user_id = req.params.id
        const data = await User.findOne({_id:user_id})
        console.log(user_id)
        res.render('user',{data})
    }
    catch(err){
        // console.log(err)
    }
    
})

router.post('/edit', async(req,res)=>{
    
    try{
        const edit_id = req.body.edit_id
        const data = await User.findOne({_id:edit_id})
        console.log(data)
        res.render('edit',{data})
    }
    catch(err){
        console.log(err)
    }
})

router.post('/update',async(req,res)=>{
    try{
        const update_id = req.body.update_id
        let data = {
            name:req.body.name,
            // image:req.file.filename
        }
        console.log(update_id,data)
        await User.findByIdAndUpdate(update_id,data,{useFindAndModify:false})
        res.redirect('/manage')
    }
    catch(err){
        console.log(err)
    } 
     
})

router.post('/login', (req,res)=>{
    const username = req.body.name
    const password = req.body.password
    const timeExpire = 10000
    if(username === 'admin' && password === '12345'){
        // res.cookie('username',username,{maxAge:timeExpire})
        // res.cookie('password',username,{maxAge:timeExpire})
        // res.cookie('login',true,{maxAge:timeExpire})
        req.session.username = username
        req.session.password = password
        req.session.login = true
        req.session.cookie.maxAge = timeExpire
        res.redirect('/manage')

    }else{
        confirm('something went wrong')
        res.redirect('/')
    }
})


module.exports = router