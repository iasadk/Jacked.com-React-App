import React, { useState, createContext } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercise from '../Components/Exercises';

export const AppContext = createContext();
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [searchedString, setSearchedString] = useState("All");


  return (
    <Box>
      <AppContext.Provider value={{bodyPart, setBodyPart,setExercises,exercises,searchedString, setSearchedString}}>
        <HeroBanner />
        <SearchExercises />
        <Exercise />
      </AppContext.Provider>

    </Box>
  )
}

export default Home