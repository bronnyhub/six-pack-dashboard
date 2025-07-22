import AirspeedGauge from './components/AirspeedGauge';
import AttitudeGauge from './components/AttitudeGauge';
import AltimeterGauge from './components/AltimeterGauge';
import TurnCoordinator from './components/TurnCoordinator';
import HeadingGauge from './components/HeadingGauge';
import VSI from './components/VSI';
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
