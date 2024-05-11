import React, { useState, useEffect } from 'react';
import { Box, Typography, Alert, IconButton, Avatar, Grid  } from '@mui/material';
import Navbar from '../navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Establishment() {
  const router = useRouter();
  const [selectedEstablishment, setSelectedEstablishment] = useState(null);
  const [successLog, setSuccessLog] = useState('');

  useEffect(() => {
    if (router.query.success) {
      setSuccessLog(router.query.success);
    }
  }, [router.query.success]);
  const handleEstablishmentClick = (establishment) => {
    setSelectedEstablishment(establishment);
    router.push({
      pathname: '/establishment',
      query: { establishment: establishment }
    });
  };

  return (
    <>
      <Navbar />
      <Grid item xs={10} sx={{display: 'flex', justifyContent: 'center'}}>
        <Image 
        src="/QueueTrack.png"
        width={320}
        height={200}
        alt='Queue Track'
        />
      </Grid>
      <Box spacing='1' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem' }}>
     
        <Typography variant='h6' mb={3}>Choose Establishment:</Typography>
        <IconButton
          
          onClick={() => handleEstablishmentClick("Establishment 1")}
          sx={{
            marginBottom: '8px',
            cursor: 'pointer',
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            color: 'black',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 
              }
          }}
        >
           <Avatar
            alt="Establishment 1"
            src="kris.jpg"
            sx={{ width: 40, height: 40 }}
          />
          <Typography ml={1} mr={3} variant="h6">Establishment 1</Typography>
        </IconButton>
        <IconButton
          mb={1}
          onClick={() => handleEstablishmentClick("Establishment 2")}
          sx={{
            marginBottom: '8px',
            cursor: 'pointer',
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            color: 'black',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 
              }
          }}
        >
          <Avatar
            alt="Establishment 2"
            src="kris.jpg"
            sx={{ width: 40, height: 40 }} 
          />
          <Typography ml={1} mr={3} variant="h6">Establishment 2</Typography>
        </IconButton>
        <IconButton
          mb={1}
          onClick={() => handleEstablishmentClick("Establishment 3")}
          sx={{
            marginBottom: '8px',
            cursor: 'pointer',
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            color: 'black',
            '&:hover': {
                backgroundColor: '#ADD8E6',
                color: 'black',
                border: '2px solid #fff176', 

              }
          }}
        >
          <Avatar
            alt="Establishment 3"
            src="kris.jpg"
            sx={{ width: 40, height: 40 }}           
          />
          <Typography ml={1} mr={3} variant="h6">Establishment 3</Typography>
        </IconButton>
      </Box>
      {successLog && (
        <Alert severity="success">{successLog}</Alert>
        )}
    </>
  );
}
