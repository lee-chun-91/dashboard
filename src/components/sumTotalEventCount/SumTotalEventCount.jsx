import React from "react";
import Widget from "../common/Widget";
import styled from "styled-components";
import SummeryDescription from "../common/SummeryDescription";
import SummeryCount from "../common/SummeryCount";

const SumTotalEventCount = ({ count, compareCount }) => {
  return (
    <Widget title={"접속횟수"}>
      <SummeryDescription description="Total Event Count" />
      <SummeryCount count={count} compareCount={compareCount} />
    </Widget>
  );
};

export default SumTotalEventCount;
