import { Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
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
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

const menu = [
  { name: 'Профиль', icon: <AccountCircleIcon />, path: '/Profile' },
  { name: 'Созданные викторины', icon: <ArtTrackIcon />, path: '/createdQuizes' },
]

export const Header = () => {
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
    <CustomAppBar position='static'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <HeaderBox>
          <ButtonContainer>
            <Grid container >
              <Grid item xs={3}>
                <svg width="61" height="36" viewBox="0 0 61 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.7136 27.9717C27.4782 27.9717 27.2864 27.7966 27.2897 27.5825C27.3221 25.673 27.5931 24.029 28.1028 22.6504C28.6471 21.1782 29.323 19.89 30.1305 18.7835C30.938 17.6782 31.7411 16.6566 32.5385 15.7208C33.336 14.785 34.0075 13.8281 34.5517 12.8499C35.096 11.8717 35.3693 10.7609 35.3693 9.51947C35.3693 9.5139 35.3693 9.50386 35.3693 9.49382C35.3693 9.12241 35.3637 7.51408 34.2919 6.41881C33.1364 5.23766 31.334 5.25774 30.7428 5.26443C30.2744 5.27001 28.8691 5.28451 27.6489 6.17121C25.9346 7.41816 25.8253 9.4849 25.7929 10.095L25.7818 10.3024C25.7706 10.5066 25.5855 10.6683 25.3591 10.6683H20.3779C20.1448 10.6683 19.9541 10.4965 19.9541 10.2846C19.9541 9.05103 20.1582 8.04722 20.3534 7.3479C20.6188 6.39427 21.1754 4.5138 22.9343 2.78167C23.6738 2.05224 24.3642 1.61614 24.5705 1.48899C26.1967 0.496329 28.1909 0 30.5543 0C33.9327 0 36.5527 0.829817 38.4108 2.48834C40.269 4.14685 41.1992 6.49131 41.1992 9.51947V9.54513C41.1992 10.8902 41.0018 12.068 40.6081 13.0808C40.2132 14.0935 39.7069 15.0081 39.0867 15.8245C38.4677 16.641 37.8097 17.4418 37.1159 18.2236C36.4211 19.0066 35.7641 19.8487 35.1451 20.751C34.5261 21.6533 34.0186 22.6817 33.6238 23.8394C33.2613 24.9045 33.065 26.156 33.0371 27.5959C33.0326 27.8056 32.8453 27.974 32.6144 27.974H27.7147L27.7136 27.9717Z" fill="#F36C41"/>
                  <path d="M27.2964 35.0408V30.5805C27.2964 30.3798 27.476 30.2158 27.6979 30.2158H32.6188C32.8408 30.2158 33.0203 30.3787 33.0203 30.5805V35.0408C33.0203 35.2416 32.8408 35.4055 32.6188 35.4055H27.6979C27.476 35.4055 27.2964 35.2427 27.2964 35.0408Z" fill="#F36C41"/>
                  <path d="M48.0563 25.5749C47.9046 25.5347 47.8121 25.3886 47.8511 25.2514C48.2013 24.0279 48.6597 23.0151 49.2263 22.2154C49.8308 21.3622 50.4889 20.6484 51.1994 20.0751C51.9099 19.5018 52.6036 18.9832 53.2784 18.5181C53.9532 18.053 54.551 17.5533 55.0707 17.0168C55.5905 16.4803 55.9574 15.8134 56.1716 15.0125C56.1716 15.0081 56.1738 15.0025 56.176 14.9958C56.2396 14.7571 56.514 13.7199 56.0132 12.8298C55.4734 11.8695 54.309 11.5717 53.9275 11.4736C53.6253 11.3966 52.7174 11.1635 51.7782 11.5237C50.4599 12.0312 50.0327 13.3429 49.9067 13.7299L49.8643 13.8615C49.8219 13.9909 49.6747 14.0634 49.5286 14.0244L46.3209 13.1644C46.1703 13.1243 46.0777 12.9804 46.1145 12.8443C46.3275 12.0502 46.632 11.439 46.8785 11.0218C47.2142 10.4541 47.8968 9.33879 49.3278 8.52681C49.9301 8.18552 50.4499 8.02268 50.6049 7.97695C51.8217 7.61781 53.1914 7.64235 54.7138 8.04945C56.8899 8.63277 58.4335 9.61874 59.3436 11.0073C60.2537 12.3959 60.4489 14.0656 59.9258 16.0164L59.9214 16.0331C59.6894 16.8986 59.3592 17.6236 58.931 18.208C58.5027 18.7925 58.0175 19.2932 57.4777 19.7126C56.9378 20.132 56.3768 20.5335 55.7946 20.9172C55.2124 21.302 54.6436 21.7303 54.0892 22.2043C53.5349 22.6783 53.0308 23.2538 52.5768 23.9308C52.1597 24.5543 51.8173 25.3261 51.5507 26.2485C51.5117 26.3824 51.3622 26.4593 51.2128 26.4192L48.0574 25.5737L48.0563 25.5749Z" fill="#252525"/>
                  <path d="M46.5685 30.0552L47.3381 27.1832C47.3727 27.0538 47.5166 26.9791 47.6605 27.0181L50.8292 27.8669C50.9719 27.9048 51.06 28.0409 51.0255 28.1714L50.2559 31.0434C50.2213 31.1728 50.0774 31.2475 49.9335 31.2085L46.7648 30.3597C46.6221 30.3218 46.534 30.1857 46.5685 30.0552Z" fill="#252525"/>
                  <path d="M9.26221 26.5162C9.11052 26.5564 8.95661 26.4772 8.92203 26.3389C8.61308 25.1042 8.50378 23.9989 8.59412 23.0218C8.69115 21.9801 8.90307 21.0332 9.2321 20.1822C9.56112 19.3312 9.90242 18.5348 10.2538 17.7942C10.6062 17.0536 10.8739 16.322 11.0557 15.5981C11.2375 14.8742 11.2219 14.1125 11.0077 13.3128C11.0077 13.3083 11.0055 13.3027 11.0033 13.296C10.9386 13.0573 10.6586 12.0223 9.77862 11.5014C8.83057 10.9404 7.67284 11.2639 7.29474 11.3698C6.9936 11.4546 6.09128 11.7055 5.45888 12.4874C4.56995 13.586 4.8566 14.9356 4.94136 15.3349L4.97036 15.471C4.99825 15.6048 4.90679 15.7398 4.76068 15.7788L1.55294 16.6387C1.40237 16.6789 1.25069 16.6008 1.21388 16.4647C1.00196 15.6706 0.960696 14.9891 0.965157 14.5051C0.971849 13.8448 1.00531 12.5387 1.83847 11.1189C2.18869 10.5222 2.55787 10.1218 2.6694 10.0046C3.54384 9.08449 4.74172 8.42086 6.26416 8.01376C8.4402 7.43043 10.2694 7.51297 11.7528 8.26025C13.2362 9.00753 14.2389 10.3571 14.762 12.3067L14.7664 12.3235C14.9984 13.189 15.0743 13.982 14.9951 14.7025C14.9159 15.423 14.7475 16.0989 14.4887 16.7313C14.2311 17.3637 13.9455 17.9928 13.6332 18.6162C13.321 19.2397 13.0432 19.8955 12.8001 20.5837C12.5569 21.2719 12.4075 22.0214 12.3539 22.8345C12.3038 23.5829 12.3941 24.4227 12.6239 25.3551C12.6573 25.4912 12.5659 25.6318 12.4164 25.6719L9.2611 26.5173L9.26221 26.5162Z" fill="#252525"/>
                  <path d="M10.2136 31.1393L9.44403 28.2673C9.40946 28.1379 9.49757 28.0019 9.64033 27.9628L12.809 27.114C12.9518 27.0761 13.0957 27.1497 13.1314 27.2791L13.901 30.1511C13.9355 30.2805 13.8474 30.4166 13.7047 30.4556L10.536 31.3044C10.3932 31.3423 10.2493 31.2687 10.2136 31.1393Z" fill="#252525"/>
                </svg>
              </Grid>
              <Grid container item xs={9} justifyContent="flex-end">
                <Typography
                  onClick={() => navigator('/main')}
                  sx={{ fontSize: '30px', paddingLeft: '5px'}}
                  variant='h6'
                  noWrap
                >
                  Geo quiz
                </Typography>
              </Grid>
            </Grid>
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
              sx={{ ml: 2 }}
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
      </Toolbar>
    </CustomAppBar>
  )
}
