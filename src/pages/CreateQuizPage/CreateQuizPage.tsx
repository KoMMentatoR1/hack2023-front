import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { BaseContainer } from '../../components/base/base-container'
import { CreateQuizFooter } from '../../components/CreateQuizFooter'
import { CreateQuizMarker } from '../../components/CreateQuizMarker'
import { MapBody } from '../../components/Map/MapBody'
import { MapLayout } from '../../components/Map/MapLayout'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'

const CreateQuizPage = () => {

  return (
    <BaseContainer>
      <MapLayout>
        <MapBody>
          <CreateQuizMarker/>
        </MapBody>
      </MapLayout>
      <CreateQuizFooter/>
    </BaseContainer>
  )
}

export default CreateQuizPage