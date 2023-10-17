import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Products from '../Products/Products';
import Favorites from '../../pages/Favorites';
import AboutPage from '../../pages/About/AboutPage ';

function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        Menu
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link to='/' element={<Home/>}>Home</Link>
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <Link to='/products' element={<Products/>}>Products</Link>
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <Link to='/about' element={<AboutPage/>}>About Us</Link>
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <Link to='/favorites' element={<Favorites/>}>Favorites</Link>
        </MenuItem>

      </Menu>
    </div>
  );
}

export default NavMenu;