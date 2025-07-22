import React from 'react';
import '../styles/VSI.css';

export default function VSI({ verticalSpeed = 300 }) {
  const isClimbing = verticalSpeed > 0;
  const displayValue = `${Math.abs(verticalSpeed)} fpm`;

  return (
    <div className="gauge">
      <h2 className="gauge-title">Vertical Speed</h2>
      <div className="vsi-gauge">
        <div className={`vsi-bar ${isClimbing ? 'climb' : 'descent'}`} style={{ height: `${Math.min(Math.abs(verticalSpeed) / 20, 100)}%` }}></div>
        <div className="vsi-center-line"></div>
      </div>
      <p className="gauge-value">{isClimbing ? '↑' : '↓'} {displayValue}</p>
    </div>
  );
}
