import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Paper,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { Link, Redirect, Router, Switch, useHistory } from "react-router-dom";

//name,  email, password, cnf password , pic

export const Signup = () => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");

  /* const cld = new Cloudinary({
      cloud: {
        cloudName: 'demo'
      }
    });

    const defaultImage=cld.image('297-2978586_rono-daniel-empty-profile-picture-icon.png_pyq5nd')*/

  const [pp, setPp] = useState("");
  async function onSubmit() {
    if (password !== cnfpassword) {
      console.log("confirm the correct password");
      return;
    }
    console.log(`${name} ${email} ${password}`);
    let ans = await fetch("http://localhost:5000/api/user/", {
      method: "post",
      body: JSON.stringify({ name, email, password, pic: pp }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    ans = await ans.json();
    if (ans) {
      localStorage.setItem("token", ans.token);
      history.push("/mainpage");
    }
  }

  return (
    <Paper sx={{ backgroundColor: "lightgreen" }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          padding: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label="enter your name"
          sx={{ width: "90%", backgroundColor: "white" }}
          InputProps={{ style: { height: "3vw", fontSize: "2vw" } }}
          onChange={(e) => setName(e.target.value)}
        ></TextField>

        <TextField
          label="enter your email"
          sx={{ width: "90%", backgroundColor: "white" }}
          InputProps={{ style: { height: "3vw", fontSize: "2vw" } }}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>

        <TextField
          label="enter your password"
          type="password"
          sx={{ width: "90%", backgroundColor: "white" }}
          InputProps={{ style: { height: "3vw", fontSize: "2vw" } }}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>

        <TextField
          label="confirm your password"
          type="password"
          sx={{ width: "90%", backgroundColor: "white" }}
          InputProps={{ style: { height: "3vw", fontSize: "2vw" } }}
          onChange={(e) => setcnfPassword(e.target.value)}
        ></TextField>

        <TextField
          label="enter your pp"
          sx={{ width: "90%", backgroundColor: "white" }}
          InputProps={{ style: { height: "3vw", fontSize: "2vw" } }}
          onChange={(e) => {
            if (e.target.value != "") setPp(e.target.value);
          }}
          required={false}
        ></TextField>

        <Button
          variant="contained"
          color="primary"
          onClick={() => onSubmit()}
          sx={{ width: "7vw", height: "3vw", fontSize: "1.5vw" }}
        >
          submit
        </Button>
      </Stack>
    </Paper>
  );
};
