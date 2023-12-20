import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  OutlinedInput,
  Card,
} from "@mui/material";
import React from "react";
import Logokong from "./Logokong";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom'
import myKong from "./kongc.png";
import facebook from "./facebook.png";
import google from "./google.png";
import theme from "../theme";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import "../pages/style.css";
import { useForm, Controller } from "react-hook-form";

const Loginfield = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="loginbox"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // padding:'10px',
        }}
      >
        <Box>
          <img
            style={{ width: 250, height: 100, marginTop: "30px" }}
            src={myKong}
            alt="kong"
          ></img>
        </Box>

        <Typography
          variant="p"
          fontSize={20}
          color={"white"}
          textAlign={"center"}
        >
          Login with
        </Typography>

        <Box sx={{ margin: "25px" }}>
          <img src={facebook} alt="facebook"></img>
          <img className="google" src={google} alt="google"></img>
        </Box>

        <Typography
          variant="p"
          fontSize={20}
          color={"white"}
          textAlign={"center"}
        >
          or
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", margin: "25px" }}>
        <TextField
          sx={{
            width: "100%",
            background: "#FFFCF3",
            marginBottom: "10px",
            borderRadius: "100px",
          }}
          placeholder="Username"
        ></TextField>

        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            background: "#FFFCF3",
            marginBottom: "10px",
            borderRadius: "100px",
          }}
          placeholder="Password"
        ></TextField>
        <Button
          sx={{
            borderRadius: "100px",
            "&:hover": {
              backgroundColor: "#ffca28",
              textDecoration: "none",
              color: "#1C1C1C",
            },
          }}
          variant="contained"
          type="submit"
          component={Link}
          to="/profile"
        >
          {/* <Link style={{ color: '#1C1C1C', textDecoration: 'none' }} to="/profile"> */}
          Continue
          {/* </Link> */}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="p"
          fontSize="20px"
          color={"white"}
          textAlign={"center"}
        >
          New here?
          <Link
            style={{ color: "#FCD77A", textDecoration: "none" }}
            to="/signup"
          >
            {" "}
            Sign up
          </Link>{" "}
          now
        </Typography>
        <Typography
          sx={{ marginTop: "25px" }}
          variant="p"
          fontSize="13px"
          color={"white"}
          textAlign={"center"}
        >
          By signing in you are agreeing to our
          <a
            href="terms.js"
            style={{ color: "white", textDecoration: "underlined" }}
          >
            Terms and Conditions
          </a>{" "}
          &{" "}
          <a
            style={{ color: "white", textDecoration: "underlined" }}
            href="privacy.js"
          >
            Privacy Policy
          </a>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Loginfield;
