import { Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const SimpleAuthLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  padding: '0px 50px 50px 50px',
}))

export const Title = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '40px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: '500',
  color: theme.primary.main,
  textShadow: theme.mode === 'dark' ? `${theme.primary} 0 0 8px` : 'none',
  marginBottom: '10px',
  paddingTop: '15px',
  textAlign: 'center',
  transition: 'text-shadow 0.1s linear, tcolor 0.1s linear',
}))

export const SimpleAuthButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SimpleAuthButton = styled(Button)(({ theme }) => ({
  width: '100%',
  background: theme.button.secondary,
  border: `1px solid ${theme.button.secondaryBorder}`,
  color: theme.button.text,
  ':hover': {
    border: `1px solid transparent`,
    background: theme.button.secondaryHover,
  },
  transition: 'background-color 0.1s linear',
}))

export const OAuthLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#fff',
}))
