import React, {FC, useState} from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import {Icon} from "leaflet";

export const QuizMarker: FC = () => {
  const [markers, setMarkers] = useState([
    {
      lat: 40,
      lng: -95.6268544
    }
  ]);

  const map = useMapEvents({
    click: (e) => {
      console.log(e.latlng)
      setMarkers([...markers, e.latlng]);
    }
  });

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/7263/7263478.png",
    iconSize: [38, 38]
  })
  return (
    <>
      {markers.map((marker, i) => (
        <Marker key={`marker-${i}`} icon={customIcon} position={marker}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      ))}
    </>
  );
};