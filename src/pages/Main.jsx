import React, { useState, useEffect } from "react";
import apis from "../apis/apis";
import { Responsive, WidthProvider } from "react-grid-layout";
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
    { i: "a", x: 0, y: 0, w: 2, h: 2 },
    { i: "b", x: 4, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 0, y: 3, w: 2, h: 2 },
    { i: "d", x: 4, y: 3, w: 2, h: 2 },
    { i: "e", x: 0, y: 6, w: 8, h: 2 },
  ];

  useEffect(() => {
    // apis.getSummeryInfo().then((response) => {
    //   console.log(response);
    // });
    // apis.getPieChartInfo().then((response) => {
    //   console.log(response);
    // });
  }, []);

  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        width={"1200"}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onLayoutChange={() => {}}
      >
        <div key="a">
          <SumUniqueEventCount />
        </div>
        <div key="b">
          <SumTotalEventCount />
        </div>
        <div key="c">
          <Dau />
        </div>
        <div key="d">
          <TopReferralCircle />
        </div>
        <div key="e">
          <TopReferralTable />
        </div>
      </ResponsiveGridLayout>
    </>
  );
};

export default Main;
