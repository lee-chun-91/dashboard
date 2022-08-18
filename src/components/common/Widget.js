import React from "react";
import styled from "styled-components";

const Widget = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Widget;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 10px;
`;

const Title = styled.div`
  color: #4d81f9;
  font-weight: 600;
  font-size: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  padding-top: 10px;
`;
