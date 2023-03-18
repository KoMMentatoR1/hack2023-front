import React, {FC, useState} from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng } from 'leaflet'
import PlaceIcon from '@mui/icons-material/Place';

interface CreateQuizProps {
  type: number
}

export const CreateQuizMarker: FC<CreateQuizProps> = ({ type }) => {
  const [mod, setMod] = useState<string>('wrong')
  const [marker, setMarker] = useState<LatLng[]>([]);

  const [wrongMarkers, setWrongMarkers] = useState<LatLng[]>([])
  const [answer, setAnswer] = useState<string>('')

  const map = useMapEvents({
    click: (e) => {
      if (type === 1) {
        setMarker([e.latlng])
      } else {
        mod === 'right' ?
          setMarker([e.latlng]) :
          setWrongMarkers([...wrongMarkers, e.latlng])
      }
    }
  });

  const customWrongIcon = new Icon({
    iconUrl: require('../../../shared/static/Location_Red.svg'),
    iconSize: [38, 38]
  })

  const customRightIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/6388/6388090.png",
    iconSize: [38, 38]
  })

  return (
    <>
      {wrongMarkers.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customWrongIcon} position={marker}>
          <Popup >
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      ))}
      {marker.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customRightIcon} position={marker}>
          <Popup >
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      ))}
    </>
  );
};