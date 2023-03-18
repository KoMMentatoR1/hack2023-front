import React from 'react'
import { ProfileLayout } from '../../components/Profile/ProfileLayout'
import { Map } from '../../components/Map'
import { QuizFooter } from '../../components/QuizFooter'
import { BaseContainer } from '../../components/base/base-container'
import { CreateQuizFooter } from '../../components/CreateQuizFooter'
import { CreateQuizMarker } from '../../components/CreateQuizMarker'

const CreateQuizPage = () => {
  return (
    <BaseContainer>
      <ProfileLayout>
        <Map>
          <CreateQuizMarker/>
        </Map>
      </ProfileLayout>
      <CreateQuizFooter/>
    </BaseContainer>
  )
}

export default CreateQuizPage