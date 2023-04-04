const globalItems = require("./models/globalItems");
const path=require('path')

function getImage(image){
    //console.log(image)
    return path.join('http://localhost:5000',image)
}

const allItems=async(req,res)=>{
    let ans=await globalItems.find({})
    //console.log(ans)
    //console.log(img)
    //ans.img=img
    let newAns=ans.map(item=>{
        //console.log(item)
        return(
            {   
                _id:item._id,
                id:item.id,
                name:item.name,
                description:item.description,
                price:item.price,
                qty:item.qty,
                img:getImage(item.img)
            }
        )
    })
    res.send(newAns)
}

module.exports={allItems}