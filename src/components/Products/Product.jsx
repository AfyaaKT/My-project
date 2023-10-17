import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './products.css'

function Product({ name, description, price, imgUrl  }) {
 
  
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
        image={imgUrl}
        title={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Price: ${price}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default Product;
