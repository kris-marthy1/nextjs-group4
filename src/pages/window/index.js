import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import { Button, Box, Typography,  Grid, createTheme, responsiveFontSizes, ThemeProvider,
} from '@mui/material';
import { useRouter } from 'next/router';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Settings() {
  const router = useRouter();
  const [queueButton, setQueueButton] = useState('Join Queue');
  const [queueBox, setQueueBox] = useState(false);
  const [time, setTime] = useState(120); // 2 minutes in seconds

  function handleQueue(x) {
    x === 'Join Queue'
      ? [setQueueButton('Exit Queue'), setQueueBox(true)]
      : [setQueueButton('Join Queue'), setQueueBox(false)];
  }

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  function formatTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', marginLeft: '1.90rem',          marginTop: '2.3rem'}}>
            <Button onClick={() => router.push('../establishment')}>
                <Typography sx={{ color: 'black'}}><KeyboardReturnIcon fontSize="large"/></Typography>
            </Button>
       </Box>
      <Grid
        spacing="1"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <h2>Currently processing:</h2>
        <Box
          mb={1}
          sx={{
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            width: '75%',
            height: '150px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h3"># 1</Typography>
            <Typography variant="h6">Janine Dollente</Typography>
            <Typography variant="h6">time before skip: {formatTime()}</Typography>
          </ThemeProvider>
        </Box>
      </Grid>
      <Box sx={{ width: '99vw' }}>
        <Typography>Next in queue:</Typography>
      </Box>
      <Grid
        container
        mb={8}
        columns={{ xs: 6, sm: 8, md: 12 }}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid
          item
          xs={2}
          sm={4}
          md={4}
          mb={1}
          sx={{
            padding: '1rem',
            border: '1px solid #ffeb3d',
            borderRadius: '4px',
            width: '50%',
            height: '112.5px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h3"># 2</Typography>
            <Typography variant="h6">LJ Pegal</Typography>
          </ThemeProvider>
        </Grid>

        {queueBox && (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            mb={1}
            sx={{
              padding: '1rem',
              border: '1px solid #ffeb3d',
              borderRadius: '4px',
              width: '50%',
              height: '112.5px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography variant="h3"># 3</Typography>
              <Typography variant="h6">Kris Marthy G. Denso</Typography>
            </ThemeProvider>
          </Grid>
        )}
      </Grid>

      <Box
        mb={1}
        onClick={() => handleQueue(queueButton)}
        sx={{
          cursor: 'pointer',
          padding: '1rem',
          border: '1px solid #ffeb3d',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#ADD8E6',
            color: 'black',
            border: '2px solid #fff176',
          },
        }}
      >
        <Typography variant="h6" textAlign="center">
          {queueButton}
        </Typography>
      </Box>
    </>
  );
}
