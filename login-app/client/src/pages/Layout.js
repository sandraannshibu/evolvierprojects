import React from 'react';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container
      maxWidth="100"
      sx={{
        backgroundColor: 'background.default', // This will apply the default background color from the theme
        minHeight: '100vh', // Ensure the container covers the full viewport height
        padding: '20px', // Add padding if needed
        backgroundImage:'url(/images/bckimg.png)',
        backgroundPosition:'bottom',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;
