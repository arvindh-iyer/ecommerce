require('dotenv').config()
const jwt=require('jsonwebtoken')
//kept jwt_secret in an environment variable

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
}

module.exports=generateToken;