import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ButtonStyled } from '../style/style'

export const CreateQuestionButton = () => {
  const navigator = useNavigate()

  return (
    <ButtonStyled
      variant='contained'
      size='large'
      onClick={() => navigator('/createQuiz')}
    >
      Создать викторину
    </ButtonStyled>
  )
}
