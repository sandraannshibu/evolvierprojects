import React from 'react'
import Loginfield from '../components/Loginfield'
import { Box, Paper, ThemeProvider, Typography } from '@mui/material'
import Layout from './Layout'
import theme from '../theme'
const Login = () => {
  return (

    <ThemeProvider theme={theme}>
      <Layout>
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

        >
          <Paper sx={{
            border: 'no border',
            borderRadius: '40px',
            marginLeft: {
              xs: '60px',
              sm: '100px',
              md: '150px',
              lg: '300px',
              xl: '500px',
            },
            marginRight: {
              xs: '60px',
              sm: '100px',
              md: '150px',
              lg: '300px',
              xl: '500px',
            },
            marginTop: {
              xs: '30px',
              sm: '30px',
              md: '30px',
              lg: '30px',
              xl: '30px',
            },
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.58)',
          }}>

            <Loginfield />


          </Paper>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Login