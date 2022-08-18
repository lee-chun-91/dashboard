import React, { useState, useEffect } from "react";
import apis from "../apis/apis";
import styled from "styled-components";

import GridLayout from "react-grid-layout";
// div resize 를 위해 import
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

import SumUniqueEventCount from "../components/sumUniqueEventCount/SumUniqueEventCount";
import SumTotalEventCount from "../components/sumTotalEventCount/SumTotalEventCount";
import Dau from "../components/dau/Dau";
import TopReferralCircle from "../components/topReferralCircle/TopReferralCircle";
import TopReferralTable from "../components/topReferralTable/TopReferralTable";

const Main = (props) => {
  // const [summeryData, setSummeryData] = useState();
  const [uniqueEventCount, setUniqueEventCount] = useState();
  const [totalEventCount, setTotalEventCount] = useState();

  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 1 },
    { i: "b", x: 6, y: 0, w: 6, h: 1 },
    { i: "c", x: 0, y: 1, w: 12, h: 2 },
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
      const uniqueEventCount = response.data.data.rows
        .reduce((prev, curr) => prev[1] + curr[1], 0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setUniqueEventCount(uniqueEventCount);

      const totalEventCount = response.data.data.rows
        .reduce((prev, curr) => prev[2] + curr[2], 0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setTotalEventCount(totalEventCount);
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
          <SumUniqueEventCount count={uniqueEventCount} />
        </div>
        <div key="b" style={{ ...widgetStyle }}>
          <SumTotalEventCount count={totalEventCount} />
        </div>
        <div key="c" style={{ ...widgetStyle }}>
          <Dau />
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
