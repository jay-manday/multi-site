import React from 'react';
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

const Header = () => (

  <HeaderBox w={1}>
    hello
  </HeaderBox>
)

export default Header;

const HeaderBox = styled(Box) `
  background-color: #FFD26E;
  height: 500px;
`;
