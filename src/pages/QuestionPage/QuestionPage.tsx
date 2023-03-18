import { useParams } from 'react-router-dom'
import { BaseContainer } from '../../components/base/base-container'
import { QuestionFooter } from '../../components/QuestionFooter'
import { QuestionMarker } from '../../components/QuestionMarker'
import { MapBody } from '../../components/Map/MapBody'
import { MapLayout } from '../../components/Map/MapLayout'
import React from 'react'
import { ByManyMarker } from '../../components/ByManyMarker'
import { LatLng } from 'leaflet'
import { ByLocMarker } from '../../components/ByLocMarker'
import { ByNameMarker } from '../../components/ByNameMarker'

interface quizProps {
  type: number,
  description: string,
  geoPoints: LatLng[],
  correctAnswer: LatLng | string
}

const QuestionPage = () => {
  const { id } = useParams()

  const quiz: quizProps = {
    type: 3,
    description: "Russia quiz",
    geoPoints: [
      // {lat: 51.50948466888523, lng: -0.1454149846619446} as LatLng,
      // {lat: 51.50478185285805, lng: -0.05994431120777577} as LatLng,
      // {lat: 51.49002907705066, lng: -0.016350835188985172} as LatLng,
      // {lat: 51.51472124771925, lng: -0.09255360429271109} as LatLng,
      // {lat: 51.49783367652096, lng: -0.1987912486062338} as LatLng,
      {lat: 51.500217637960134, lng: -0.1241116699366307} as LatLng
    ],
    correctAnswer:
      //"Red square"
      {lat: 51.500217637960134, lng: -0.1241116699366307}  as LatLng
  }

  return (
    <BaseContainer>
      <MapLayout>
        <MapBody>
          {quiz.type === 1 ? <ByManyMarker
            geoPoints={quiz.geoPoints}
            correctAnswer={quiz.correctAnswer as LatLng}
          /> : quiz.type === 2 ? <ByLocMarker
              geoPoints={quiz.geoPoints}
              correctAnswer={quiz.correctAnswer as string}
            /> : <ByNameMarker
            geoPoints={quiz.geoPoints}
            correctAnswer={quiz.correctAnswer as LatLng}
          />
          }
        </MapBody>
      </MapLayout>
      <QuestionFooter />
    </BaseContainer>
  )
}

export default QuestionPage
