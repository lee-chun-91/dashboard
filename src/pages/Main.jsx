import React, { useState, useEffect } from "react";
import apis from "../apis/apis";
import { Responsive, WidthProvider } from "react-grid-layout";
// div resize 를 위해 import
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

import Dau from "../components/dau/Dau";

const Main = (props) => {
  const [summery, setSummery] = useState();
  const [topReferer, setTopReferer] = useState();
  const [tableInfo, setTableInfo] = useState();

  const ResponsiveGridLayout = WidthProvider(Responsive);

  useEffect(() => {
    // apis.getSummeryInfo().then((response) => {
    //   console.log(response);
    // });
    apis.getPieChartInfo().then((response) => {
      console.log(response);
    });
    apis.getTableInfo().then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onLayoutChange={() => {}}
      >
        <div key="a">a</div>
        <div key="b"></div>
        <div key="c">c</div>
      </ResponsiveGridLayout>
    </>
  );
};

export default Main;
