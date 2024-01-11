import './App.css'; // Import the regular CSS file
import Map from './Map.js';
import logo from './logo.png';

function App() {
  return (
    <div>
      {/* <div className="header">
        <h1>Melbourne's First Pickup Basketball Map</h1>
      </div> */}
      <Map />
      {/* !! add logo in bottom left
      <img src={logo} alt="Logo" style={{ position: 'absolute', bottom: '10px', left: '10px' }} /> */}
    </div>
  );
}

export default App;
