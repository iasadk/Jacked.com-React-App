import React, { useEffect, useState } from 'react'
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Detail from '../Components/Detail'
import ExerciseVideo from '../Components/ExerciseVideo'
import SimilarExercises from '../Components/SimilarExercises'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscle, setTargetMuscle] = useState([])
  const [similarEquipmentExercise, setSimilarEquipmentExercise] = useState([])

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeApiUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailsData);
      const youtubeVideosData = await fetchData(`${youtubeApiUrl}/search?query=${exerciseDetailsData.name}`, youtubeOptions);
      setExerciseVideos(youtubeVideosData.contents)

      const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`, exerciseOptions);
      setTargetMuscle(targetMuscleData)

      const similarEquipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exerciseOptions);
      setSimilarEquipmentExercise(similarEquipmentData)


    }
    fetchExerciseData();

  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetExercises={targetMuscle.slice(0, 3)} equipmentExercises={similarEquipmentExercise.slice(0,3)} />

    </Box>
  )
}

export default ExerciseDetails