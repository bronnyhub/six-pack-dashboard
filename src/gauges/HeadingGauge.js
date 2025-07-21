import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './Gauge.css';

export default function HeadingGauge() {
  return (
    <div className="p-4 text-center">
      <h2 className="font-bold">Heading</h2>
      <GaugeChart
        id="heading-gauge"
        style={{ width: "50%", height: "200px" }}
        nrOfLevels={20}
        percent={0.1}        // 60% of max
        textColor="#000"
        needleColor="#000"
        colors={["#00FF00", "#FF0000"]}
      />
    </div>
  );
}
