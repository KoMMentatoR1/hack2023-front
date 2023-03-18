import { LatLng } from 'leaflet'

export interface ICreateQuestion {
  description: string
  previousKey: string
  geoPoints: LatLng[]
  currectAnswer: LatLng | { answer: string }
  ballPerQuest: number
  quizId: number
  type: 0 | 1 | 2
}
