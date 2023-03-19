import {
  Button,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material'
import { FormWrapper } from '../../CreateQuestionFooter/style/style'
import React from 'react'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'

export const QuestionFooter = () => {
  const {answerText} = useTypeSelector(state => state.answer)

  return (
    <FormWrapper>
      <Container maxWidth='lg'>
        <Grid container direction='column' alignItems='center'>
          <Grid item xs={3} sx={{ margin: ' 15px 0' }}>
            <Pagination count={20} defaultPage={5} color='primary' />
          </Grid>
          <Grid item xs={3} sx={{ margin: ' 15px 0' }}>
            <Typography gutterBottom variant="h6" component="div" sx={{color: '#000000'}} align="center">
              Найдите Биг-Бэн
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: ' 15px' }}>
            <Button>Продолжить</Button>
          </Grid>
        </Grid>
      </Container>
    </FormWrapper>
  )
}
