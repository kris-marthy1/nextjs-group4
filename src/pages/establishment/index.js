import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Navbar from '../navbar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Establishment() {
  const router = useRouter();
  const [selectedEstablishment, setSelectedEstablishment] = useState(null);
  const [selectedWindow, setSelectedWindow] = useState(null);

  const handleWindowClick = (window) => {
    setSelectedWindow(window);
    // You can perform any other actions here, such as navigating to a specific page based on the selected establishment
    router.push({
      pathname: '/window',
      query: { window: window }
    })
  };


  useEffect(() => {
    if (router.query.establishment) {
      setSelectedEstablishment(router.query.establishment);
    }
  }, [router.query.establishment]);

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', marginLeft: '1.90rem',          marginTop: '2.3rem'}}>
            <Button onClick={() => router.push('../homepage')}>
                <Typography sx={{ color: 'black'}}><KeyboardReturnIcon fontSize="large"/></Typography>
            </Button>
       </Box>
      <Typography variant="h5" textAlign='center' m={3}>Window selection for {selectedEstablishment}
      </Typography>

      <Box spacing='1' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem' }}>
        <Box
          mb={1}
          onClick={() => handleWindowClick("Window 1")}
          sx={{
            cursor: 'pointer',
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 

              }
          }}
        >
          <Typography variant="h6">Window 1</Typography>
        </Box>
        <Box
          mb={1}
          onClick={() => handleWindowClick("Window 2")}
          sx={{
            cursor: 'pointer',
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 

              }
          }}
        >
          <Typography variant="h6">Window 2</Typography>
        </Box>
        <Box
          mb={1}
          onClick={() => handleWindowClick("Window 3")}
          sx={{
            cursor: 'pointer',
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 

              }
          }}
        >
          <Typography variant="h6">Window 3</Typography>
        </Box>
      </Box>
    </>
  );
}
