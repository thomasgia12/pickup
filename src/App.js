import logo from './logo.svg';
import './App.css';
import GoogleMapComponent from './Map.js';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>Melbourne's First Pickup Basketball Map</h1>
      </div>
    <GoogleMapComponent />
  </div>
  );
}

export default App;
