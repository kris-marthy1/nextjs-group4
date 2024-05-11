import React from 'react';
import Navbar from '../navbar';
import { Button, Box } from "@mui/material";
import { useRouter } from 'next/router';
import {
  Typography,
  Grid,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Settings() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', marginLeft: '1.90rem',          marginTop: '2.3rem'}}>
            <Button onClick={() => router.push('../homepage')}>
                <Typography sx={{ color: 'black'}}><KeyboardReturnIcon fontSize="large"/></Typography>
            </Button>
       </Box>
        <Grid mt={8} mb={4} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            alt="Kris Marthy Denso"
            src="kris.jpg"
            sx={{ width: 120, height: 120 }}
            
          />
          <ThemeProvider theme={theme}>
            <Typography variant="h4" textAlign='center'>Kris Marthy G. Denso</Typography>
          </ThemeProvider>
        </Grid>
          
      <Box width="100%" sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => router.push('../edit_account')}
          sx={{ 
            border: '1.5px solid #ffeb3d', 
            marginBottom: '5px', 
            fontSize: '1.25rem', 
            color: 'black',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 

              }
          }}
        >
          
          Edit Account
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push('../login')}
          sx={{ 
            border: '1.5px solid #ffeb3d', 
            marginBottom: '5px', 
            fontSize: '1.25rem', 
            color: 'black',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 

              }
          }}
        >
          Logout
        </Button>
      </Box>
    </>
  );
}
