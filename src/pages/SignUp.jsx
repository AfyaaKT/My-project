import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too short')
    .max(16, 'Too long')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(3, 'Too short')
    .max(16, 'Too long')
    .required('Last Name is required'),
  password: Yup.string()
    .min(8, 'Password is too short')
    .max(16, 'Password is too long')
    .required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function SignUp() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={async (vals) => {
            try {
              const userCredential = await createUserWithEmailAndPassword(auth, vals.email, vals.password);
              const user = userCredential.user;
              await sendEmailVerification(user);
              alert('Success! Please verify your email');
            } catch (error) {
              console.error('Error signing up:', error.message);
              alert('Error signing up. Please try again.');
            }
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
               <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="First Name"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName && touched.firstName}
                  helperText={<ErrorMessage name="firstName" />}
                />
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  margin="normal"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName && touched.lastName}
                  helperText={<ErrorMessage name="lastName" />}
                />
              <TextField
                label="Email Adress"
                name="email"
                fullWidth
                variant="outlined"
                margin="normal"
                value={values.email}
                onChange={handleChange}
                error={errors.email && touched.email}
                helperText={<ErrorMessage name="email" />}
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                variant="outlined"
                margin="normal"
                value={values.password}
                onChange={handleChange}
                error={errors.password && touched.password}
                helperText={<ErrorMessage name="password" />}
                required
              />
              <Button variant="contained" type="submit" color="primary" fullWidth >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/signIn" variant="body2" >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default SignUp;
