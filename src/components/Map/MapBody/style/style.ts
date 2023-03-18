import { styled } from '@mui/material';
import { MapContainer } from 'react-leaflet';
export const MapContainerStyled = styled(MapContainer)(({ theme }) => ({
	flexGrow: '1',
	height: "calc(100vh - 64px)" 
}))