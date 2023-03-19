import React, { FC } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CustomArrowIcon, CustomEmptyStarIcon, CustomFullStarIcon } from '../style/style'
import { CreatedQuiz } from '../../../shared/types/quiz'


interface QuizCardProps {
  card: CreatedQuiz
}

export const QuizCard: FC<QuizCardProps> = ({card}) => {
  const navigator = useNavigate()

  return (
    <Card sx={{ width: 400, height: 420}} >
      <CardMedia
        sx={{ height: 260 }}
        image={card.link}
      />
      <CardContent>
        <Grid container >
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="div" sx={{color: '#F36C41'}} onClick={() => navigator('/quiz/' + 1)}>
              {card.title}
            </Typography>
          </Grid>
          <Grid container item xs={6} justifyContent="flex-end">
            {Array.from(Array(card.stars)).map((_, index) => (
              <CustomFullStarIcon/>
            ))}
            {Array.from(Array(5 - card.stars)).map((_, index) => (
              <CustomEmptyStarIcon/>
            ))}
          </Grid>
          <Grid container item xs={12} >
            <Typography variant="body2" sx={{color: '#000000'}} >
              {card.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {card.user}
            </Typography>
          </Grid>
          <Grid container item xs={6} justifyContent="flex-end">
            <CustomArrowIcon/>
            <Typography variant="body2" color="text.secondary" sx={{color: '#959595'}}>
              {card.plays}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

