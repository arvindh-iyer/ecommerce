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
                res.status(200).json({
                    _id:item._id,
                    name:item.name,
                    email:item.email,
                    password:item.password,
                    pic:item.pic,
                    token:generateToken(item._id)
                })
            }
            else throw new Error("invalid password")
        })
    }
    else throw new Error("invalid email")
})
module.exports={login_user}