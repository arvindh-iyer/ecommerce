const globalItems=require('./models/globalItems')
const path=require('path')


const displayItems=async(req,res)=>{
    const id=req.body.id
    let item=await globalItems.findOne({id})
    //console.log(item)
    let img=item.img
    img=path.join(__dirname,img)
    console.log(img)
    res.sendFile(img)
}

module.exports={displayItems}