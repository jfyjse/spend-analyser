import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointObjToValue =props.dataPoints.map(dataPoint=> dataPoint.value)
    const MaximunValue = Math.max(...dataPointObjToValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={MaximunValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
