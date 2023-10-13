import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../data';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Context from '../../components/CartItems/CartItems';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    maxWidth: 800, // Increased the card width to accommodate the layout
    display: 'flex', // Use flex to arrange the image and details side by side
  },
  media: {
    width: 400, // Adjusted the width of the image
    height: 400,
  },
  detailsContainer: {
    flex: 1, // Allow details to take up remaining space
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Align details and buttons vertically
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Arrange buttons side by side
  },
  button: {
    margin: '10px',
  },
};

function ProductDetails() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === parseInt(productId));
  const { addToCart, addToFavorites, favoriteItems, removeFromFavorites } = useContext(Context);

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
    <div style={styles.container}>
      <h2>Product Details</h2>
      {product ? (
        <Card style={styles.card}>
          <CardMedia style={styles.media} image={product.imgUrl} title={product.name} />
          <CardContent style={styles.detailsContainer}>
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
            <div style={styles.buttonContainer}>
              <Button variant="contained" color="primary" style={styles.button} onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="outlined" style={styles.button} onClick={handleToggleFavorite}>
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
