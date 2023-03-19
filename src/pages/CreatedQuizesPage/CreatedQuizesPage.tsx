import React from 'react'
import { MapLayout } from '../../components/Map/MapLayout'
import { MainBody } from '../../components/Main/MainBody'
import { BaseContainer } from '../../components/base/base-container'
import { Typography } from '@mui/material'

const CreatedQuizesPage = () => {
  return (
    <BaseContainer>
      <MapLayout>
        <Typography gutterBottom variant="h3" component="div" sx={{color: '#252525'}} align='center'>
            Ваши викторины
        </Typography>
        <MainBody/>
      </MapLayout>
    </BaseContainer>
  )
}

export default CreatedQuizesPage