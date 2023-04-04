const mongoose=require('mongoose')

const Schema= mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users'
        },
        item:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'globalItems'
        },
        qty:Number
    },
    {collection: 'cartItems'}
)

const cartItems=mongoose.model('cartItems',Schema)
//users.pre('save',)

module.exports= cartItems