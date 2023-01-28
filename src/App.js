import './App.css';
import Device from './components/Device/Device';
import DeviceDetails from './components/DeviceDetails/DeviceDetails';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="Iphone"></Device>
      <DeviceDetails price="150000"></DeviceDetails>
      <Watch></Watch>
    </div>
  );
}

export default App;
