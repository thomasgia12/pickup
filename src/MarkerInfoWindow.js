// MarkerInfoWindow.js

import React, { useState } from 'react';
import { InfoWindow } from '@react-google-maps/api';

const MarkerInfoWindow = ({ selectedMarker, onCloseInfoWindow, onDeleteMarker }) => {
  const [comments, setComments] = useState(selectedMarker.comments);

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSaveComments = () => {
    // Implement logic to save comments, e.g., update the marker object or send to a server
    console.log('Comments saved:', comments);

    // Close the info window
    onCloseInfoWindow();
  };

  const handleDeleteComments = () => {
    // Implement logic to delete comments, e.g., update the marker object or send to a server
    setComments('');

    // Delete the marker
    onDeleteMarker(selectedMarker.id);

    // Close the info window when comments are deleted
    onCloseInfoWindow();
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
          <textarea value={comments} onChange={handleCommentsChange} />
        </label>
        <br />
        <button onClick={handleSaveComments}>Save Game</button>
        <button onClick={handleDeleteComments}>Delete Game</button>
      </div>
    </InfoWindow>
  );
};

export default MarkerInfoWindow;
