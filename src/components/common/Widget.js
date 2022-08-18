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
  padding: 10px;
  border: 1px solid rgba(224, 224, 224, 0.7);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: rgba(41, 184, 255, 1);
  font-weight: 600;
  font-size: 16px;
  padding: 10px 10px;
`;
