import React from 'react'
import { Box, Stack, Typography, createTheme } from '@mui/material';

const Footer = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        '"Segoe UI"',
        'Roboto'
      ].join(','),
    },
  });
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack justifyContent="center" width="100vw" alignItems="center" pt="20px">
        <Typography theme={theme} variant="h5" fontWeight="bold">
          Jacked<span style={{ color: "#ff2526" }} sx={{ fontSize: { lg: '28px', xs: '20px' } }}>.</span>com
        </Typography>
      </Stack>
      <Stack justifyContent="center" width="100vw" alignItems="center" pt="20px">
        <Typography variant="h6" sx={{ fontSize: { lg: '22px', xs: '16px' } }} mt="30px" textAlign="center" pb="40px">Made with ❤️ by Mohammad Asad Khan</Typography>
      </Stack>

    </Box>
  )
}

export default Footer