import {  styled } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const CustomFullStarIcon = styled(StarIcon)(({ theme }) => ({
  color: '#F36C41',
  ':hover': {
    color: '#F36C41',
  },
  transition: 'color .1s linear',

  '& > svg': {
    fontSize: '10px',
  },
}))

export const CustomEmptyStarIcon = styled(StarIcon)(({ theme }) => ({
  color: '#C0C0C0',
  ':hover': {
    color: '#C0C0C0',
  },
  transition: 'color .1s linear',

  '& > svg': {
    fontSize: '10px',
  },
}))

export const CustomArrowIcon = styled(PlayArrowIcon)(({ theme }) => ({
  color: '#959595',
  ':hover': {
    color: '#959595',
  },
  transition: 'color .1s linear',

  '& > svg': {
    fontSize: '5px',
  },
}))