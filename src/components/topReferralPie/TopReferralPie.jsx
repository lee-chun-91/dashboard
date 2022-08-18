import React, { useState, useEffect } from "react";
import apis from "../../apis/apis";
import Widget from "../common/Widget";

const TopReferralPie = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apis.getPieChartInfo().then((response) => {
      const data = response.data.data.rows;
      // console.log(data);

      
    });
  }, []);

  return <Widget title={"Top Referral"}></Widget>;
};

export default TopReferralPie;
