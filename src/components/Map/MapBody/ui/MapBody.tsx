import React, {FC} from 'react';
import {LatLngTuple} from "leaflet";
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'

interface MapProps {
  children?: React.ReactNode
}

export const MapBody: React.FC<MapProps> = ({ children }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}
                  scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { children }
    </MapContainer>
  )
}