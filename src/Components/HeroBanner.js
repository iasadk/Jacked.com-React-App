import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Banner from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box className="hero" sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb="23px" mt="30px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', sm: '40px' }, color: {lg: "black" ,sm: "#fff", xs: "#fff" } }} mb={3} >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5} sx={{ color: {lg: "black" , sm: "#fff", xs: "#fff" } }}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color="error" href='#exercises' sx={{ padding: '15px', backgroundGround: '#FF2625' }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', sm: 'none' }
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img className="hero-banner-img" src={Banner} alt="Banner" />
    </Box>
  )
}

export default HeroBanner