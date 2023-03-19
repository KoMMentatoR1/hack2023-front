import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { QuizCard } from '../../../QuizCard'

export const MainBody = () => {
  const navigator = useNavigate()


  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" >
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index} display="flex" justifyContent="center">
          <QuizCard/>
        </Grid>
      ))}
    </Grid>
  )
}