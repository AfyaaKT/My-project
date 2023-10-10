import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'

const Footer = () => {
  const style={
    textDecoration:"none"

  }
  return (
    <Box
      bgcolor="#E5E5E5" 
      color="#18A0FB" 
      py={2} 
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link href = '/'>
            <img src='/images/greylogo.png' alt='logo' />
            </Link>
          </Grid>
          <Grid item>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
              <li style={{ marginRight: '20px' }}>
                <Link href="/" color="inherit" style={style}>
                  Home
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link href="/about" color="inherit" style={style}>
                  About
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link href="/products" color="inherit" style={style}>
                  Products
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link href="#" color="inherit" style={style}>
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item>
            <div>
              <p style={{ margin: 0 }}>
                <PhoneIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                <span>123-456-7890</span>
              </p>
              <p style={{ margin: 0 }}>
                <EmailIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                <span>SweetSlices@gmail.com</span>
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
