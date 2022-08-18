import React, { useState, useEffect } from "react";
import apis from "../apis/apis";
import styled from "styled-components";

import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
// div resize 를 위해 import
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

import SumUniqueEventCount from "../components/sumUniqueEventCount/SumUniqueEventCount";
import SumTotalEventCount from "../components/sumTotalEventCount/SumTotalEventCount";
import Dau from "../components/dau/Dau";
import TopReferralCircle from "../components/topReferralCircle/TopReferralCircle";
import TopReferralTable from "../components/topReferralTable/TopReferralTable";

const Main = (props) => {
  const [summery, setSummery] = useState();

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 1 },
    { i: "b", x: 6, y: 0, w: 6, h: 1 },
    { i: "c", x: 0, y: 1, w: 12, h: 2 },
    { i: "d", x: 0, y: 3, w: 6, h: 3 },
    { i: "e", x: 6, y: 3, w: 6, h: 3 },
  ];

  // useEffect(() => {
  // apis.getSummeryInfo().then((response) => {
  //   console.log(response);
  // });
  // apis.getPieChartInfo().then((response) => {
  //   console.log(response);
  // });
  // }, []);

  return (
    <>
      <GridLayout
        className="layout"
        layout={layout}
        cols={16}
        rowHeight={120}
        width={1200}
        // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        style={{ backgroundColor: "#c2c2c2" }}
      >
        <div
          key="a"
          style={{
            backgroundColor: "white",
            border: "1px solid rgba(224, 224, 224, 0.7)",
          }}
        >
          <SumUniqueEventCount />
        </div>
        <div
          key="b"
          style={{
            backgroundColor: "white",
            border: "1px solid rgba(224, 224, 224, 0.7)",
          }}
        >
          <SumTotalEventCount />
        </div>
        <div
          key="c"
          style={{
            backgroundColor: "white",
            border: "1px solid rgba(224, 224, 224, 0.7)",
          }}
        >
          <Dau />
        </div>
        <div
          key="d"
          style={{
            backgroundColor: "white",
            border: "1px solid rgba(224, 224, 224, 0.7)",
          }}
        >
          <TopReferralCircle />
        </div>
        <div
          key="e"
          style={{
            backgroundColor: "white",
            border: "1px solid rgba(224, 224, 224, 0.7)",
          }}
        >
          <TopReferralTable />
        </div>
        /
      </GridLayout>
    </>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;
