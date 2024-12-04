const mongoose=require('mongoose')

const memeberSchema=new mongoose.Schema({
    name:{type:String},
    mobile:{type:Number},
    email:{type:String},
})

module.exports=mongoose.model('Member',memeberSchema)