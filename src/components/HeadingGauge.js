import React from 'react';
import '../styles/HeadingGauge.css';

export default function HeadingGauge({ heading = 50 }) {
  const normalizedHeading = heading % 360;

  return (
    <div className="gauge">
      <h2 className="gauge-title">Heading</h2>
      <div className="heading-dial">
        <div
          className="compass-rose"
          style={{ transform: `rotate(-${normalizedHeading}deg)` }}
        >
          <span className="compass-label north">N</span>
          <span className="compass-label east">E</span>
          <span className="compass-label south">S</span>
          <span className="compass-label west">W</span>
        </div>
        <div className="heading-pointer">▲</div>
      </div>
      <p className="gauge-value">{normalizedHeading.toFixed(0)}°</p>
    </div>
  );
}

