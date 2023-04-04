//import { SelectAllTwoTone } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Stack ,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";

export const Cartpage=()=>{
    const user=localStorage.getItem('token')
    //console.log(user)
    const [list,setlist]=useState([])
    //const [toggle,setToggle]=useState(true)

    //console.log('into allitems.js')
    useEffect(()=>{
        (async()=>{
            let l=await fetch('http://localhost:5000/api/user/mycart',
            {
                method:'post',
                body:JSON.stringify({user}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            l=await l.json()
            for(let i in l){
                let img=await fetch('http://localhost:5000/api/user/displayItems',
                {
                    method:'post',
                    body:JSON.stringify({id:l[i].id}),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                img=await img.blob()
                l[i].img=URL.createObjectURL(img)
                console.log(l[i])
            }
            setlist(l)
        })()
    },[])


    return(
        
            <Grid container sx={{backgroundColor:'black'}} rowSpacing={2} columnSpacing={2} padding={2}>
                {list.map(i=>{
                    return(
                        <Grid item sm={12} md={4}
                         key={i.name} sx={{color:'green'}}>
                            <Paper sx={{height:'75vh'}}>
                                <Stack direction='column' spacing={0.5} sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                     
                                    <Box sx={{height:'25vh'}}> <img src={i.img} style={{width:'100%',height:'100%',objectFit:'contain'}}></img></Box>    
                                    
                                    <Box>
                                        <Typography sx={{fontSize:'4vw',fontFamily:'revert'}}>{`${i.name}`}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{fontSize:'2vw',fontFamily:'revert'}}>{`${i.description}`}</Typography>
                                    </Box>

                                    <Box>
                                        <Typography sx={{fontSize:'2vw',fontFamily:'revert'}}>{`${i.price}`}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{fontSize:'2vw',fontFamily:'revert'}}>{`${i.qty}`}</Typography>
                                    </Box>

                                </Stack>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        
    )
}