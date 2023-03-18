import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'

export const LayoutMain = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: 'calc(100vh - 64px)',
}))

export const LayoutBody = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginTop: '64px',
  background: theme.background.main,
  transition: 'background .1s linear',
}))