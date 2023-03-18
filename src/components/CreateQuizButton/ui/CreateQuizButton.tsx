import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const CreateQuizButton = () => {
  const navigator = useNavigate()

  return (
    <Button variant="contained" size="large" onClick={() => navigator('/createQuiz')} sx={{marginRight: '10px'}}>
      Создать викторину
    </Button>
  )
}