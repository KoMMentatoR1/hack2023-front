import React, {FC, useState} from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng } from 'leaflet'
import { Button } from '@mui/material'

interface ByManyMarkerProps {
  geoPoints: LatLng[],
  correctAnswer: LatLng
}

export const ByManyMarker: FC<ByManyMarkerProps> = ({geoPoints, correctAnswer}) => {

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
    // убрать и проверять на бэке
    const result = correctAnswer.lat !== marker.lat && correctAnswer.lng !== marker.lng
    // Передача результата на бэк и переход к следующуему вопросу
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