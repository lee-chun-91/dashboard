import React, { useState, useEffect } from "react";
import apis from "../../apis/apis";
import Widget from "../common/Widget";

const TopReferralCircle = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apis.getPieChartInfo().then((response) => {
      console.log(response);
    });
  }, []);

  return <Widget title={"Top Referral"}></Widget>;
};

export default TopReferralCircle;
