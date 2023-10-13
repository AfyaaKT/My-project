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

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#E5E5E5' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'cursive' }}>
          <Link to='/'>
            <img src='/images/greylogo.png' alt='logo' />
          </Link>
        </Typography>
        <NavigationMenu />
        <SearchBar />

        <div style={{ marginLeft: '30px' }}> {/* Add margin for space */}
          <IconButton color="inherit">
            <Link to='/Cart'>
              <ShoppingCartIcon />
            </Link>
          </IconButton>
        </div>
        
        <IconButton color="inherit">
          {/* AccountCircleIcon */}
        </IconButton>
        <Link to='/signUp'>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
