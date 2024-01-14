import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import Layout from "../pages/Layout";
import theme from "../theme";
import Logokong from "../components/Logokong";
import { Box, Paper, ThemeProvider } from "@mui/material";

const EditProfile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    trigger,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const userdata = location.state?.userData;
  const userId =userdata._id
//   console.log(userId)
//   console.log(userData)
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/kongcouriers/editprofile",{data,userId});
      console.log("hello222")
      console.log(response);
      alert(response.data);
      const token=localStorage.getItem('token');
      console.log(token)
      const userData= await axios.post('http://localhost:5000/api/kongcouriers/profile',{token});
      setUserData(userData);
      navigate('/profile', { state: { userData: userData } });
    } catch (error) {
      console.error("Error while making the POST request:", error);
    }
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
    <ThemeProvider theme={theme}>
      <Layout>
      <Logokong />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              border: "no border",
              borderRadius: "40px",
              marginLeft: {
                xs: "3px",
                sm: "100px",
                md: "200px",
                lg: "400px",
                xl: "450px",
              },
              marginRight: {
                xs: "3px",
                sm: "100px",
                md: "200px",
                lg: "400px",
                xl: "450px",
              },
              marginTop: {
                xs: "10px",
              },
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.58)",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize={36}
                color={"white"}
                textAlign={"left"}
                fontWeight={"bold"}
                style={{
                  marginTop: "30px",
                  marginLeft: "50px",
                }}
              >
                Edit Profile
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "column",
                      lg: "row",
                      xl: "row",
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
                        placeholder={userData.firstName}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          trigger("firstname");
                        }}
                        error={!!errors.firstname}
                        helperText={
                          errors.firstname ? errors.firstname.message : ""
                        }
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
                          marginLeft: {
                            xs: "0px",
                            sm: "00px",
                            md: "0px",
                            lg: "10px",
                            xl: "10px",
                          },
                          outline: "none",
                          borderRadius: "100px",
                        }}
                        placeholder={userData.lastName}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          trigger("lastname");
                        }}
                        error={!!errors.lastname}
                        helperText={
                          errors.lastname ? errors.lastname.message : ""
                        }
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
                    paddingBottom: "40px",
                  }}
                >
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        sx={{
                          marginBottom: "10px",
                          outline: "none",
                          borderRadius: "100px",
                        }}
                        placeholder={userData.email}
                        {...field}
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                        onChange={(e) => {
                          field.onChange(e);
                          trigger("email");
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
                        message:
                          "Password should contain at least one capital letter and one number",
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
                          trigger("password");
                        }}
                        type={showPassword ? "text" : "password"}
                        error={!!errors.password}
                        helperText={
                          errors.password ? errors.password.message : ""
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                          style: {
                            backgroundColor: "#FFFCF3",
                            borderRadius: "100PX",
                          },
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
                          trigger("confpass");
                        }}
                        error={!!errors.confpass}
                        helperText={
                          errors.confpass ? errors.confpass.message : ""
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglecPassword}
                                edge="end"
                              >
                                {showcPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                          style: {
                            backgroundColor: "#FFFCF3",
                            borderRadius: "100PX",
                          },
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
                        placeholder={userData.mobileNumber}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          trigger("mobno");
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
                        placeholder={userData.gender}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          trigger("gender");
                        }}
                        error={!!errors.gender}
                        helperText={errors.gender ? errors.gender.message : ""}
                      ></TextField>
                    )}
                  />

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
                    Edit Profile
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
              </Box>
            </Box>
          </Paper>
        </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default EditProfile;
