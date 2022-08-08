import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../Pages/Home';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Error from '../Components/Error'

const Exercises = () => {
  const { bodyPart, exercises, setExercises, searchedString } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  // const [isError, setIsError] = useState(true);

  



  const paginate = (e, value) => {
    //these argumenets passed by pagination component by default
    setCurrentPage(value);
    window.scrollTo({ top: 1600, behavior: "smooth" })
  }

  useEffect(() => {
    const fetchExerciseForBodyPart = async () => {
      let particularExerciseData = [];

      if (bodyPart === "all") {
        particularExerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      } else {
        particularExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)

      }

      setExercises(particularExerciseData)
    }
    fetchExerciseForBodyPart()
  }, [bodyPart])

  if(exercises.length===0) return <Error searchedExercise={searchedString}/>



  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExecise = indexOfLastExercise - exercisePerPage;

  const currentExercises = exercises.slice(indexOfFirstExecise, indexOfLastExercise)
  return (
    <Box id="exercise"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px"
    >
      <Typography variant='h4' mb="46px">
        Showing Results for : <span style={{color: "#ff2625"}}>"{searchedString}"</span>
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => {
          return (
            <ExerciseCard key={idx} exercise={exercise} />
          )
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 &&
          (
            <Pagination
              color='standard'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            >
            </Pagination>
          )}
      </Stack>
    </Box>
  )
}

export default Exercises