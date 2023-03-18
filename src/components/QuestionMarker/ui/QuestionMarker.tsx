import React, {FC, useState} from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import {Icon} from "leaflet";
import { Button } from '@mui/material'

export const QuestionMarker: FC = () => {
  const geoPoints = [
    {lat: 51.50948466888523, lng: -0.1454149846619446},
    {lat: 51.50478185285805, lng: -0.05994431120777577},
    {lat: 51.49002907705066, lng: -0.016350835188985172},
    {lat: 51.51472124771925, lng: -0.09255360429271109},
    {lat: 51.51472124771925, lng: -0.09255360429271109},
    {lat: 51.49783367652096, lng: -0.1987912486062338},
    {lat: 51.500217637960134, lng: -0.1241116699366307}
  ]

  const correctAnswer = [{lat: 51.500217637960134, lng: -0.1241116699366307}]

  const map = useMapEvents({
    click: (e) => {
      console.log(e.latlng)
      //setMarkers([...markers, e.latlng]);
    }
  });
  const customWrongIcon = new Icon({
    iconUrl: require('../../../shared/static/Location_Red.svg'),
    iconSize: [38, 38],
  })

  const customRightIcon = new Icon({
    iconUrl: require('../../../shared/static/Location_Green.svg'),
    iconSize: [38, 38],
  })

  const chooseAnswer = () => {

  }

  return (
    <>
      {geoPoints.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customWrongIcon} position={marker}>
          <Popup>
            <Button
              onClick={() => chooseAnswer()}
            >
              Удалить точку
            </Button>
          </Popup>
        </Marker>
      ))}
    </>
  );
};