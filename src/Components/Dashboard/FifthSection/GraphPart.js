import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import styled from "styled-components";

const GraphParent = styled.div`
  width: 1100px;
  padding: 20px;
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
  type: "radar",
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
      "Data K",
      "Data L",
      "Data M",
      "Data N",

      "Data 0",
      "Data P",
      "Data Q",
      "Data R",
      "Data S",
      "Data T",
    ],
    datasets: [
      {
        label: "Count",
        data: [
          22,
          35,
          12,
          23,
          45,
          34,
          28,
          12,
          34,
          29,
          11,
          19,
          21,
          25,
          19,
          17,
          22,
          29,
          31,
          44,
        ],
        backgroundColor: [
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
        ],
        borderColor: [
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
          "#ff7171",
        ],
        borderWidth: 2,
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
            fontColor: "#0f1218",
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
            labelString: "",
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
            fontColor: "#0f1218",
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

function GraphPart() {
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

export default GraphPart;
