const jwt=require('jsonwebtoken')

const verifyToken=async(req,res)=>{
    const token=req.body.token
    //console.log(token)
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    //console.log(decoded)
    res.send(decoded)
}

module.exports={verifyToken}