import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { QuizCard } from '../../../QuizCard'
import { CreatedQuiz } from '../../../../shared/types/quiz'

export const MainBody = () => {
  const navigator = useNavigate()

  // temporary example of data from database
  const cards: CreatedQuiz[] = [
    {
      id: 1,
      title: 'Russia',
      description:
        'Проверь свои знания о карте России, данная викторина содержит большинство регионов страны',
      user: 'OlegB',
      stars: 5,
      plays: 2045,
      link: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/5efb261d5644d99162d58489de94d41d/',
      finished: true,
      regionId: 123,
    },
    {
      id: 2,
      title: 'Italy',
      description:
        'Италия. Большая викторина затрагивающая самые известные места этой прекрасной страны',
      user: 'IgorMap',
      stars: 4,
      plays: 156,
      link: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/2/bcf7b98a0196fd5317a1cc7a16f8ba0e/',
      finished: true,
      regionId: 123,
    },
    {
      id: 3,
      title: 'Asia',
      description: 'Проверь свои знания о карте Азии',
      user: 'TkachenkoD',
      stars: 4,
      plays: 20,
      link: 'https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop',
      finished: true,
      regionId: 123,
    },
    {
      id: 4,
      title: 'China',
      description:
        'Проверь свои знания об основных достопримечательностях Китая',
      user: 'HurMa',
      stars: 5,
      plays: 99,
      link: 'https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop',
      finished: true,
      regionId: 123,
    },
    {
      id: 5,
      title: 'Japan',
      description: 'Викторина по основным достопримечательностях Японии',
      user: 'OlegB',
      stars: 4,
      plays: 677,
      link: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/6b2002a3dfd62f10ed5171e78f9db736/',
      finished: true,
      regionId: 123,
    },
    {
      id: 6,
      title: 'Russia 2',
      description: 'Проверь свои знания о карте Москвы и московской области',
      user: 'OlegB',
      stars: 4,
      plays: 913,
      link: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/5efb261d5644d99162d58489de94d41d/',
      finished: true,
      regionId: 123,
    },
  ]

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent='center'
    >
      {cards.map((card, index) => (
        <Grid
          item
          xs={2}
          sm={4}
          md={4}
          key={index}
          display='flex'
          justifyContent='center'
        >
          <QuizCard card={card} />
        </Grid>
      ))}
    </Grid>
  )
}
