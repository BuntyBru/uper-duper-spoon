import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import styled from "styled-components";

const GraphParent = styled.div`
  width: 550px;
  padding: 20px;
  position: relative;
  margin: 20px 20px 20px;
  background: #0f1218;
`;

const GraphPara = styled.div`
  font-size: 15px;
  font-weight: 800;
  position: absolute;
  top: 10rem;
  left: 185px;
`;

const chartConfig = {
  type: "line",
  data: {
    labels: [
      "Data A",
      "Data B",
      "Data C",
      "Data D",
      "Data E",
      "Data F",
      "Data G",
      "Data H",
      "Data I",
      "Data J",
    ],
    datasets: [
      {
        label: "Count",
        data: [22, 31, 12, 13, 45, 34, 58, 32, 49, 42],
        backgroundColor: [
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
        ],
        borderColor: [
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
          "#046582",
        ],
        borderWidth: 1,
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
            fontColor: "white",
            fontStyle: "normal",
            beginAtZero: true,
            maxTicksLimit: 10,
            padding: 10,
            fontSize: 13,
          },

          gridLines: {
            drawTicks: false,
            display: true,
            color: "#0f1218",
            lineWidth: 1,
            drawBorder: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Something important",
            fontSize: 13,
            fontStyle: "bold",
          },
          stacked: false,
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            display: false,
            color: "transparent",
            lineWidth: 1,
          },
          ticks: {
            padding: 1,
            fontColor: "white",
            fontStyle: "normal",
            fontSize: 13,
          },
          stacked: false,

          barPercentage: 0.8,
        },
      ],
    },
  },
};

function Graphpart() {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const newChartInstance = new Chartjs(chartRef.current, chartConfig);
    setChartInstance(newChartInstance);
  }, []);

  return (
    <GraphParent>
      <canvas id="myChart" ref={chartRef} />
    </GraphParent>
  );
}

export default Graphpart;
