import React from "react";
import styled from "styled-components";

const SummeryDescription = ({ description }) => {
  return (
    <DescriptionArea>
      <Icon>Sum</Icon>
      <Text>{description}</Text>
    </DescriptionArea>
  );
};

export default SummeryDescription;

const DescriptionArea = styled.div`
  padding-top: 3px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  padding: 3px;
  display: inline;
  border-radius: 3px;
  background-color: #e6e6e6;
  color: #919191;
  font-size: 12px;
  font-weight: 500;
`;

const Text = styled.div`
  padding-left: 5px;
  font-size: 12px;
  font-weight: 500;
  color: #919191;
`;
