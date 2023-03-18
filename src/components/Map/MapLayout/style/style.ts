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
}))

export const LayoutBody = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: theme.background.main,
  transition: 'background .1s linear',
}))