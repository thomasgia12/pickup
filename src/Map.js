// Map.js

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MarkerInfoWindow from './MarkerInfoWindow';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: 'calc(100vh)', // Adjust the height based on your desired space
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
          // add padding
          options={{
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
              {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#c9b2a6" }],
              },
              {
                featureType: "administrative.land_parcel",
                elementType: "geometry.stroke",
                stylers: [{ color: "#dcd2be" }],
              },
              {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ae9e90" }],
              },
              {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#93817c" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#a5b076" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#447530" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#f5f1e6" }],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#fdfcf8" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#f8c967" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#e9bc62" }],
              },
              {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [{ color: "#e98d58" }],
              },
              {
                featureType: "road.highway.controlled_access",
                elementType: "geometry.stroke",
                stylers: [{ color: "#db8555" }],
              },
              {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{ color: "#806b63" }],
              },
              {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
              },
              {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [{ color: "#8f7d77" }],
              },
              {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#ebe3cd" }],
              },
              {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
              },
              {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{ color: "#b9d3c2" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#92998d", opacity: 0 }],
              }
              ],
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            rotateControl: false,
            fullscreenControl: false,
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
