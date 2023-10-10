import React, { useContext } from 'react';
import Context from '../components/CartItems/CartItems';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useContext(Context);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='cart-items'>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <Card
                className='product'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image={item.imageUrl}
                  title={item.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                  <Typography variant='h6' color='text.primary'>
                    Price: ${item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      )}
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default Cart;
