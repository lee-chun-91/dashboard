import React, { useState, useEffect } from "react";
import styled from "styled-components";
import apis from "../../apis/apis";
import Widget from "../common/Widget";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const TopReferralPie = () => {
  const [labels, setLabels] = useState();
  const [referralUniqueEventCount, setReferralUniqueEventCount] = useState();

  const data = {
    labels,
    datasets: [
      {
        label: "Unique Event Count per referral",
        data: referralUniqueEventCount,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    apis.getPieChartInfo().then((response) => {
      // 1. sort response data
      const sortedDataByCount = response.data.data.rows
        .map((item) => [item[0], Number(item[1])])
        .sort((a, b) => b[1] - a[1]);

      // labels
      const top4Referrals = sortedDataByCount.filter(
        (item, index) => index < 4
      );
      const labels = top4Referrals.map((item, index) => item[0]);
      setLabels([...labels, "etc"]);

      // Unique Event Count per referral
      const uniqueEventCount = [0, 0, 0, 0, 0];
      // console.log(uniqueEventCount);

      sortedDataByCount.forEach((item, index) => {
        if (index === 0) {
          uniqueEventCount[0] = item[1];
        } else if (index === 1) {
          uniqueEventCount[1] = item[1];
        } else if (index === 2) {
          uniqueEventCount[2] = item[1];
        } else if (index === 3) {
          uniqueEventCount[3] = item[1];
        } else {
          uniqueEventCount[4] += item[1];
        }

        // console.log(uniqueEventCount);
        setReferralUniqueEventCount(uniqueEventCount);
      });
    });
  }, []);

  return (
    <Widget title={"Top Referral"}>
      <Container>
        <Pie data={data} />
      </Container>
    </Widget>
  );
};

export default TopReferralPie;

const Container = styled.div`
  padding-top: 10px;
  margin: 0 auto;
  width: 80%;
  height: 80%;
`;
