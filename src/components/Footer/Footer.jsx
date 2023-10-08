import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      bgcolor="#D3D3D3" 
      color="#fff" 
      py={2} 
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Logo</Typography>
          </Grid>
          <Grid item>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
              <li style={{ marginRight: '20px' }}>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link href="/about" color="inherit">
                  About
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link href="/products" color="inherit">
                  Products
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link href="#" color="inherit">
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
                <span>info@example.com</span>
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
