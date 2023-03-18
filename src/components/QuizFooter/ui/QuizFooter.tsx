import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

export const QuizFooter = () => {
  const info = {
    type: 1,
    description: "Red square",
    geoPoints: {

    }
  }

  return (
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
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}