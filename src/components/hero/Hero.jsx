import React from 'react';
import Button from '@mui/material/Button';
import './hero.css'; 
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Sweet Slices</h1>
        <p>Discover Delicious Cakes, Cupcakes, and Cookies</p>
        <Link to='/products'>
        <Button variant="contained" color="primary">
          Shop Now
        </Button>
        </Link>
       
      </div>
    </section>
  );
}

export default Hero;
