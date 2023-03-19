import { ButtonContainer } from './../../Auth/AuthButtonContainer/style/style';
import { styled, Card, Typography } from '@mui/material';

export const CardBody = styled(Card)(({ theme }) => ({
  backgroundColor: theme.background.layout,
	
  padding: '10px 15px', 
	maxWidth: "800px",
	width:"100%",
  color: theme.text.primary,
  '& > div': {
    display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  }
}))
export const CardRole = styled("div")(({ theme }) => ({
	display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
}))
export const ButtonContainerStyled = styled(ButtonContainer)(({ theme }) => ({
  margin: 0,
  width: 'unset',
    '& > *': {
    transform: 'rotate(90deg)',
    width: 'unset',
  margin: 0,
  },
  '&.active > *': {
    transform: 'rotate(-90deg)',
    transition: '.2s ease',
  },
  '&:hover > *': {
    transition: '.2s ease',
    cursor: 'pointer'
  }
}))

export const QuestionsBody = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap:'20px',
  justifyContent: 'flex-start'
}))

