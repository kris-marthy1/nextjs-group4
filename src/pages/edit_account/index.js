import { useState, } from 'react';
import { useRouter } from 'next/router';
import { Container, Button, Grid, TextField, Typography, CssBaseline, Alert, Box, Link  } from "@mui/material";
import Image from 'next/image';
import { yellow } from '@mui/material/colors';
import { useEffect } from 'react';
import Navbar from '../navbar';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const colorYellow = yellow[300];

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('email@email.com');
  const [firstName, setFirstName] = useState('Kris Marthy');
  const [lastName, setLastName] = useState('Denso');
  const [phoneNum, setPhoneNum] = useState('09123456789');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !phoneNum ) {
      setError('Please fill in all fields');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    // Clear any previous errors
    setError('');
    router.push({ 
      pathname: '/login',
      query: { success: 'Successfully Registered' }
    });
  };
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  return (
    <>
       <Navbar />
       <Box sx={{ display: 'flex', marginLeft: '1.90rem',          marginTop: '2.3rem'}}>
            <Button onClick={() => router.push('../settings')}>
                <Typography sx={{ color: 'black'}}><KeyboardReturnIcon fontSize="large"/></Typography>
            </Button>
            <Typography sx={{ fontSize: '1.75rem' }}>
                Edit Account
            </Typography>
       </Box>
      <Container 
        maxWidth="sm" 
        sx={{
          padding: '20px', 
          height: '100vh',
          display: 'block', 
          flexDirection: 'column', 
        
        }}
        
      >
        
       
        <Grid container spacing={2} mb={20}>
          <Grid container spacing={1} justifyContent="center" alignItems="center" item xs={12} md={6}  >
            <Grid item md={7} xs={10}>
              {error && <Alert severity="warning" fullWidth>{error}</Alert>}
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                required
                error={error && !firstName}
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
                error={error && !lastName}
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                type='number'
                label="Phone Number"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                fullWidth
                required
                error={error && !phoneNum}
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                error={error && !validateEmail(email)}
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <Button
                onClick={handleSignUp} 
                variant="outlined" 
                fullWidth
                sx={{ 
                    backgroundColor: 'white', 
                    border: '2px solid #fff176', 
                    color: '#827717',
                    '&:hover': {
                        backgroundColor: '#fff176',
                        color: 'black'
                    }
                }}
              > 
                Save
              </Button>
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
