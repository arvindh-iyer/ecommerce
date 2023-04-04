import React, { useEffect } from "react";
import {
  AppBar,
  Button,
  Grid,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import {
  Logout,
  MyLocationRounded,
  SettingsInputComponent,
  SettingsSystemDaydreamRounded,
} from "@mui/icons-material";
import { AllItems } from "./allItems";
import { Route } from "react-router-dom";
import { Cartpage } from "./my_cart/Cartpage";
// jwt from 'jwt-decode'
//import jwt from 'jsonwebtoken'
import { useHistory } from "react-router-dom";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export const Mainpage = () => {
  const [all, setAll] = useState(true);
  const [name, setName] = useState();
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  //console.log(token)
  //const myImage=cld.image(token.pic)
  const history = useHistory();
  async function api() {
    //console.log(token)
    if (!token) {
      console.log("token is undefined");
      return;
    }
    let user = await fetch("http://localhost:5000/api/user/verifyJwt", {
      method: "post",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    user = await user.json();
    //console.log(user)

    let pic = await fetch("http://localhost:5000/api/user/getImage", {
      method: "post",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    pic = await pic.blob();
    setImage(URL.createObjectURL(pic));
    setName(user.name);
    //setPic(user.pic)
  }

  useEffect(() => {
    //console.log("useeffect")
    //console.log(typeof token)
    if (token == "undefined") {
      alert("you are not authorized to view this page");
      history.push("./");
      return;
    }
    api();
  }, []);

  function logout() {
    localStorage.setItem("token", undefined);
    history.push("./");
  }
  //const picture=cld.image(pic)
  //console.log(picture)
  return (
    <div>
      <AppBar
        sx={{
          height: "5vw",
          backgroundColor: "orange",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: "25px",
            }}
            xs={3}
          >
            <Typography sx={{ fontSize: "3vw" }}>SHOPKART</Typography>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField variant="standard" sx={{ color: "black" }}></TextField>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{ color: "black" }}
              onClick={() => setAll(0)}
            >
              <Typography sx={{ fontSize: "2vw" }}>MY Cart</Typography>
            </Button>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "2%",
            }}
          >
            <Stack direction="row-reverse" spacing={2}>
              <img
                src={image}
                style={{ height: "4vw", objectFit: "contain" }}
              ></img>
              <Typography
                sx={{ fontSize: "2.5vw", objectFit: "contain", color: "black" }}
              >{`hi ${name}`}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </AppBar>

      <Stack sx={{ height: "18vh" }}></Stack>

      {all && <AllItems></AllItems>}
      {!all && <Cartpage></Cartpage>}
      <Stack direction="row" sx={{ display: "flex", justifyContent: "center" }}>
        {!all && (
          <Button
            variant="contained"
            onClick={() => setAll(1)}
            sx={{
              height: "3vw",
              width: "12vw",
              fontSize: "1vw",
              backgroundColor: "orange",
            }}
          >
            return back
          </Button>
        )}
      </Stack>
    </div>
  );
};
