import React,{useEffect} from "react";
import Signupfield from "../components/Signupfield";
import { Box, Paper, ThemeProvider } from "@mui/material";
import Logokong from "../components/Logokong";
import theme from "../theme";
import Layout from "./Layout";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile');
    }
  }, [navigate]);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box>
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
              <Signupfield />
            </Paper>
          </Box>
        </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Signup;
