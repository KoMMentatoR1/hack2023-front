import React, { FC, useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon, LatLng } from 'leaflet'
import PlaceIcon from '@mui/icons-material/Place'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'
import { useAction } from '../../../shared/hooks/useAction'
import { Button } from '@mui/material'

export const CreateQuestionMarker: FC = () => {
  const [block, setBlock] = useState<boolean>(false)
  const { type, geoPoints, correctAnswerLoc } = useTypeSelector(
    store => store.question
  )
  const { mode } = useTypeSelector(store => store.helper)
  const { addPoint, deletePoint, setCorrectAnswerLoc } = useAction()

  const map = useMapEvents({
    click: e => {
      if (!block) {
        if (type === 1) {
          mode === 'right' ? setCorrectAnswerLoc(e.latlng) : addPoint(e.latlng)
        } else {
          setCorrectAnswerLoc(e.latlng)
        }
      }
    },
    popupopen: e => {
      setBlock(true)
    },
    popupclose: e => {
      setBlock(false)
    },
  })

  const customWrongIcon = new Icon({
    iconUrl: require('../../../shared/static/Location_Red.svg'),
    iconSize: [38, 38],
  })

  const customRightIcon = new Icon({
    iconUrl: require('../../../shared/static/Location_Green.svg'),
    iconSize: [38, 38],
  })

  return (
    <>
      {geoPoints.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customWrongIcon} position={marker}>
          <Popup>
            <Button onClick={() => deletePoint(marker)}>Удалить точку</Button>
          </Popup>
        </Marker>
      ))}
      {correctAnswerLoc?.lat && (
        <Marker icon={customRightIcon} position={correctAnswerLoc}>
          <Popup>
            // Add delete point
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      )}
    </>
  )
}
