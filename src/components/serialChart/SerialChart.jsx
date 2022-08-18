import React from "react";
import styled from "styled-components";

import Widget from "../common/Widget";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const SerialChart = ({ data }) => {
  if (data !== undefined) {
    const labels = data.map((item) => item[0]);

    const chartData = {
      labels,
      datasets: [
        {
          type: "line",
          label: "Unique Event Count",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          fill: false,
          data: data.map((item) => Number(item[1])),
        },
        {
          type: "bar",
          label: "Total Event Count",
          backgroundColor: "rgb(75, 192, 192)",
          data: data.map((item) => Number(item[2])),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    };

    return (
      <Widget title={"DAU"}>
        <Container>
          <Chart type="bar" data={chartData} />
        </Container>
      </Widget>
    );
  }
};

export default SerialChart;

const Container = styled.div`
  width: 90%;
  height: 90%;
`;
