import React, { useState } from "react";
import { Paper, TextField, Stack, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

//email, password

export const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit() {
    let ans = await fetch("http://localhost:5000/api/user/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    ans = await ans.json();
    if (ans) {
      //console.log(ans)
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

        <Button
          variant="contained"
          color="primary"
          sx={{ width: "7vw", height: "3vw", fontSize: "1.5vw" }}
          onClick={() => onSubmit()}
        >
          submit
        </Button>
      </Stack>
    </Paper>
  );
};
