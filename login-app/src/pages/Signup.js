import React from 'react'
import Signupfield from '../components/Signupfield'
import { Box, Paper, ThemeProvider } from '@mui/material'
import Logokong from '../components/Logokong'
import theme from '../theme'
import Layout from './Layout'


const Signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box
        >

          <Logokong />
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

          >
            <Paper sx={{
              border: 'no border',
              borderRadius: '40px',
              marginLeft: {
                xs: '3px',
                sm: '100px',
                md: '200px',
                lg: '400px',
                xl: '450px',
              },
              marginRight: {
                xs: '3px',
                sm: '100px',
                md: '200px',
                lg: '400px',
                xl: '450px',
              },
              marginTop: {
                xs: '10px',
                sm: '10px',
                md: '10px',
                lg: '10px',
                xl: '10px',
              },
              width: '100%',
              height: '640.45px',
              backgroundColor: 'rgba(0, 0, 0, 0.58)',
            }}>

              <Signupfield />


            </Paper>
          </Box>
        </Box>
      </Layout>
    </ThemeProvider>



  )
}

export default Signup