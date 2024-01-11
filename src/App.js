import './App.css'; // Import the regular CSS file
import Map from './Map.js';
import logo from './logo.png';
import menu_icon from './menu.svg';

function App() {
  return (
    <div>
      {/* <div className="header">
        <h1>Melbourne's First Pickup Basketball Map</h1>
      </div> */}
      <Map />
      <img src={menu_icon} alt="Menu" style={{ position: 'absolute', top: '30px', left: '40px', height: '5vh' }} />
      <img src={logo} alt="Logo" style={{ position: 'absolute', bottom: '20px', left: '40px', height: '20vh' }} />
    </div>
  );
}

export default App;
