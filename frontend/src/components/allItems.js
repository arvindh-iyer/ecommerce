import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
export const AllItems = () => {
  const user = localStorage.getItem("token");
  //console.log(user)
  const [list, setlist] = useState([]);
  const [toggle, setToggle] = useState(true);
  //const [imagelist,setImageList]=useState([])

  //const small=useMediaQuery('(max)')

  //console.log('into allitems.js')
  useEffect(() => {
    (async () => {
      let l = await fetch("http://localhost:5000/api/user/allItems", {
        method: "get",
      });
      l = await l.json();
      for (let i in l) {
        let img = await fetch("http://localhost:5000/api/user/displayItems", {
          method: "post",
          body: JSON.stringify({ id: l[i].id }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        img = await img.blob();
        l[i].img = URL.createObjectURL(img);
        console.log(l[i]);
      }
      setlist(l);
    })();
  }, [toggle]);

  async function addItem(i) {
    //console.log(i)
    if (i.qty == 0) {
      alert("out of stock");
      return;
    }
    await fetch("http://localhost:5000/api/user/addToCart", {
      method: "post",
      body: JSON.stringify({
        item: i,
        user: user,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("item added to cart");
    setToggle(!toggle);
  }

  return (
    /*<Grid container sx={{display:'flex',backgroundColor:'black'}} rowSpacing={2} columnSpacing={2} padding={2}>
                {list.map(i=>{
                    //console.log(i)
                    return(
                        <Grid item xs={12} md={6} key={i.name} sx={{color:'green'}}>
                            <Paper sx={{height:'600px'}}>
                                <Stack direction='row' spacing={2} sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

                                    <Box sx={{height:'250%'}}>
                                        
                                        <img src={i.img} style={{objectFit:'contained'}}></img>
                                    </Box>
                                    <Box>{`${i.name}`}</Box>
                                    <Box>{`${i.description}`}</Box>
                                    <Box>{`${i.price}`}</Box>
                                    <Box>{`${i.qty}`}</Box>
                                    <Box>
                                        <Button type="button" variant="contained" color='success' onClick={()=>addItem(i)}>Add to cart</Button>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>*/

    <Grid
      container
      sx={{ display: "flex", backgroundColor: "black" }}
      rowSpacing={2}
      columnSpacing={2}
      padding={2}
    >
      {list.map((i) => {
        return (
          <Grid item sm={12} md={6} lg={4} key={i.name} sx={{ color: "green" }}>
            <Paper sx={{ height: "75vh", maxWidth: "100%" }}>
              <Stack
                direction="column"
                spacing={0.5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ height: "25vh" }}>
                  {" "}
                  <img
                    src={i.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  ></img>
                </Box>

                <Box>
                  <Typography
                    sx={{ fontSize: "4vw", fontFamily: "revert" }}
                  >{`${i.name}`}</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "2vw", fontFamily: "revert" }}
                  >{`${i.description}`}</Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{ fontSize: "2vw", fontFamily: "revert" }}
                  >{`${i.price}`}</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "2vw", fontFamily: "revert" }}
                  >{`${i.qty}`}</Typography>
                </Box>
                <Box>
                  <Button
                    type="button"
                    variant="contained"
                    color="success"
                    sx={{ height: "3vw", width: "12vw", fontSize: "1vw" }}
                    onClick={() => addItem(i)}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};
