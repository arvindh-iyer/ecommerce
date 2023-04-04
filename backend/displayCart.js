const cartItems=require('./models/cartItems')
const globalItems=require('./models/globalItems')
const jwt=require('jsonwebtoken')

const displayCart=async(req,res)=>{
    const token=req.body.user
    //console.log(token)
    const user=jwt.verify(token,process.env.JWT_SECRET)
    //console.log(user)
    const user_id=user.id 
    const list=await cartItems.find({user:user_id})
    console.log(list)
    let final_list=[]
    for(const item in list){
        //console.log(list[item])
        let obj=await globalItems.findOne({_id:list[item].item})
        //console.log(obj)
        obj.qty=list[item].qty
        final_list.push(obj)
    }
    res.send(final_list)
}

module.exports={displayCart}