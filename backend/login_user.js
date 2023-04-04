const User=require('./models/users')
const asyncHandler=require('express-async-handler')
const generateToken = require('./generateToken')
const bcrypt=require('bcrypt')


const login_user=asyncHandler(async(req,res)=>{
    const {email,password}=await req.body
    //console.log(`${email} ${password}`)
    const item=await User.findOne({email})
    if(item){ 
        bcrypt.compare(password, item.password ,
        (err,result)=>{
            if(result){
                res.status(200).send({
                    token:generateToken(item._id,item.name,item.pic)
                })
            }
            else throw new Error("invalid password")
        })
    }
    else throw new Error("invalid email")
})
module.exports={login_user}