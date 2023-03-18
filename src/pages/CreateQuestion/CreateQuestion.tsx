import { BaseContainer } from '../../components/base/base-container'
import { CreateQuestionFooter } from '../../components/CreateQuestionFooter'
import { CreateQuestionMarker } from '../../components/CreateQuestionMarker'
import { MapBody } from '../../components/Map/MapBody'
import { MapLayout } from '../../components/Map/MapLayout'

const CreateQuestion = () => {
  return (
    <BaseContainer>
      <MapLayout>
        <MapBody>
          <CreateQuestionMarker />
        </MapBody>
      </MapLayout>
      <CreateQuestionFooter />
    </BaseContainer>
  )
}

export default CreateQuestion
