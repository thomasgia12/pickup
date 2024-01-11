// MarkerInfoWindow.js

import React from 'react';
import { InfoWindow } from '@react-google-maps/api';

const MarkerInfoWindow = ({ selectedMarker, onCloseInfoWindow }) => {

  const handleCommentsChange = (event) => {
    // Implement the logic to handle comments change if needed
  };

  return (
    <InfoWindow
      position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
      onCloseClick={onCloseInfoWindow}
    >
      <div>
        <h3>Pickup Basketball Game Details</h3>
        <label>
          Comments:
          <textarea value={selectedMarker.comments} onChange={handleCommentsChange} />
        </label>
      </div>
    </InfoWindow>
  );
};

export default MarkerInfoWindow;
