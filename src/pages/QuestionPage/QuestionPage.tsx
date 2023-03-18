import { useParams } from 'react-router-dom'
import { BaseContainer } from '../../components/base/base-container'
import { QuestionFooter } from '../../components/QuestionFooter'
import { QuestionMarker } from '../../components/QuestionMarker'
import { MapBody } from '../../components/Map/MapBody'
import { MapLayout } from '../../components/Map/MapLayout'

const QuestionPage = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <BaseContainer>
      <MapLayout>
        <MapBody>
          <QuestionMarker />
        </MapBody>
      </MapLayout>
      <QuestionFooter />
    </BaseContainer>
  )
}

export default QuestionPage
