import React from 'react';
import GaugeChart from 'react-gauge-chart';

export default function AltimeterGauge() {
  return (
    <div className="p-4 text-center">
      <h2 className="font-bold">Altimeter</h2>
      <GaugeChart
        id="attitude-gauge"
        style={{ width: "50%", height: "200px" }}
        nrOfLevels={20}
        percent={0.5}
        textColor="#000"
        needleColor="#000"
        colors={["#00FF00", "#FF0000"]}
      />
    </div>
  );
}
