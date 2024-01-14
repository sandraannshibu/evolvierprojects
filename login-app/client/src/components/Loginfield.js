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
import { useState,useEffect} from "react";
import Logokong from "./Logokong";
import { Link,useNavigate} from "react-router-dom";
import myKong from "./kongc.png";
import facebook from "./facebook.png";
import google from "./google.png";
import apple from "../components/apple.png"
import theme from "../theme";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import "../pages/style.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';

const Loginfield = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    trigger,
  } = useForm();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const onSubmit = async(data) => {
    try{
      console.log(data)
      const response=await axios.post('http://localhost:5000/api/kongcouriers/login',data);
      console.log(response);
      if(response.data.message=="Incorrect Email or password")
      {
        window.location.reload();
        alert(response.data.message);

      }
      else if(response.data.message=="User not found,please SignUp")
      {
        navigate("/signup")
        alert(response.data.message);
      }
      else{
          localStorage.setItem('token', response.data.token);
          navigate('/profile');
 
      }      
    }
    catch(error) {
      console.error('Error while making the POST request:', error);
    }


  };
  const hasSpecialCharacter = (value) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
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
          <img className="apple" src={apple} alt="apple"></img>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", margin: "25px" }}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email format',
              },
            }}
            render={({ field }) => (
              <TextField
                sx={{
                  width: "100%",
                  // background: "#FFFCF3",
                  marginBottom: "10px",
                  // borderRadius: "100px",
                }}
                placeholder="Email"
                {...field}
                // label="Username"
                onChange={(e) => {
                  field.onChange(e);
                  trigger('email');
                }}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              ></TextField>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",

            }}
            render={({ field }) => (
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: { backgroundColor: "#FFFCF3", borderRadius: "100PX" },
                }}
                sx={{
                  marginBottom: "10px",
                }}
                placeholder="Password"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  trigger('password');
                }}
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              ></TextField>
            )}
          />
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
          >
            Continue
          </Button>
        </Box>
      </form>

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
          sx={{ marginTop: "15px", marginBottom: "15px" }}
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
