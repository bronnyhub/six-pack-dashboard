import React from 'react';
import GaugeChart from 'react-gauge-chart';
import '../styles/AirspeedGauge.css';

export default function AirspeedGauge({ value = 0.6, max = 300, units = "knots" }) {
  const percentage = value / max;

  return (
    <div className="gauge">
      <h2 className="gauge-title">Airspeed</h2>
      <GaugeChart
        id="airspeed-gauge"
        nrOfLevels={30}
        percent={percentage}
        textColor="#ffffff"
        needleColor="#FFCC00"
        needleBaseColor="#222"
        arcWidth={0.3}
        colors={["#1abc9c", "#e67e22", "#e74c3c"]}
      />
      <p className="gauge-value">{value} {units}</p>
    </div>
  );
}