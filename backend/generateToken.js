require('dotenv').config()
const jwt=require('jsonwebtoken')
//kept jwt_secret in an environment variable

const generateToken=(id,name)=>{
    //console.log(pic)
    return jwt.sign({id,name},process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
}

module.exports=generateToken;