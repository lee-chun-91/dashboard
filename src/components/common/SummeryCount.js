import React from "react";
import styled from "styled-components";

const SummeryCount = ({ count, compareCount }) => {
  return (
    <>
      <Count>{count}</Count>
      <CompareCount>{compareCount}</CompareCount>
    </>
  );
};

export default SummeryCount;

const Count = styled.div`
  padding-top: 6px;
  font-size: 2em;
  font-weight: 700;
`;

const CompareCount = styled.div`
  padding-top: 6px;
  color: #4d81f9;
  font-weight: 400;
  font-size: 1em;
`;
