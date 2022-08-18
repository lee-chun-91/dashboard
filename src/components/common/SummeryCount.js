import React from "react";
import styled from "styled-components";

const SummeryCount = ({ count }) => {
  return <Count>{count}</Count>;
};

export default SummeryCount;

const Count = styled.div`
  padding-top: 6px;
  padding-left: 6px;
  font-size: 28px;
  font-weight: 700;
`;
