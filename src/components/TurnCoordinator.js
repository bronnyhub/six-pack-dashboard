import React from 'react';
import '../styles/TurnCoordinator.css';

export default function TurnCoordinator({ bank = 10 }) {
  return (
    <div className="gauge">
      <h2 className="gauge-title">Turn Coordinator</h2>
      <div className="turn-wrapper">
<img
  src="/img/plane.png"
  alt="Turn Indicator"
  className="airplane-image"
  style={{ transform: `rotate(${bank}deg)` }}
/>        <div className="ticks">
          <span className="tick left">|</span>
          <span className="tick right">|</span>
        </div>
      </div>
      <p className="gauge-value">Bank: {bank}°</p>
    </div>
  );
}