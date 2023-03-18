import React, { FC, useRef, useState } from 'react'
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng, popup } from 'leaflet'
import { Button, TextField } from '@mui/material'
import { BaseInput } from '../../base/base-input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'

interface ByLocMarkerProps {
  geoPoints: LatLng[],
  correctAnswer: string
}

export const ByLocMarker: FC<ByLocMarkerProps> = ({geoPoints, correctAnswer}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const {answerText} = useTypeSelector(state => state.answer)

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

  const onSubmit: SubmitHandler<FieldValues> = data =>
    console.log(data)

  return (
    <>
      {geoPoints.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customRightIcon} position={marker}>
          <Popup autoClose={false} closeOnEscapeKey={false} closeOnClick={false}>
            <BaseInput
              rules={{
                required: 'Ответ не должен быть пустым',
              }}
              required
              error={errors.answer ? true : false}
              label='Название места'
              name='answer'
              helperText={errors.answer?.message as string}
              control={control}
              defaultValue={answerText}
            />
            <Button
              onClick={handleSubmit(onSubmit)}
            >
              Подтвердить
            </Button>
          </Popup>
        </Marker>
      ))}
    </>
  );
};