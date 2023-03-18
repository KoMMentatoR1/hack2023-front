import React, { FC, useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng } from 'leaflet'
import PlaceIcon from '@mui/icons-material/Place';
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'
import { useAction } from '../../../shared/hooks/useAction'
import { Button } from '@mui/material'

export const CreateQuizMarker: FC = () => {
  const [block, setBlock] = useState<boolean>(false)
  const { type, points, answerLoc } = useTypeSelector(store => store.question)
  const { mode } = useTypeSelector(store => store.helper)
  const { addPoint, deletePoint, setAnswerLoc} = useAction()

  const map = useMapEvents({
    click: (e) => {
      if (!block) {
        if (type === 1) {
          mode === 'right' ?
            setAnswerLoc(e.latlng) :
          addPoint(e.latlng)
        } else {
          setAnswerLoc(e.latlng)
        }
      }
    },
    popupopen: (e) => {
      setBlock(true)
    },
    popupclose: (e) => {
      setBlock(false)
    }
  });

  const customWrongIcon = new Icon({
    iconUrl: require('../../../shared/static/Location_Red.svg'),
    iconSize: [38, 38]
  })

  const customRightIcon = new Icon({
    iconUrl:  require('../../../shared/static/Location_Green.svg'),
    iconSize: [38, 38]
  })

  return (
    <>
      {points.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customWrongIcon} position={marker}>
          <Popup >
           <Button onClick={() => deletePoint(marker)}>
             Удалить точку
           </Button>
          </Popup>
        </Marker>
      ))}
      {answerLoc?.lat && (
        <Marker icon={customRightIcon} position={answerLoc}>
          <Popup >
            // Add delete point
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      )}
    </>
  );
};