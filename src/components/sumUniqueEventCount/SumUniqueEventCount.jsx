import React from "react";
import Widget from "../common/Widget";
import SummeryDescription from "../common/SummeryDescription";
import SummeryCount from "../common/SummeryCount";

const SumUniqueEventCount = ({ count, compareCount }) => {
  

  return (
    <Widget title={"접속유저"}>
      <SummeryDescription description="Unique Event Count" />
      <SummeryCount count={count} compareCount={compareCount} />
    </Widget>
  );
};

export default SumUniqueEventCount;
