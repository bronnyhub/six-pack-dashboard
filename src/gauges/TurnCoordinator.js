import React from 'react';
import GaugeChart from 'react-gauge-chart';

export default function TurnCoordinator() {
  return (
    <div className="p-4 text-center">
      <h2 className="font-bold">Turning</h2>
      <GaugeChart
        id="turn-coordinator"
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
