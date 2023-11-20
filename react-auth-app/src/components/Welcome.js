
import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Welcome = () => {

  const navigate = useNavigate();

  const defaultTheme = createTheme();

  const handleLogout = async () => {
    try {
      // Call the logout endpoint on the server
      const response = await axios.post('http://localhost:3001/api/auth/logout');
  
      // Assuming the server responds with success: true
      if (response.data.success) {
        // Clear the token from local storage or cookies
        localStorage.removeItem('token');
        console.log(response.data);
        // Redirect the user to the login page or another desired location
        navigate('/login');
      }
    } catch (error) {
      // Handle errors, if any
      console.error('Logout failed:', error);
    }
  };

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
        ></Box>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
      Welcome to your profile page!
      </Typography>
      <Box component="form" onSubmit={handleLogout} noValidate sx={{ mt: 1 }}>
      </Box>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Log out
          </Button>
      </Container>
      </ThemeProvider>      
  );
};

export default Welcome;
