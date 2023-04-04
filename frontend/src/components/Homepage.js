import React, { useState } from "react";
import { Grid, Button, Paper, Typography, Stack, Box } from "@mui/material";
import { Login } from "./com_home/login";
import { Signup } from "./com_home/Signup";
import "../App.css";

export const Homepage = () => {
  const [isLogin, setLogin] = useState(1);
  return (
    <div className="homepage">
      <Paper
        sx={{
          display: "flex",
          margin: "25%",
          marginTop: "5%",
          marginBottom: "1%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
          height: "2.5vw",
          fontSize: "2vw",
          color: "white",
        }}
      >
        ECOM
      </Paper>

      <Stack
        direction="column"
        spacing={5}
        sx={{
          display: "flex",
          margin: "25%",
          marginTop: "0%",
          marginBottom: "0%",
        }}
      >
        <Paper>
          <Grid className="bg" container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={() => setLogin(1)}
                sx={{ height: "2.5vw", fontSize: "2vw" }}
              >
                Login
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={() => setLogin(0)}
                sx={{ height: "2.5vw", fontSize: "2vw" }}
              >
                Signup
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Box>
          {(isLogin && <Login></Login>) || (!isLogin && <Signup></Signup>)}
        </Box>
      </Stack>
    </div>
  );
};
