import React, { useContext } from 'react';
import Context from '../components/CartItems/CartItems';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';

function Cart() {
  const { cartItems, removeFromCart, addToCart   } = useContext(Context);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const isCartEmpty = cartItems.length === 0;


  

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {isCartEmpty ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products">Browse Products</Link>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <Card
                className="product"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia sx={{ height: 300 }} image={item.imgUrl} title={item.name} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    Price: ${item.price} per item
                  </Typography>
                  <div className="quantity-counter">
                    <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </Button>
                    <span style={{ margin: '10px' }}>{item.quantity}</span>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </Button>

                    </CardActions>
                    

                  </div>
                  
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
      {!isCartEmpty && (
        <div className="checkout-button-container">
           <Link to='/signUp' onClick={()=>alert('you have to sign up first')}>
          <Button variant="contained" color="primary">
          Checkout
          </Button>
        </Link>
      {/* <Link to='/checkout'>
      <Button variant="contained" color="primary">
            Checkout
          </Button>
      </Link> */}

         
        </div>
      )}
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default Cart;
