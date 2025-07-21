import AirspeedGauge from './gauges/AirspeedGauge';
import AttitudeGauge from './gauges/AttitudeGauge';
import AltimeterGauge from './gauges/AltimeterGauge';
import TurnCoordinator from './gauges/TurnCoordinator';
import HeadingGauge from './gauges/HeadingGauge';
import VSI from './gauges/VSI';
import './App.css';

function App() {
  return (
    <div className="dashboard-grid">
      <AirspeedGauge />
      <AttitudeGauge />
      <AltimeterGauge />
      <TurnCoordinator />
      <HeadingGauge />
      <VSI />
    </div>
  );
}

export default App;
