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
import { useState } from "react";
import Logokong from "./Logokong";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import myKong from "./kongc.png";
import facebook from "./facebook.png";
import google from "./google.png";
import theme from "../theme";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import "../pages/style.css";
import { useForm, Controller } from "react-hook-form";

const Loginfield = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // Simulate authentication (replace with your actual authentication logic)
    if (data.username === "validuser" && data.password === "validpassword@") {
      navigate("/profile"); // Navigate to profile page upon valid credentials
      console.log(data);
    } else {
      setError("authentication", {
        type: "manual",
        message: "Invalid username or password", // Set custom error message
      });
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
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: "Username is required",
              minLength: {
                value: 8,
                message: "Username should have at least 8 characters",
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
                placeholder="Username"
                {...field}
                // label="Username"
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
              ></TextField>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should have at least 8 characters",
              },
              validate: {
                hasSpecialChar: (value) =>
                  hasSpecialCharacter(value) ||
                  "Password should have at least one special character",
              },
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
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              ></TextField>
            )}
          />
          {/* {(errors.username || errors.password) && (
            <p style={{ color: "red", marginBottom: "0px" }}>
              {errors.authentication?.message}
            </p>
          )} */}
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
            // disabled={Object.keys(errors).length > 0}
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
