import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button, CardActions , CardMedia } from '@mui/material';
import Context from '../components/CartItems/CartItems';
import './Cart.css'
function Favorites() {
  const { favoriteItems, removeFromFavorites } = useContext(Context);

  const handleRemoveFromFavorites = (index) => {
    removeFromFavorites(index);
  };

  return (
    <div className='cart-container'>
      <h2>Your Favorite Items</h2>
      {favoriteItems.length === 0 ? (
        <p>No favorite items yet.</p>
      ) : (
        <div className='cart-items'>
          {favoriteItems.map((item, index) => (
            <div  key={index} className='cart-item'>
              <Card>
              <CardMedia
                  sx={{ height: 300 }}
                  image={item.imgUrl}
                  title={item.name}
                />
              <CardContent>
                
                <Typography variant='h5' component='div'>
                  {item.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.description}
                </Typography>
                <Typography variant='h6' color='text.primary'>
                  Price: ${item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  variant='outlined'
                  size='small'
                  color='primary'
                  onClick={() => handleRemoveFromFavorites(index)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
