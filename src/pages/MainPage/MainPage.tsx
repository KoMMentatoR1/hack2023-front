import React from 'react'
import { BaseContainer } from '../../components/base/base-container'
import { ProfileLayout } from '../../components/Profile/ProfileLayout'
import { MainBody } from '../../components/Main/MainBody'
import { MapLayout } from '../../components/Map/MapLayout'

const MainPage = () => {


  return (
    <BaseContainer>
      <MapLayout>
        <MainBody/>
      </MapLayout>
    </BaseContainer>
  )}

export default MainPage
