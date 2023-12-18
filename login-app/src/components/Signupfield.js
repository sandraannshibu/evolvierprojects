import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
import { Typography } from '@mui/material'

const Signupfield = () => {
  return (
    <Box>
          <Typography variant='h1' fontSize={36} color={'white'} textAlign={'left'} fontWeight={'bold'} style={{marginTop:'30px',marginLeft:'50px', marginBottom:'0px'}}>Sign Up</Typography>
        <Box  sx={{display:'flex',flexDirection:'row',marginTop:'0px',padding:'50px', paddingBottom:'0px',paddingTop:'30px'}}>
          <TextField 
          sx={{
          width:'100%',
          background: '#FFFCF3',
          marginBottom:'10px',
          outline:'none',
          borderRadius:'100px',
          }}
          placeholder='First name'

          >
          </TextField>
          <TextField
          sx={{
            width:'100%',
            background: '#FFFCF3',
            marginBottom:'10px',
            marginLeft:'10px',
            outline:'none',
            borderRadius:'100px',
          }}
          placeholder='Last name'
          >
           </TextField>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',padding:'50px',paddingTop:'0px',paddingBottom:'0px'}}>
          
          <TextField
          sx={{
            background: '#FFFCF3',
            marginBottom:'10px',
            outline:'none',
            borderRadius:'100px',
          }}
          placeholder='Email'
          >
          </TextField>
          <TextField
          sx={{
            background: '#FFFCF3',
            marginBottom:'10px',
            outline:'none',
            borderRadius:'100px',
          }}
          placeholder='Password'
          >
          </TextField>
            <TextField
          sx={{
            background: '#FFFCF3',
            marginBottom:'10px',
            outline:'none',
            borderRadius:'100px',
          }}
          placeholder='Confirm Password'
          >
          </TextField>
          <TextField
          sx={{
            background: '#FFFCF3',
            marginBottom:'10px',
            outline:'none',
            borderRadius:'100px',
          }}
          placeholder='Mobile Number'
          >
          </TextField>
          <TextField
          sx={{
            background: '#FFFCF3',
            marginBottom:'10px',
            outline:'none',
            borderRadius:'100px',
          }}
          placeholder='Gender'
          >
          </TextField>

          <Button
          sx={{borderRadius:'100px',
            '&:hover': {
            backgroundColor: '#ffca28'},}} 
            
            variant="contained"><Link style={{color:'#1C1C1C',textDecoration:'none'}} to="/profile">Sign Up</Link></Button>
          </Box>
        <Box 
             sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:'center',
              justifyContent:'center',
            }}
        >
          <Typography sx={{marginTop:'20px'}}variant='p' fontSize='13px' color={'white'} textAlign={'center'}>By signing in you are agreeing to our
          <a href='terms.js' style={{color:'white',textDecoration:'underlined',textAlign:'center'}}>
          Terms and Conditions</a> & <a style={{color:'white',textDecoration:'underlined',textAlign:'center'}} href='privacy.js'>Privacy Policy</a>
          </Typography>
        </Box>

  </Box>

  )
}

export default Signupfield