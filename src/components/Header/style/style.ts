import { AppBar, styled } from '@mui/material'

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  backgroundColor: theme.background.main,
  boxShadow: 'none',
  top:"0",
  transition: 'background .1s linear',
}))

export const HeaderBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.text.primary,
  margin: '0px 7% 0px 7%',
}))

export const ButtonContainer = styled('div')(({ theme }) => ({
  ':hover': {
    color: theme.text.primary,
    cursor: 'pointer',
  },
  transition: 'color .1s linear',
}))
