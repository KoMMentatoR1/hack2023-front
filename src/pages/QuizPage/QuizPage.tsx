import { useParams } from 'react-router-dom'
import { ProfileLayout } from '../../components/Profile/ProfileLayout'
import { BaseContainer } from '../../components/base/base-container'
import { Map } from '../../components/Map'
import { QuizFooter } from '../../components/QuizFooter'
import { QuizMarker } from '../../components/QuizMarker'

const QuizPage = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <BaseContainer>
      <ProfileLayout>
        <Map>
          <QuizMarker />
        </Map>
      </ProfileLayout>
      <QuizFooter />
    </BaseContainer>
  )
}

export default QuizPage