import React,{useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import {Link,useLocation,useNavigate} from "react-router-dom"


function Profilefield() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.userData;
  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  const editprofile = () => {
    navigate('/editprofile', { state: { userData: userData } });
  };
  return (
    <Box 
     sx={{
      alignItems:'center',
     padding: '50px',
     
     }}
    >
      <Box 
           sx={{
            display:"flex",
            flexDirection:{
              xs: 'column',
              sm: 'row',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
          }}
      >
        <Box 
        sx={{marginBottom:{xs: '15px',sm: '30px',md: '30px',lg: '30px',xl: '30px'}, marginLeft:'20px',marginRight:'30px'}}
        >
        <Avatar 
        sx={{width:{
          xs: '50px',
          sm: '119.73px',
          md: '119.73px',
          lg: '119.73px',
          xl: '119.73px',
        },
          height:{
            xs: '50px',
            sm: '119.73px',
            md: '119.73px',
            lg: '119.73px',
            xl: '119.73px',
          },        
          }}
        src="/broken-image.jpg" />
        </Box>
        <Box sx={{flexDirection:'column',display:'flex',marginBottom:{xs: '9px',sm: '70px',md: '70px',lg: '70px',xl: '70px'}}}>
            <Typography variant='p' fontSize={{xs: 20,sm: 24,md: 24,lg: 24,xl: 24}} fontWeight={'bold'} color={'white'} textAlign={'left'}>{userData.firstName} {userData.lastName}</Typography>
            <Typography variant='body2' fontSize={{xs: 18,sm: 22,md: 22,lg: 22,xl: 22}} color={'white'} textAlign={'left'}>{userData.email}</Typography>
            <Typography variant='p' fontSize={{xs: 18,sm: 22,md: 22,lg: 22,xl: 22}} color={'white'} textAlign={'left'}>{`+91`} {userData.mobileNumber}</Typography>
            <Typography variant='p' fontSize={{xs: 18,sm: 22,md: 22,lg: 22,xl: 22}} color={'white'} textAlign={'left'}>{userData.gender}</Typography>


        </Box>
      </Box>
      <Box
          sx={{
            display:"flex",
            flexDirection:{
              xs: 'column',
              sm: 'row',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
            alignItems:'center',
            justifyContent:'center',
            // margin:{
            //   xs: '0px',
            //   sm: '10px',
            //   md: '10px',
            //   lg: '10px',
            //   xl: '10px',
            // },
            
          }}
      >
        <Button onClick={editprofile}  sx={{marginRight:{xs: '5px',sm: '70px',md: '70px',lg: '70px',xl: '70px'},padding:'5px',width:{xs: '200px',sm: '200px',md: '200px',lg: '200px',xl: '200px'},borderRadius:'100px',
      '&:hover': {
        backgroundColor: '#ffca28'},}}variant="contained"><Link style={{textDecoration:'none',color:'#000000',
        
        }}></Link>Edit Profile</Button>
        <Button onClick={logout} sx={{borderRadius:'100px',marginTop:{xs:'10px'},padding:'5px',width:{xs: '200px',sm: '200px',md: '200px',lg: '200px',xl: '200px'},
      '&:hover': {
        backgroundColor: '#ffca28'},}}variant="contained"><Link style={{textDecoration:'none',color:'#000000'}}></Link>Logout</Button>
      </Box>
    </Box>
  )
}

export default Profilefield