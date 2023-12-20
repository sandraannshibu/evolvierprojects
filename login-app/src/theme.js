import React from "react";
import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";

// Create a custom theme
const theme = createTheme({
  // const { control, handleSubmit, formState: { errors } } = useForm();
  palette: {
    primary: {
      main: "#FCD77A", // Set your primary color
    },
    secondary: {
      main: "#FFFCF3", // Set your secondary color
    },
    background: {
      default: "#373737", // Set your desired background color here
    },
    text: {
      primary: "#B4B4B4", // Set your desired text color
    },
    // Add more palette options like error, warning, etc., if needed
    // For background, typography, spacing, etc., you can add more properties here
  },
  typography: {
    // Customize typography if needed
    fontFamily: "Raleway",
    // Add more typography settings like fontSize, fontWeight, etc.
  },
  // Add more customizations like spacing, breakpoints, etc.
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          style: {
            backgroundColor: "#FFFCF3",
            borderRadius: "100px",
          },
        },
      },
      styleOverrides: {
        root: {
          //   '&.Mui-error': {
          //     // Conditional styles for error state
          //     backgroundColor: 'white', // Background color for error state
          //   },
          // },
          // adornedEnd: {
          //   '&.Mui-error': {
          //     backgroundColor: 'white', // Background color for adornment in error state
          //   },
          // },
          "& .MuiInputBase-input": {
            color: "#7d7d7d", // Change text color
            // color: alpha('#000000', 0.3), // Change text color
            fontSize: 20,
          },

          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            "& fieldset": {
              borderColor: "#EEE1C3",
              borderWidth: "1px",
              borderRadius: "100px",
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#EEE1C3",
              borderWidth: "0.5px",
              borderRadius: "100px",
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent', // Set border color to transparent on error
            },
          },
          "& .MuiOutlinedInput-input": {
            py: "10px", // Adjusting vertical padding
            fontSize: "14px", // Adjusting font size
          },
          // Add more styles as needed
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Set text to lowercase
          fontSize: 20,
        },
      },
    },
  },
});

export default theme;
