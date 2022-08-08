import React, { useContext } from 'react'
import { AppContext } from '../Pages/Home';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
const BodyPartCard = ({ item }) => {
  const { bodyPart, setBodyPart,setSearchedString } = useContext(AppContext);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px"
      }}
      onClick={() => {
        setBodyPart(item);
        setSearchedString(item.charAt(0).toUpperCase() + item.slice(1))
        window.scrollTo({ top: 1700, behavior: "smooth" })

      }}
    >
      <img src={Icon} alt="dumbel" style={{ width: '40px', height: '40px' }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        textTransform="capitalize"
        color="#3A1212"
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPartCard