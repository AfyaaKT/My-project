import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../data';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Context from '../../components/CartItems/CartItems';
import './ProductDetails.css';

function ProductDetails() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === parseInt(productId));
  const { addToCart, addToFavorites ,isAdded, favoriteItems, removeFromFavorites } = useContext(Context);

  const isFavorite = favoriteItems.some((item) => item.id === parseInt(productId));

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="container">
      <h2>Product Details</h2>
      {product ? (
        <Card className="card"> 
          <CardMedia className="media" image={product.imgUrl} title={product.name} /> 
          <CardContent className="detailsContainer"> 
            <div>
              <Typography variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {product.longDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.ingredients}
              </Typography>
              <Typography variant="h6" color="text.primary">
                Price: ${product.price}
              </Typography>
            </div>
            <div className="buttonContainer"> 
            {isAdded[product.id]?
            <Button variant="contained" 
            size={window.innerWidth <= 868 ? 'small' : 'large'}
            color="primary"
             className="button"
              disabled> 
            Added
          </Button>
          : <Button
            variant="contained"
            size={window.innerWidth <= 868 ? 'small' : 'large'} 
            color="primary"
            className="button"
            onClick={handleAddToCart}> 
          Add to Cart
        </Button>  }
              
              <Button
               variant="outlined"
               size={window.innerWidth <= 868 ? 'small' : 'large'} 
               onClick={handleToggleFavorite}
               className="button"

               > 
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                Add to Favorites
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
