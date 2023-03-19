import { AppBar, MenuItem,Toolbar, styled } from '@mui/material'

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  backgroundColor: theme.background.main,
  top: "0",
  boxShadow: 'none',
  transition: 'background .1s linear',
  zIndex:"1000"
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
export const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  backgroundColor: theme.background.main,
  color: theme.text.primary,
}))

export const ToolbarStyled = styled('div')(({ theme }) => ({
  margin: "0 38px",  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding:"10px 0"
}))