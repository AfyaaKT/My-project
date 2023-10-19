import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'

const Footer = () => {
  const style={
    textDecoration:"none"

  }
const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      bgcolor="#E5E5E5" 
      color="#18A0FB" 
      py={2} 
      className='footer'
    >
      <Container>
        <Grid container justifyContent={isSmallScreen ? 'center' : 'space-between'} alignItems="center">
          <Grid item >
            <Link href = '/'>
            <img src='/images/finalLogo.png' alt='logo' style={{width:'140px', height:'40px'}} />
            </Link>
          </Grid>
          <Grid item>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
              <li style={{ marginRight: '20px' }}>
                <Link to="/" color="inherit" style={style}>
                  Home
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to="/about" color="inherit" style={style}>
                  About
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to="/products" color="inherit" style={style}>
                  Products
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to="/favorites" color="inherit" style={style}>
                  Favorites
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item >
            <div className='contact'>
              <p style={{margin:0}} >
              <a href="https://wa.me/9647733414774?text=Hi,%20I%20want%20to%20order%20a%20cake%20on%20weekend." target="_blank"  rel="noreferrer" >
                <PhoneIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Chat On WhatsApp</span>
                
              </a>
              </p>
              
              <p style={{margin:0}}>
                 <a href="mailto:afyaakhudur@gmail.com" >
                <EmailIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                <span>SweetSlices@gmail.com</span>
                </a></p>
               
                
              
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
