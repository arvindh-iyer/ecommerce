import React, { useState } from 'react'
import { Paper, TextField, Stack ,Button} from '@mui/material'

//email, password

export const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function onSubmit(){
        let ans=await fetch('http://localhost:5000/api/user/login',
        {
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
        ans=await ans.json()
        console.log(ans)
    }

  return (
    <Paper sx={{backgroundColor:'lightgreen'}}>
        <Stack direction='column' spacing={2} sx={{padding:'5%',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center'}}>

            <TextField label='enter your email' sx={{width:'60%',backgroundColor:'white'}} onChange={e=>setEmail(e.target.value)}></TextField>

            <TextField label='enter your password' sx={{width:'60%',backgroundColor:'white'}}onChange={e=>setPassword(e.target.value)}></TextField>

            <Button variant='contained' color='primary' onClick={()=>onSubmit()}>submit</Button>
        </Stack>
    </Paper>
  )
}
