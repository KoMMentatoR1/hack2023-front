import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'
import { useAction } from '../../../shared/hooks/useAction'
import { BaseSelect } from '../../base/base-select'
import { FieldValues, useForm } from 'react-hook-form'
import { BaseInput } from '../../base/base-input'
import { FormWrapper } from '../style/style'

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  return (
    <FormWrapper>
      <Container maxWidth='lg'>
        <Grid container direction='column' alignItems='center'>
          <FormControl fullWidth variant='standard'>
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
          <Grid item xs={3} sx={{ margin: ' 15px 0' }}>
            <Pagination count={1} color='primary' />
          </Grid>
          <Grid item xs={2}>
            {type === 1 ? (
              <Button onClick={handleChangeMode}>change {mode}</Button>
            ) : null}
          </Grid>
          <BaseInput
            rules={{
              required: 'Email address is required',
            }}
            required
            error={errors.answer ? true : false}
            label='Описание'
            name='description'
            helperText={errors.answer?.message as string}
            control={control}
            defaultValue={correctAnswerText}
          />
          {type === 3 ? (
            <BaseInput
              rules={{
                required: 'Email address is required',
              }}
              required
              error={errors.answer ? true : false}
              label='Правильный ответ'
              name='answer'
              helperText={errors.answer?.message as string}
              control={control}
              defaultValue={correctAnswerText}
            />
          ) : null}
          <Grid item xs={2} sx={{ marginTop: ' 15px' }}>
            <Button>submit</Button>
          </Grid>
        </Grid>
      </Container>
    </FormWrapper>
  )
}
