import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Paper, TextField, Stack ,Button} from '@mui/material'

//name,  email, password, cnf password , pic



export const Signup = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cnfpassword,setcnfPassword]=useState("");
    const [pp,setPp]=useState('')

    async function onSubmit(){
        if(password!==cnfpassword){
            console.log("confirm the correct password")
            return
        }
        console.log(`${name} ${email} ${password} ${pp}`)
        const ans=await fetch('http://localhost:5000/api/user/',{method:'post',
        body:JSON.stringify({name,email,password,pic:pp}),
        headers:{
          'Content-Type':'application/json'
        }})
        console.log(ans)
    }

  return (
    <Paper sx={{backgroundColor:'lightgreen'}}>
        <Stack direction='column' spacing={2} sx={{padding:'5%',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center'}}>

            <TextField label='enter your name' sx={{width:'60%',backgroundColor:'white'}} onChange={e=>setName(e.target.value)}></TextField>

            <TextField label='enter your email' sx={{width:'60%',backgroundColor:'white'}} onChange={e=>setEmail(e.target.value)}></TextField>

            <TextField label='enter your password' sx={{width:'60%',backgroundColor:'white'}}onChange={e=>setPassword(e.target.value)}></TextField>

            <TextField label='confirm your password' sx={{width:'60%',backgroundColor:'white'}} onChange={e=>setcnfPassword(e.target.value)}></TextField>

            <TextField label='enter your pp' sx={{width:'60%',backgroundColor:'white'}} onChange={e=>setPp(e.target.value)} default='emptypp.jpg'></TextField>

            <Button variant='contained' color='primary' onClick={()=>onSubmit()}>submit</Button>
        </Stack>
    </Paper>
  )
}
