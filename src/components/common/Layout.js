import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  padding: 10px 10px;
  border: 1px solid black;
`;
