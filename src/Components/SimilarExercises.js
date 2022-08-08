import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({ targetExercises, equipmentExercises }) => {
  return (
    <Box p="20px" sx={{ marginTop: { lg: '50px', xs: '20px' } }}>
      <Typography variant="h4" fontWeight="bold" mb="50px">
        Similar <span style={{ color: '#ff2625' }}>Target Muscle</span> exercises
      </Typography>
      <Stack sx={{ flexDirection: { lg: "row" }, gap: { lg: '100px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center" mb="60px">
        {targetExercises.map(exercise => {
          return (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          )
        })}
      </Stack>
      <Box mt="100px">
        <Typography variant="h4" fontWeight="bold" mb="50px">
          Similar <span style={{ color: '#ff2625' }}>Equipment</span> exercises
        </Typography>
        <Stack sx={{ flexDirection: { lg: "row" }, gap: { lg: '100px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center" mb="100px">
          {equipmentExercises.map(exercise => {
            return (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default SimilarExercises