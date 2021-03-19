import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import styled from "styled-components";

const GraphParent = styled.div`
  width: 400px;
  padding-top: 5rem;
  position: relative;
`;

const GraphPara = styled.div`
  font-size: 15px;
  font-weight: 800;
  position: absolute;
  top: 10rem;
  left: 185px;
`;

const chartConfig = {
  type: "doughnut",
  data: {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Count",
        data: [22, 35, 12, 23],
        backgroundColor: ["#f39189", "#bb8082", "#6e7582", "#046582"],
        borderColor: ["#f39189", "#bb8082", "#6e7582", "#046582"],
        borderWidth: 4,
      },
    ],
  },
  options: {
    legend: {
      position: "bottom",
      display: false,
    },
    responsive: true,
    cutoutPercentage: 70,
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "black",
            fontStyle: "normal",
            beginAtZero: true,
            maxTicksLimit: 10,
            padding: 10,
            stepSize: 10,
            fontSize: 13,
            display: false,
          },
          gridLines: {
            drawTicks: false,
            display: false,
            color: "lightgrey",
            lineWidth: 1,
            drawBorder: false,
          },
          scaleLabel: {
            display: false,
            fontSize: 16,
            fontStyle: "bold",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            display: false,

            color: "lightgrey",
            lineWidth: 1,
          },
          ticks: {
            padding: 1,
            fontColor: "black",
            fontStyle: "normal",
            display: false,
            fontSize: 12,
          },
        },
      ],
    },
  },
};

function GraphSectionTwo() {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const newChartInstance = new Chartjs(chartRef.current, chartConfig);
    setChartInstance(newChartInstance);
  }, []);

  return (
    <GraphParent>
      <canvas id="myChart" ref={chartRef} />
      <GraphPara>67</GraphPara>
    </GraphParent>
  );
}

export default GraphSectionTwo;
