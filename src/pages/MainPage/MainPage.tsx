import React from 'react'
import { BaseContainer } from '../../components/base/base-container'
import { ProfileLayout } from '../../components/Profile/ProfileLayout'
import { MainBody } from '../../components/Main/MainBody'

const MainPage = () => {


  return (
    <BaseContainer>
      <ProfileLayout>
        <MainBody/>
      </ProfileLayout>
    </BaseContainer>
  )}

export default MainPage
