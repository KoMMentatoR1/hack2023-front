import { ToolbarStyled } from '../style/style'

import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { ButtonContainer, CustomAppBar, HeaderBox } from '../style/style'

import AccountCircle from '@mui/icons-material/AccountCircle'
import { BaseThemeButton } from '../../base/base-theme-button'
import React, { useState } from 'react'
import { useAction } from '../../../shared/hooks/useAction'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import { CustomListItemIcon } from '../../Profile/ProfileLayout/style/style'
import { useNavigate } from 'react-router-dom'
import { CreateQuestionButton } from '../../CreateQuestionButton'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { FC } from 'react'
import Logo from '../../Logo'

import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import LogoWhite from '../../LogoWhite'

const menu = [
  { name: 'Профиль', icon: <AccountCircleIcon />, path: '/Profile' },
  {
    name: 'Созданные викторины',
    icon: <ArtTrackIcon />,
    path: '/createdQuizes',
  },
  {
    name: 'Пройденные тесты',
    icon: <AccessTimeIcon />,
    path: '/passedQuizzes',
  },
]

interface HeaderProps {
  position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky' | undefined
}

export const Header: FC<HeaderProps> = ({ position }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const { logout } = useAction()

  const navigator = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const { user } = useTypeSelector(state => state.auth)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onLogout = () => {
    logout()
  }

  return (
    <CustomAppBar position={position}>
      <ToolbarStyled>
        <HeaderBox>
          <ButtonContainer>
            <Typography
              onClick={() => navigator('/main')}
              sx={{ fontSize: '30px' }}
              variant='h6'
              noWrap
            >
              <Logo />
            </Typography>
          </ButtonContainer>
        </HeaderBox>
        <HeaderBox>
          <ButtonContainer>
            <IconButton
              style={{ margin: '0 10px' }}
              color='inherit'
              onClick={() => {
                navigator('/admin')
              }}
            >
              <AdminPanelSettingsIcon fontSize='large' />
            </IconButton>
          </ButtonContainer>
          <CreateQuestionButton />
          <BaseThemeButton fontSize='30px' />
          <ButtonContainer>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
              onClick={handleClick}
              aria-controls={open ? 'account-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircle sx={{ fontSize: '30px' }} />
            </IconButton>
          </ButtonContainer>
        </HeaderBox>
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {user.user.id
            ? menu.map(el => (
                <MenuItem onClick={() => navigator(el.path)}>
                  <CustomListItemIcon>{el.icon}</CustomListItemIcon>
                  {el.name}
                </MenuItem>
              ))
            : ''}
          <MenuItem
            sx={{ color: '#E9284A' }}
            onClick={() => (user.user.id ? onLogout() : navigator('/login'))}
          >
            <CustomListItemIcon>
              <LogoutIcon />
            </CustomListItemIcon>
            {user.user.id ? 'Выйти' : 'Войти'}
          </MenuItem>
        </Menu>
      </ToolbarStyled>
    </CustomAppBar>
  )
}
