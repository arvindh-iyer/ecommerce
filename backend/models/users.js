const mongoose=require('mongoose')

const Schema= mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        pic:{type:String,required:true,default:'emptypp.jpg'},
    },
    {timestamps: true, collection: 'users'}
)

const users=mongoose.model('users',Schema)

//users.pre('save',)

module.exports= users