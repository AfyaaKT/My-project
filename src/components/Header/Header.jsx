import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from '../SearchBar/SearchBar';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './header.css';
import NavMenu from '../Menu/NavMenu';

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#E5E5E5' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'cursive' }}>
          <Link to='/'>
          {window.innerWidth > 650 ?
           <img src='/images/finalLogo.png' alt='logo' style={{width:'140px', height:'40px'}} />
           :  <img src='/images/slice.png' alt='logo' style={{width:'40px', height:'40px'}} />}
          </Link>
        </Typography>
        {window.innerWidth > 1024 ? <NavigationMenu /> : <NavMenu />}

        <SearchBar />

        <div style={{ marginLeft: '30px' }}> 
          <IconButton color="inherit">
            <Link to='/Cart'>
              <ShoppingCartIcon />
            </Link>
          </IconButton>
        </div>
        
       
       
      </Toolbar>
    </AppBar>
  );
}

export default Header;
