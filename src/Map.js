// Map.js

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MarkerInfoWindow from './MarkerInfoWindow';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -37.8136, // Melbourne, Victoria - Replace with your desired latitude
    lng: 144.9631, // Melbourne, Victoria - Replace with your desired longitude
  };

  const initialZoom = 8;

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      id: Date.now(),
      comments: '',
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setSelectedMarker(newMarker);
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={initialZoom}
        onClick={handleMapClick}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => handleMarkerClick(marker)}
            icon={{
              url: 'https://example.com/custom-marker.png',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selectedMarker && <MarkerInfoWindow selectedMarker={selectedMarker} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
