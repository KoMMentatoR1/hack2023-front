import { Button, styled } from '@mui/material'

export const Background = styled('div')(({ theme }) => ({
  backgroundColor: theme.background.main,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '30px 0',
  margin: '0 auto',
  transition: 'background 0.1s linear',
}))

export const Container = styled('div')(({ theme }) => ({
  width: '540px',
  marginRight: 'auto',
  marginLeft: 'auto',
  position: 'relative',

  '@media (max-width: 1200px)': {
    width: '60%',
  },
  '@media (max-width: 930px)': {
    width: '70%',
  },
  '@media (max-width: 600px)': {
    width: '90%',
  },
}))

export const DashboardContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: `20px`,
  marginTop: '30px',
  background: theme.background.layout,
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
  transition:
    'background 0.1s linear, border 0.1s linear, boxShadow 0.1s linear',
}))

export const Dashboard = styled('div')(() => ({
  width: '100%',
}))

export const Title = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '50px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: '500',
  color: theme.text.primary,
  marginBottom: '50px',
  padding: '70px 50px 0 50px',
  textAlign: 'center',
  transition: 'text-shadow 0.1s linear, tcolor 0.1s linear',
}))

export const SubTitle = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '32px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: '500',
  color: theme.primary.main,
  textShadow: theme.mode === 'dark' ? `${theme.primary} 0 0 8px` : 'none',
  textAlign: 'center',
  transition: 'text-shadow 0.1s linear, color 0.1s linear',
}))

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  padding: 0 50px;
`
export const ThemButtonContainer = styled('div')`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const NavigateBlock = styled('div')`
  margin: 10px auto 40px auto;
  color: #959595;
`

export const NavigateTitle = styled('div')``

export const NavigareButton = styled(Button)(({ theme }) => ({
  width: '100%',
  fontFamily: 'Rubik, sans-serif',
  fontSize: '14px',
  textTransform: 'none',
  color: theme.text.secondary,
  '&:hover': {
    color: theme.text.primaryHover,
    background: 'transparent',
  },
  transition: 'color 0.1s linear',
}))
