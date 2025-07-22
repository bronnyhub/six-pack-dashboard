import React from 'react';
import '../styles/AltimeterGauge.css';

export default function AltimeterGauge({ altitude = 1500 }) {
  return (
    <div className="gauge">
      <h2 className="gauge-title">Altimeter</h2>
      <div className="altimeter-display">
        <span className="altimeter-value">{altitude.toLocaleString()} ft</span>
      </div>
      <p className="gauge-value">Altitude</p>
    </div>
  );
}

