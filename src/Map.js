// Map.js

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MarkerInfoWindow from './MarkerInfoWindow';

const Map = () => {
  const containerStyle = {
    width: '80%',
    height: 'calc(100vh - 100px)', // Adjust the height based on your desired space
    margin: 'auto',
    opacity: 0.9,
    position: 'relative',
  };

  const center = {
    lat: -37.8136,
    lng: 144.9631,
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
      <div style={containerStyle}>
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
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
                url: 'bball_marker.png',
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}

          {selectedMarker && <MarkerInfoWindow selectedMarker={selectedMarker} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
