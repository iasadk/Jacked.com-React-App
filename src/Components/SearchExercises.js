import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Pages/Home';
import { Box, Stack, TextField, Typography, Button } from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalComponent from './HorizontalComponent';
import Loader from '../Components/Loader'


const SearchExercises = () => {
  const { setExercises, setSearchedString } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {

    const fetchBodyPartData = async () => {
      const bodyPartsList = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsList]);
    }

    fetchBodyPartData();

  }, [])
  if (bodyParts.length === 0) return <Loader />;

  const handleSearch = async () => {
    if (search) {
      setSearchedString(search)
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      if (exerciseData.length !== 0) {
        const searchResultArray = exerciseData.filter((exercise) => {
          return exercise.name.toLowerCase().includes(search) || exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search)
        })
        setSearch('');
        setExercises(searchResultArray);

      }
      else {
        alert("!!!!")
      }



    } else {
      alert('No input is Given!!!!!')
    }

  }

  return (
    <Stack alignItems="center" mt="37px"
      justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }}
        mb="50px" textAlign="center">
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position="realtive" mb="72px">
        <TextField sx={{
          input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
          width: { lg: '800px', xs: '350px' },
          backgroundColor: '#fff',
        }}
          height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercise" type="text" ></TextField>
        <Button className='search-btn' sx={{
          bgcolor: '#ff2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',

        }} onClick={handleSearch}>Search</Button>
      </Box>
      <Box width="100%" position="relative" p="20px">
        {<HorizontalComponent data={bodyParts} />}
      </Box>
    </Stack>
  )
}

export default SearchExercises