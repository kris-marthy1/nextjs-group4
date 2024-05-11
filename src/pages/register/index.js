import { useState } from 'react';
import { Container, Grid, Typography, Link, TextField, Button, CssBaseline, Alert } from "@mui/material";
import { useRouter } from 'next/router';
import Image from "next/image";

export default function SignUp() {
  
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
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
      <CssBaseline />
      <Container maxWidth="large">
        <Grid item xs={10} sx={{ marginTop: '5rem'}}>
          <Image 
            src="/QueueTrack.png"
            width={370}
            height={220}
            alt='Queue Track'
          />
        </Grid>
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
                Sign Up
              </Button>
              <Typography variant="body2" align="left" mt={1}>
                Already have an account? <Link href="/login">Login here.</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
