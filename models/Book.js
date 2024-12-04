const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    title: {type:String},
    author:{type:String},
    ISBN:{type:String},
    status:{type:String,default:'available'},
    Borrower:{type:String,default :null},
})

module.exports=mongoose.model('Book',bookSchema);