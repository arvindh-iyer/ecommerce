//const { model } = require('mongoose')
const cartItems=require('./models/cartItems')
const globalItems=require('./models/globalItems')
const users=require('./models/users')
const jwt=require('jsonwebtoken')

const addToCart=async(req,res)=>{
    const body=req.body
    let {item,user}=body
    //console.log(user)
    const userObj=jwt.verify(user,process.env.JWT_SECRET)
    user=userObj.id
    //console.log(item.id)
    const itemExists=await cartItems.findOne({item:item._id,user:user})
    if(itemExists){
        await itemExists.updateOne({qty:itemExists.qty+1})
    }
    else{
        await cartItems.create({user:user,item:item._id,qty:1})
    }
    const prevItem=await globalItems.findOne({_id:item._id})
    await prevItem.updateOne({qty:prevItem.qty-1})
    res.send("item added to cart")
}

module.exports={addToCart}