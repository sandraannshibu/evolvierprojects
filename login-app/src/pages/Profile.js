import React from 'react'
import { Box, Paper, ThemeProvider } from '@mui/material'
import Profilefield from '../components/Profilefield'
import Logokong from '../components/Logokong';
import theme from '../theme'
import Layout from './Layout'

function Profile() {
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

              <Profilefield />


            </Paper>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout >
  )
}

export default Profile