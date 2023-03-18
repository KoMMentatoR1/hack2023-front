import React, { FC, useRef, useState } from 'react'
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng, popup } from 'leaflet'
import { Button, TextField } from '@mui/material'
import { BaseInput } from '../../base/base-input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'
import { useAction } from '../../../shared/hooks/useAction'

interface ByNameMarkerProps {
  geoPoints: LatLng[],
  correctAnswer: LatLng
}

export const ByNameMarker: FC<ByNameMarkerProps> = ({geoPoints, correctAnswer}) => {
  const [position, setPosition] = useState<LatLng |  null>(null)
  const {answerLoc} = useTypeSelector(state => state.answer)
  const {setAnswerLoc} = useAction()

  const map = useMapEvents({
    click: (e) => {
      console.log(e.latlng)
      setAnswerLoc(e.latlng)
      setPosition(correctAnswer)
      map.flyTo(correctAnswer, 13)
    },


  });

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
      {answerLoc?.lat && (
        <Marker icon={customRightIcon} position={answerLoc}>

        </Marker>
      )}
      {position === null ? null : (
      <Marker position={position}  icon={customWrongIcon}>
        <Popup>You are here</Popup>
      </Marker>
      )}
    </>
  );
};