import { useParams } from 'react-router-dom'
import { BaseContainer } from '../../components/base/base-container'
import { QuizFooter } from '../../components/QuizFooter'
import { QuizMarker } from '../../components/QuizMarker'
import { MapBody } from '../../components/Map/MapBody'
import { MapLayout } from '../../components/Map/MapLayout'

const QuizPage = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <BaseContainer>
      <MapLayout>
        <MapBody>
          <QuizMarker />
        </MapBody>
      </MapLayout>
      <QuizFooter />
    </BaseContainer>
  )
}

export default QuizPage
