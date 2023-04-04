const mongoose=require('mongoose')

const Schema= mongoose.Schema(
    {
        id:Number,
        name:String,
        description:String,
        price:String,
        qty:Number,
        img:String
    },
    {collection: 'globalItems'}
)

const globalItems=mongoose.model('globalItems',Schema)
//users.pre('save',)

module.exports= globalItems