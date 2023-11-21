
import React from 'react';
import axios from 'axios';
import {useNavigate, useParams, useLocation} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Welcome = () => {

  const navigate = useNavigate();

  const defaultTheme = createTheme();
  const location = useLocation();
  const email = location.state?.email;
  
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // Call the logout endpoint on the server
      const response = await axios.post('http://localhost:3001/api/auth/logout');
  
      // Assuming the server responds with success: true
      if (response.data && response.data.success) {
        // Clear the token from local storage or cookies
        localStorage.removeItem('token');
        console.log('Logout succesfull', response.data);
        // Redirect the user to the login page or another desired location
        navigate('/login');
      }else {
        console.error('Logout failed:', response.data);
      }
    } catch (error) {
      // Handle errors, if any
      console.error('Logout failed:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
      Welcome to your profile page! 
      </Typography>
      <Typography component="h3" variant="h7">
      {email}
      </Typography>
      <Box component="form" onSubmit={handleLogout} noValidate sx={{ mt: 1 }}>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Log out
          </Button>
          </Box>
          </Box>
      </Grid>
      </Grid>
      </ThemeProvider>      
  );
};

export default Welcome;
