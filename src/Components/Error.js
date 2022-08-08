import React from 'react'
import { Box, Typography } from '@mui/material';
const Error = ({searchedExercise}) => {
    return (
        <Box>
            <Typography variant="h4" mt="60px" sx={{paddingLeft : "20px"}}>
                No Result Found for : <span style={{color: "#ff2625"}}>"{searchedExercise}"</span>
            </Typography>
        </Box>
    )
}

export default Error