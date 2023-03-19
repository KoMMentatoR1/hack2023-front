import { Typography } from '@mui/material'
import { FC } from 'react'
import {
  ButtonContainerStyled,
  CardBody,
  CardRole,
  QuestionsBody,
} from '../style/style'
import { ButtonContainer } from '../../Header/style/style'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'

interface PassedTestQuestionType {
  name: string
  score: number
}

interface PassedTestItemType {
  name: string
  author: string
  date: string
  questions: Array<PassedTestQuestionType>
}

const PassedQuizItem: FC<PassedTestItemType> = ({
  name,
  author,
  date,
  questions,
}) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <CardBody>
      <div>
        <Typography variant='body2'>
          название:<Typography variant='body1'> {name}</Typography>
        </Typography>
        <Typography variant='body2' textAlign='center'>
          автор: <Typography variant='body1'>{author}</Typography>
        </Typography>
        <CardRole>
          <Typography variant='body2' textAlign='right'>
            дата прохождения: <Typography variant='body1'>{date}</Typography>
          </Typography>
          <ButtonContainerStyled
            className={active ? 'active' : undefined}
            onClick={() => {
              setActive(!active)
            }}
          >
            <ArrowForwardIosIcon />
          </ButtonContainerStyled>
        </CardRole>
      </div>
      {/* <QuestionsBody className={active ? 'active' : undefined}>
        {questions.map(el => (
          <div style={{ display: 'flex' }}>
            <Typography variant='body2'>{el.name}: </Typography>
            <Typography variant='body2'>{el.score}</Typography>
          </div>
        ))}
      </QuestionsBody> */}
    </CardBody>
  )
}

export default PassedQuizItem
