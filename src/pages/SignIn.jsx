import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  
} from '@firebase/auth';


const defaultTheme = createTheme();
const validationSchema = Yup.object().shape({
 
  email : Yup.string()
  .email('invalid email')
  .required('email is required'),
  password :  Yup.string()
  .min(8,' too short')
  .max(16, 'too long')
  .required('password is required'),
  
})
export default function SignIn() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
          <Formik
  initialValues={{
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  }}
  onSubmit={async (vals) => {
    await signInWithEmailAndPassword(
      auth,
      vals.email,
      vals.password
    ).then((userCredintals) => {
      
      alert('success please verfiy your email');
    });
  }}
  validationSchema={validationSchema}
>
    {({values , errors , touched , handleChange})=> (
      <Form>
            <TextField
              label='Email'
              name='email'
              fullWidth
              variant='outlined'
              margin='dense'
              value={values.email}
              onChange={handleChange}
              error={errors.email && touched.email}
              helperText={<ErrorMessage name='email' />}
              required
            />
           <TextField
              label='Password'
              name='password'
              type='password'
              fullWidth
              variant='outlined'
              margin='dense'
              value={values.password}
              onChange={handleChange}
              error={errors.password && touched.password}
              helperText={<ErrorMessage name='password' />}
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signUp' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </Form>
    )}
  </Formik>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}