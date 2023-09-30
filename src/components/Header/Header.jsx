import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from '../SearchBar/SearchBar';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { Link } from 'react-router-dom';

function Header() {
  const handleSearch = (searchTerm) => {
  
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    
    <AppBar position="static" style={{ backgroundColor: '#ff9800' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'cursive' }}>
          Cake Shop
        </Typography>
        <NavigationMenu/>
        <SearchBar onSearch={handleSearch}/>
        <IconButton color="inherit" style={{ marginLeft: '16px' }}>
          <Link to='/Cart' ><ShoppingCartIcon /></Link>
        </IconButton>
        <IconButton color="inherit" style={{ marginLeft: '16px' }}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Header