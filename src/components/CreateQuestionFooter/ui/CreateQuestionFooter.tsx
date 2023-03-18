import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'
import { useAction } from '../../../shared/hooks/useAction'

export const CreateQuestionFooter = () => {
  const { type, correctAnswerText } = useTypeSelector(store => store.question)
  const { mode } = useTypeSelector(store => store.helper)
  const { setCorrectAnswerText, setType, clearData, setMode } = useAction()

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredAnswer: string = e.target.value
    setCorrectAnswerText(enteredAnswer)
  }

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(Number(event.target.value))
    clearData()
  }

  const handleChangeMode = () => {
    mode === 'wrong' ? setMode('right') : setMode('wrong')
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={type.toString()}
                label='Age'
                onChange={handleChangeType}
              >
                <MenuItem value={1}>Угадай из списка</MenuItem>
                <MenuItem value={2}>Угадай локацию</MenuItem>
                <MenuItem value={3}>Угадай название</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            {type === 1 ? (
              <Button onClick={handleChangeMode}>change {mode}</Button>
            ) : (
              <TextField
                required
                id='standard-required'
                label='Правильный ответ'
                defaultValue={correctAnswerText}
                variant='standard'
                onChange={handleChangeAnswer}
              />
            )}
          </Grid>
          <Grid item xs={4}>
            <Button>submit</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
