const jwt=require('jsonwebtoken')
const user=require('./models/users')
const path=require('path')

const displayPP=async(req,res)=>{
    const token=req.body.token
    const decrypt=jwt.verify(token,process.env.JWT_SECRET)
    const id=decrypt.id
    const person=await user.findOne({_id:id})
    const pp=person.pic
    const pic=path.join(__dirname,pp)
    console.log('pic successfully sent')
    res.sendFile(pic)
}

module.exports={displayPP}