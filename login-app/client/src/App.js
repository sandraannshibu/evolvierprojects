import logo from "./logo.svg";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./pages/Login";
// import { Router } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import EditProfile from './components/EditProfile'
import { GoogleOAuthProvider } from '@react-oauth/google';

// import './index.css'

function App() {
  return (
    <GoogleOAuthProvider clientId="913713535860-8ie3ssfietrosguf1oarlcjdaooo3ts7.apps.googleusercontent.com">
    <ThemeProvider theme={theme}>
      <div className="App">
        {
          <Router>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/editprofile" element={<EditProfile />}></Route>
            </Routes>
          </Router>
        }
      </div>
    </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
