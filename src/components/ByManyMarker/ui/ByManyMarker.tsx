import React, {FC, useState} from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng } from 'leaflet'
import { Button } from '@mui/material'
import { useAction } from '../../../shared/hooks/useAction'

interface ByManyMarkerProps {
  geoPoints: LatLng[],
  correctAnswer: LatLng
}

export const ByManyMarker: FC<ByManyMarkerProps> = ({geoPoints, correctAnswer}) => {
  const {addSnack} = useAction()

  const map = useMapEvents({
    click: (e) => {
      console.log(e.latlng)
      //setMarkers([...markers, e.latlng]);
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

  const chooseAnswer = (marker: LatLng) => {
    const result = correctAnswer.lat !== marker.lat && correctAnswer.lng !== marker.lng
    if(result) {
      addSnack("Увы, но это не правильный ответ", "error")
    } else {
      addSnack("Отлично! Вы явно разбираетесь в картах", "success")
    }
  }

  return (
    <>
      {geoPoints.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customWrongIcon} position={marker}>
          <Popup>
            <Button
              onClick={() => chooseAnswer(marker as LatLng)}
            >
              Выбрать точку
            </Button>
          </Popup>
        </Marker>
      ))}
    </>
  );
};