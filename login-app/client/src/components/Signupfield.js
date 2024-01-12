import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signupfield = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    trigger,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // Simulate authentication (replace with your actual authentication logic)
    // if (data.username === "validuser" && data.password === "validpassword@")
    //  {
    navigate("/"); // Navigate to profile page upon valid credentials
    console.log(data);
    // }
    // else {/
    // setError("authentication", {
    //   type: "manual",
    //   message: "Invalid username or password", // Set custom error message
    // });
    // }
  };
  const hasSpecialCharacter = (value) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(value);
  };
  const password = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglecPassword = () => {
    setShowcPassword((prevShowcPassword) => !prevShowcPassword);
  };
  return (
    <Box>
      <Typography
        variant="h1"
        fontSize={36}
        color={"white"}
        textAlign={"left"}
        fontWeight={"bold"}
        style={{ marginTop: "30px", marginLeft: "50px", marginBottom: "0px" }}
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
            },
            marginTop: "0px",
            padding: "50px",
            paddingBottom: "0px",
            paddingTop: "30px",
          }}
        >
          <Controller
            name="firstname"
            control={control}
            defaultValue=""
            rules={{
              required: "First name is required",
            }}
            render={({ field }) => (
              <TextField
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                  outline: "none",
                  borderRadius: "100px",
                }}
                placeholder="First name"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  trigger('firstname');
                }}
                error={!!errors.firstname}
                helperText={errors.firstname ? errors.firstname.message : ""}
              ></TextField>
            )}
          />
          <Controller
            name="lastname"
            control={control}
            defaultValue=""
            rules={{
              required: "Lastname is required",
            }}
            render={({ field }) => (
              <TextField
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                  marginLeft:
                  {
                    xs: '0px',
                    sm: '00px',
                    md: '0px',
                    lg: '10px',
                    xl: '10px',
                  },
                  outline: "none",
                  borderRadius: "100px",
                }}
                placeholder="Last name"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  trigger('lastname');
                }}
                error={!!errors.lastname}
                helperText={errors.lastname ? errors.lastname.message : ""}
              ></TextField>
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            paddingTop: "0px",
            paddingBottom: "0px",
          }}
        >
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
                  marginBottom: "10px",
                  outline: "none",
                  borderRadius: "100px",
                }}
                placeholder="Email"
                {...field}
                type="email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                onChange={(e) => {
                  field.onChange(e);
                  trigger('email');
                }}
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
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).+$/,
                message: 'Password should contain at least one capital letter and one number',
              },
            }}
            render={({ field }) => (
              <TextField
                sx={{
                  marginBottom: "10px",
                  outline: "none",
                  borderRadius: "100px",
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
              ></TextField>
            )}
          />
          <Controller
            name="confpass"
            control={control}
            defaultValue=""
            rules={{
              required: "Password should be confirmed",
              // minLength: {
              //   value: 8,
              //   message: "Password should have at least 8 characters",
              // },
              // validate: {
                // hasSpecialChar: (value) =>
                //   hasSpecialCharacter(value) ||
                //   "Password should have at least one special character",
                validate: (value) =>
                  value === password || "Passwords do not match",
              // },
            }}
            render={({ field }) => (
              <TextField
                sx={{
                  marginBottom: "10px",
                  outline: "none",
                  borderRadius: "100px",
                }}
                placeholder="Confirm Password"
                type={showcPassword ? "text" : "password"}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  trigger('confpass');
                }}
                error={!!errors.confpass}
                helperText={errors.confpass ? errors.confpass.message : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglecPassword} edge="end">
                        {showcPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: { backgroundColor: "#FFFCF3", borderRadius: "100PX" },
                }}
              ></TextField>
            )}
          />
          <Controller
            name="mobno"
            control={control}
            defaultValue=""
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Phone number should contain only digits",
              },
              minLength: {
                value: 10,
                message: "Phone number should have exactly 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Phone number should have exactly 10 digits",
              },
            }}
            render={({ field }) => (
              <TextField
                sx={{
                  marginBottom: "10px",
                  outline: "none",
                  borderRadius: "100px",
                }}
                placeholder="Mobile Number"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  trigger('mobno');
                }}
                error={!!errors.mobno}
                helperText={errors.mobno ? errors.mobno.message : ""}
              ></TextField>
            )}
          />
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            rules={{
              required: "Gender is required",
            }}
            render={({ field }) => (
              <TextField
                sx={{
                  marginBottom: "10px",
                  outline: "none",
                  borderRadius: "100px",
                }}
                placeholder="Gender"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  trigger('gender');
                }}
                error={!!errors.gender}
                helperText={errors.gender ? errors.gender.message : ""}
              >

              </TextField>
            )}
          />

          {/* {(errors.username || errors.password) && (
            <p style={{ color: "red",marginBottom:'0px' }}>{errors.authentication?.message}</p>
          )} */}

          <Button
            sx={{
              borderRadius: "100px",
              "&:hover": {
                backgroundColor: "#ffca28",
              },
            }}
            variant="contained"
            type="submit"
          >
            Sign Up
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
          sx={{ marginTop: "10px", marginBottom: "10px" }}
          variant="p"
          fontSize="13px"
          color={"white"}
          textAlign={"center"}
        >
          By signing in you are agreeing to our
          <a
            href="terms.js"
            style={{
              color: "white",
              textDecoration: "underlined",
              textAlign: "center",
            }}
          >
            Terms and Conditions
          </a>{" "}
          &{" "}
          <a
            style={{
              color: "white",
              textDecoration: "underlined",
              textAlign: "center",
            }}
            href="privacy.js"
          >
            Privacy Policy
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signupfield;
