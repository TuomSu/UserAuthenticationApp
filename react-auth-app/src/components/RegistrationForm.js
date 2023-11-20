
import React, { useState } from 'react';
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

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const defaultTheme = createTheme();

  const handleRegistration = async () => {
    try {
      // Send registration request to the backend
      const response = await axios.post('http://localhost:3001/api/auth/register', {
        email,
        password,
      });
      console.log('Registration response:', response);
      // Handle success (redirect to login page or show a success message)
      console.log('Registration successful:', response.data);
      // Redirect to login page and ask again for email and password
      navigate('/login');
    } catch (error) {
      // Handle registration error (show error message)
      console.error('Registration failed:', error.response.data.msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Include the login logic on form submission
    handleRegistration();
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
      Registration
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField 
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              />
      <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Grid container>
              <Grid item>
                <Link href='/login' variant="body2">
                  {"Already rigistered? Log in"}
                  </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegistrationForm;
