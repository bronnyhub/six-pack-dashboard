import React from 'react';
import '../styles/AttitudeGauge.css';

export default function AttitudeGauge({ pitch = 60, roll = 0 }) {

  return (
    <div className="gauge">
      <h2 className="gauge-title">Attitude</h2>
      <div className="horizon-wrapper" style={{ transform: `rotate(${roll}deg)` }}>
        <div className="horizon" style={{ top: `${pitch}px` }} />
        <div className="center-marker">+</div>
      </div>
      <p className="gauge-value">Pitch: {pitch}°, Roll: {roll}°</p>
    </div>
  );
}
