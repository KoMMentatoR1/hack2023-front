import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CustomEmptyStarIcon, CustomFullStarIcon } from '../style/style'

export const QuizCard = () => {
  const navigator = useNavigate()

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 260 }}
        image="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/5efb261d5644d99162d58489de94d41d/"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color: '#F36C41'}}>
          Lizard
        </Typography>
        <CustomFullStarIcon/>
        <CustomFullStarIcon/>
        <CustomFullStarIcon/>
        <CustomEmptyStarIcon/>
        <CustomEmptyStarIcon/>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" onClick={() => navigator('/quiz/' + 1)}>Play</Button>
      </CardActions>
    </Card>
  )
}

