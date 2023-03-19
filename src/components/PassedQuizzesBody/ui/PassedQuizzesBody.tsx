import { Box } from '@mui/material'
import { FC } from 'react'
import { PageHeader, TableHeader } from '../../Admin/AdminBody/style/style'
import PassedQuizItem from '../../PassedQuizItem'

interface ProfileLayoutProps {
  children?: React.ReactNode
}

export const PassedQuizzesBody: FC<ProfileLayoutProps> = ({ children }) => {
  const tests = [
    {
      name: 'Russia',
      author: 'Иванов Е.А',
      date: '03.12.2023',
      questions: [
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
      ],
    },
    {
      name: 'Russia 2 ',
      author: 'Иванов М.Е',
      date: '03.12.2023',
      questions: [
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
      ],
    },
    {
      name: 'Japan',
      author: 'Олег А.А.',
      date: '03.12.2023',
      questions: [
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
      ],
    },
    {
      name: 'Asia',
      author: 'Владимиров Д.И.',
      date: '03.12.2023',
      questions: [
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
        { name: 'question 1', score: 0 },
      ],
    },
  ]

  return (
    <Box
      sx={{
        gap: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '60px',
      }}
    >
      <PageHeader variant='h3'>Пройденные тесты</PageHeader>
      <TableHeader variant='body1'></TableHeader>
      {tests.map(el => (
        <PassedQuizItem {...el} />
      ))}
    </Box>
  )
}
