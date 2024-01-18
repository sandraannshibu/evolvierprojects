import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import facebook from "./facebook.png";
import google from "./google.png";
import apple from "./apple.png";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "./FacebookLogin";

const SocialLogin = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log(tokenResponse);
        const response = await axios.post(
          "http://localhost:5000/api/kongcouriers/google-login",
          {
            tokenId: tokenResponse.access_token,
          }
        );
        console.log(response.data);
        localStorage.setItem("token", response.data);
        navigate("/profile");
      } catch (error) {
        console.error("Error calling Google login endpoint:", error);
      }
    },
  });

  const loginapple = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log(tokenResponse);
        const response = await axios.post(
          "http://localhost:5000/api/kongcouriers/apple-login",
          {
            tokenId: tokenResponse.access_token,
          }
        );
        console.log(response.data);
        localStorage.setItem("token", response.data);
        navigate("/profile");
      } catch (error) {
        console.error("Error calling Apple login endpoint:", error);
      }
    },
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box>
      <FacebookLogin/>
      </Box>


      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => login()}
      >
        <img className="google" src={google} alt="google" />
      </Box>
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => loginapple()}
      >
        <img className="apple" src={apple} alt="apple" />
      </Box>
    </Box>
  );
};

export default SocialLogin;
