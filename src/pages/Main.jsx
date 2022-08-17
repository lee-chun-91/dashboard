import React, { useState, useEffect } from "react";
import apis from "../apis/apis";

const Main = (props) => {
  const [summery, setSummery] = useState();
  const [topReferer, setTopReferer] = useState();
  const [tableInfo, setTableInfo] = useState();

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
      <div>메인 페이지</div>
    </>
  );
};

export default Main;
