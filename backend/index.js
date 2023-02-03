//the first code is without the use of middleware
//in this code we have to specify the entire address of the api endpoint
/*const express=require('express')
const app=express();
const cors=require('cors')
const db_connect=require('./models/db_connect')
const {register_user} =require('./register_user')
//const router=express.Router()

app.use(cors())
app.use(express.json())
db_connect()

app.post("/api/user",register_user)*/


//the second code uses middleware
//middleware is an application which acts as a bridge between different applications/softwares
//a middleware can define various apis on it

const express=require('express')
const app=express()
const db_connect=require('./models/db_connect')
const userRoutes=require('./routes/userRoutes')
const cors=require('cors')

db_connect()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("api is running successfully")
})


app.use('/api/user',userRoutes)


app.listen(5000,console.log('listening on port 5000'))