//use mongoose
const { name } = require('ejs')
const mongoose = require('mongoose')

//connect to MongoDB
const dbUrl = 'mongodb://localhost:27017/userDB'
mongoose.connect(dbUrl,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).catch(err=>console.log(err))

//Design Schema
let userSchema = mongoose.Schema({
    name:String,
    image:String
})

//create model
let User = mongoose.model('users',userSchema)

//send model
module.exports = User

//function to save data on MongoDB
module.exports.saveUser = async (model,data)=>{
    try{
        await model.save(data)
    }
    catch(err){
        console.log(err)
    }
    
}  