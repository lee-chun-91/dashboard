import React, { useState, useEffect } from "react";
import apis from "../apis/apis";

import GridLayout from "react-grid-layout";
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

import SumUniqueEventCount from "../components/sumUniqueEventCount/SumUniqueEventCount";
import SumTotalEventCount from "../components/sumTotalEventCount/SumTotalEventCount";
import Dau from "../components/dau/Dau";
import TopReferralCircle from "../components/topReferralPie/TopReferralPie";
import TopReferralTable from "../components/topReferralTable/TopReferralTable";

const Main = (props) => {
  const [sortedDataByDate, setSortedDataByDate] = useState();
  const [uniqueEventCount, setUniqueEventCount] = useState();
  const [uniqueEventCountCompareValue, setUniqueEventCountCompareValue] =
    useState();
  const [totalEventCount, setTotalEventCount] = useState();
  const [totalEventCountCompareValue, setTotalEventCountCompareValue] =
    useState();

  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 1 },
    { i: "b", x: 6, y: 0, w: 6, h: 1 },
    { i: "c", x: 0, y: 1, w: 12, h: 3 },
    { i: "d", x: 0, y: 3, w: 6, h: 3 },
    { i: "e", x: 6, y: 3, w: 6, h: 3 },
  ];

  const widgetStyle = {
    backgroundColor: "white",
    border: "1px solid #919191",
    boxShadow: "1px 2px 9px #919191",
  };

  useEffect(() => {
    apis.getSummeryInfo().then((response) => {
      const data = response.data.data.rows.sort(
        (a, b) => new Date(a[0]) - new Date(b[0])
      );

      // 1-1. uniqueEventCount
      const uniqueEventCount = data
        .map((item) => Number(item[1]))
        .reduce((prev, cur) => prev + cur, 0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setUniqueEventCount(uniqueEventCount);

      //1-2. uniqueEventCountCompareValue
      const uniqueEventCountCompareValue = (
        data[data.length - 1][1] - data[data.length - 2][1]
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setUniqueEventCountCompareValue(uniqueEventCountCompareValue);

      // 2-1. totalEventCount
      const totalEventCount = data
        .map((item) => Number(item[2]))
        .reduce((prev, curr) => prev + curr)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setTotalEventCount(totalEventCount);

      // 2-2. totalEventCountCompareValue
      const totalEventCountCompareValue = (
        data[data.length - 1][2] - data[data.length - 2][2]
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setTotalEventCountCompareValue(totalEventCountCompareValue);

      // 3. serialChartData
      setSortedDataByDate(data);
    });
  }, []);

  return (
    <>
      <GridLayout
        className="layout"
        layout={layout}
        cols={16}
        rowHeight={180}
        width={1200}
        style={{ backgroundColor: "#c2c2c2" }}
      >
        <div key="a" style={{ ...widgetStyle }}>
          <SumUniqueEventCount
            count={uniqueEventCount}
            compareCount={uniqueEventCountCompareValue}
          />
        </div>
        <div key="b" style={{ ...widgetStyle }}>
          <SumTotalEventCount
            count={totalEventCount}
            compareCount={totalEventCountCompareValue}
          />
        </div>
        <div key="c" style={{ ...widgetStyle }}>
          <Dau data={sortedDataByDate} />
        </div>
        <div key="d" style={{ ...widgetStyle }}>
          <TopReferralCircle />
        </div>
        <div key="e" style={{ ...widgetStyle }}>
          <TopReferralTable />
        </div>
        /
      </GridLayout>
    </>
  );
};

export default Main;
