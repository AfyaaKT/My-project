import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './NavigationMenu.css';
import { Link } from 'react-router-dom'; 

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <Tabs value={false} aria-label="navigation tabs">
        <Tab label={<Link to="/">Home</Link>} />
        <Tab label={<Link to="/products">Products</Link>} />
        <Tab label={<Link to="/favorites">Favorites</Link>} />
      </Tabs>
    </div>
  );
}

export default NavigationMenu;
