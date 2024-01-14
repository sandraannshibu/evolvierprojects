import React, { useState,useEffect } from 'react'
import { Box, Paper, ThemeProvider } from '@mui/material'
import Profilefield from '../components/Profilefield'
import Logokong from '../components/Logokong';
import theme from '../theme'
import Layout from './Layout'
import axios from 'axios';



const Profile =  ()=> {
  const [userdata, setUserData] = useState(null);
  const token=localStorage.getItem("token")

  const fetchData = async () => {
  if(token)
  {
    try{
      const response= await axios.post('http://localhost:5000/api/kongcouriers/profile',{token});
      setUserData(response.data);
    }
    catch(error) {
      console.error('Error while making the POST request:', error);
    }
  }
  else{

    alert("unauthorized acsess");
  }
}
  useEffect(() => {
    fetchData();
   }, [token]);

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box >

          <Logokong />
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

          >
            <Paper sx={{
              border: 'no border',
              borderRadius: '40px',
              marginLeft: {
                xs: '30px',
                sm: '100px',
                md: '250px',
                lg: '350px',
                xl: '400px',
              },
              marginRight: {
                xs: '30px',
                sm: '100px',
                md: '250px',
                lg: '350px',
                xl: '400px',
              },
              marginTop: {
                xs: '50px',
                sm: '50px',
                md: '50px',
                lg: '50px',
                xl: '50px',
              },
              width: '100%',

              height: '347.04px',
              backgroundColor: 'rgba(0, 0, 0, 0.58)',
            }}>

             {userdata && <Profilefield userdata={userdata} />}


            </Paper>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout >
  )
}

export default Profile