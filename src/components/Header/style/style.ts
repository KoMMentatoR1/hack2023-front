import { AppBar, styled } from '@mui/material'

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  backgroundColor: theme.background.main,
  boxShadow: 'none',
  transition: 'background .1s linear',
}))

export const HeaderBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.text.primary,
}))

export const ButtonContainer = styled('div')(({ theme }) => ({
  ':hover': {
    color: theme.text.primary,
    cursor: 'pointer',
  },
  transition: 'color .1s linear',
}))
