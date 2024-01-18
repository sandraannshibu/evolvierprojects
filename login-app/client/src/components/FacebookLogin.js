import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import facebook from "./facebook.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cursor } from "mongoose";
import { Box } from "@mui/material";

function FacebookLogin() {
  const navigate = useNavigate();
  const Handlelogin = async (response) => {
    try {
      console.log(response);
      console.log(response.data.accessToken);
      const accesstoken = response.data.accessToken;
      const token = await axios.post(
        "http://localhost:5000/api/kongcouriers/facebook-login",
        { accesstoken }
      );
      console.log(token.data);
      localStorage.setItem("token", token.data);
      navigate("/profile");
    } catch (error) {
      console.error("Error logging into facebook", error);
    }
  };

  return (
    <LoginSocialFacebook
      appId="1090389115328739"
      onResolve={(response) => Handlelogin(response)}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <img src={facebook} alt="Facebook" />
      </Box>
    </LoginSocialFacebook>
  );
}

export default FacebookLogin;
