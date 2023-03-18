import React, { ChangeEventHandler, useState } from 'react'
import { BaseContainer } from '../../components/base/base-container'
import { CreateQuizFooter } from '../../components/CreateQuizFooter'
import { CreateQuizMarker } from '../../components/CreateQuizMarker'
import { MapBody } from '../../components/Map/MapBody'
import { MapLayout } from '../../components/Map/MapLayout'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'

const CreateQuizPage = () => {
  const [type, setType] = useState<number>(2)
  const [answer, setAnswer] = useState<string>('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredAnswer: string = e.target.value
    setAnswer(enteredAnswer)
  }

  return (
    <BaseContainer>
      <MapLayout>
        <MapBody>
          <CreateQuizMarker type={type}/>
        </MapBody>
      </MapLayout>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "blue"
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            //alignItems="center"
          >
            <Grid item xs={4}>
              <TextField
                required
                id="standard-required"
                label="Правильный ответ"
                defaultValue=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | React | Material UI | React Router`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BaseContainer>
  )
}

export default CreateQuizPage