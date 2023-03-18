import React, { FC } from 'react'
import {
  Background,
  Container,
  Dashboard,
  DashboardContainer,
  SubTitle,
  ThemButtonContainer,
  Title,
} from '../style/style'
import { SimpleAuth } from '../../SimpleAuth'
import { BaseThemeButton } from '../../../base/base-theme-button'

interface AuthPageLayoutProps {
  title: string
  children: React.ReactNode
  authMode?: 'registration' | 'login'
  simpleAuth?: boolean
}

export const AuthPageLayout: FC<AuthPageLayoutProps> = ({
  title,
  children,
  authMode = 'login',
  simpleAuth = true,
}) => {
  return (
    <Background>
      <Container>
        <DashboardContainer>
          <Dashboard>
            <Title>{title}</Title>
            {children}
          </Dashboard>
          {simpleAuth ? <SimpleAuth authMode={authMode} /> : ''}
        </DashboardContainer>
      </Container>
    </Background>
  )
}
