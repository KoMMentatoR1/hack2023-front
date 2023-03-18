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
          <BaseSelect
            rules={{
              required: 'Необходимо выбрать тип задачи',
            }}
            required
            error={errors.type ? true : false}
            label='Тип задачи'
            name='type'
            options={[
              'Угадай из списка',
              'Угадай локацию',
              'Угадай название',
            ].map((option, index) => ({
              label: option,
              value: index + 1,
            }))}
            helperText={errors.type?.message as string}
            control={control}
          />
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
