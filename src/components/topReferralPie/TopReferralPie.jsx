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

  console.log(labels);

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

  const getSortedArr = (array) => {
    // 1. 출연 빈도 구하기
    const counts = array.reduce((pv, cv) => {
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
    }, {});

    // 2. 요소와 개수를 표현하는 배열 생성
    let result = [];
    for (let key in counts) {
      result.push([key, counts[key]]);
    }

    // 3. 출현 빈도별 정리
    result.sort((first, second) => {
      return second[1] - first[1];
    });

    result = result.filter((item, index) => index < 5).map((item) => item[0]);

    return result;
  };

  useEffect(() => {
    apis.getPieChartInfo().then((response) => {
      // 1. sort response data
      const sortedDataByCount = response.data.data.rows
        .map((item) => [item[0], Number(item[1])])
        .sort((a, b) => b[1] - a[1]);

      // hostnameFrequency & setLabels
      let hostname = sortedDataByCount.map((item) => {
        let hostname = item[0].split(/\.co|\.com|\.io|\.net/)[0].split(".");
        return hostname[hostname.length - 1];
      });
      console.log(hostname);

      let hostnameFrequencyTop4 = getSortedArr(hostname);
      setLabels([...hostnameFrequencyTop4, "etc"]);

      // dataSet
      let dataset = [0, 0, 0, 0, 0, 0];

      sortedDataByCount.forEach((item) => {
        if (item[0].includes(hostnameFrequencyTop4[0])) {
          dataset[0] += item[1];
        } else if (item[0].includes(hostnameFrequencyTop4[1])) {
          dataset[1] += item[1];
        } else if (item[0].includes(hostnameFrequencyTop4[2])) {
          dataset[2] += item[1];
        } else if (item[0].includes(hostnameFrequencyTop4[3])) {
          dataset[3] += item[1];
        } else if (item[0].includes(hostnameFrequencyTop4[4])) {
          dataset[4] += item[1];
        } else {
          dataset[5] += item[1];
        }
      });
      setReferralUniqueEventCount(dataset);
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
