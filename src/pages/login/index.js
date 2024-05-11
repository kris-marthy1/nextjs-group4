import { useState, } from 'react';
import { useRouter } from 'next/router';
import { Container, Button, Grid, TextField, Typography, CssBaseline, Alert, Avatar, Link  } from "@mui/material";
import Image from 'next/image';
import { yellow } from '@mui/material/colors';
import { useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const colorYellow = yellow[300];

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successReg, setSuccessReg] = useState(null);
  
  useEffect(() => {
    if (router.query.success) {
      setSuccessReg(router.query.success);
    }
  }, [router.query.success]);

  function verify_login(){
    router.push({
      pathname: '/homepage',
      query: { success: 'Successfully logged in' }
    })
  }
  return (
    <>
      <CssBaseline />
      <Container 
        maxWidth="sm" 
        sx={{
          padding: '20px', 
          height: '100vh',
          display: 'block', 
          flexDirection: 'column', 
        
        }}
        
      >

        <Grid item xs={10} sx={{display: 'flex', justifyContent: 'center', marginTop: '11rem'}}>
          <Image 
          src="/QueueTrack.png"
          width={370}
          height={230}
          alt='Queue Track'
          />
        </Grid>
        
       
        <Grid item xs={10} sx={{ width: '100%', mb: '5px' }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={10} sx={{ width: '100%', mb: '5px' }}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Typography sx={{ margin: '5px' }}>Don&apos;t have an account? 
            <Link href="/register" underline="hover" sx={{ ml: '5px' }}>
              {'Register here.'}
            </Link>
          </Typography>
        </Grid>
        
        <Grid item xs={10} sx={{ width: '100%', mb: '5px' }}>
        {successReg &&  
        <Alert severity="success" sx={{marginBottom: '5px'}}>{successReg}</Alert>}<Button 
            onClick={verify_login}
            variant="outlined" 
            fullWidth
            sx={{ 
              backgroundColor: 'white', 
              border: '2px solid #fff176', 
              color: '#827717',
              '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 

              }
            }} 
          >
            Login
          </Button>
        </Grid>
      </Container>
    </>
  );
}
