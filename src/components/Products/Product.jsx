import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './products.css'

function Product({ name, description, price, imageUrl }) {
  return (
    <Card className='product'
      sx={{
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        sx={{ height: 240 }}
        image={imageUrl}
        title={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
