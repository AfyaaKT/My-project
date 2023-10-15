import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CakeIcon from '@mui/icons-material/Cake';
import BestSeller from '../../components/BestSeller/BestSeller';

const AboutPage = () => {
  return (
    <Container maxWidth="lg" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Sweet Story
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            At Sweet Slices, we are passionate about creating the most delectable cakes, cupcakes, and cookies you've ever tasted.
            <br /><br />
            Our journey began years ago, when our founder discovered a love for baking in their grandmother's kitchen. 
            It was there that they learned the art of crafting sweet creations that not only looked amazing but also tasted divine.
          </Typography>
          <Typography variant="body1">
            Over the years, we've honed our skills and developed our own secret recipes, using only the finest, freshest ingredients.
            <br /><br />
            We take pride in offering a wide variety of treats, from classic chocolate cakes to mouthwatering cupcakes and delicate cookies.
          </Typography>
          <Typography variant="body1">
            Our commitment to quality and flavor shines through in every bite, and we're delighted to share our creations with you.
            <br /><br />
            Thank you for choosing Sweet Slices, where every treat is a work of art and a labor of love.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar sx={{ bgcolor: '#FFD580', width: 120, height: 120 }}>
              <CakeIcon sx={{ fontSize: 64 }} />
            </Avatar>
          </Box>
        </Grid>
      </Grid>
      <BestSeller/>
      <Box mt={4}>
        <Typography variant="h5" align="center" gutterBottom>
          What Sets Us Apart
        </Typography>
        <Typography variant="body1">
          <strong>Quality Ingredients:</strong> We use only the finest ingredients to ensure every treat is a delight for your taste buds.
        </Typography>
        <br />
        <Typography variant="body1">
          <strong>Customization:</strong> Looking for something special? We offer customization options to make your treat unique.
        </Typography>
        <br />
        <Typography variant="body1">
          <strong>Community Engagement:</strong> We're proud to be part of the local community, and we actively engage in charity events and initiatives.
        </Typography>
        <br />
      </Box>
      
    </Container>
  );
};

export default AboutPage;
